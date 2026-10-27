import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";

export default function CardSlider({
  items,
  linkPrefix = "/services",
  autoPlay = true,
  autoPlayInterval = 3800
}) {
  const L = items.length;
  // 5x copies provide ample buffer in both directions (indices 0 to 5*L-1)
  const extendedItems = [...items, ...items, ...items, ...items, ...items];
  const BASE_INDEX = 2 * L;

  const [visibleCount, setVisibleCount] = useState(() => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) return 1;
      if (window.innerWidth < 1024) return 2;
    }
    return 3;
  });

  const [currentIndex, setCurrentIndex] = useState(BASE_INDEX);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const dragStartX = useRef(0);
  const isPointerDown = useRef(false);
  const trackRef = useRef(null);
  const hasMoved = useRef(false);
  const transitionLock = useRef(false);

  // Responsive items-per-view calculation
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Slide to a specific index with transition guard
  const slideTo = useCallback((newIndex) => {
    if (transitionLock.current) return;
    transitionLock.current = true;
    setIsTransitioning(true);
    setCurrentIndex(newIndex);
  }, []);

  const nextSlide = useCallback(() => {
    slideTo(currentIndex + 1);
  }, [currentIndex, slideTo]);

  const prevSlide = useCallback(() => {
    slideTo(currentIndex - 1);
  }, [currentIndex, slideTo]);

  const goToSlide = (dotIndex) => {
    slideTo(BASE_INDEX + dotIndex);
  };

  // Autoplay loop timer with hover/drag pause
  useEffect(() => {
    if (!autoPlay || isPaused || isDragging) return;

    const interval = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, isPaused, isDragging, nextSlide, autoPlayInterval]);

  // Seamless infinite looping on transition end
  const handleTransitionEnd = () => {
    transitionLock.current = false;
    setIsTransitioning(false);

    // Normalize index when reaching boundary zone
    if (currentIndex >= 3 * L || currentIndex < L) {
      const normalized = BASE_INDEX + (((currentIndex % L) + L) % L);
      if (trackRef.current) {
        trackRef.current.style.transition = "none";
        setCurrentIndex(normalized);
        void trackRef.current.offsetHeight; // Force browser reflow
      }
    }
  };

  // Touch and mouse drag handlers
  const handleTouchStart = (e) => {
    if (transitionLock.current) return;
    isPointerDown.current = true;
    dragStartX.current = e.touches[0].clientX;
    hasMoved.current = false;
    setIsDragging(true);
  };

  const handleTouchMove = (e) => {
    if (!isPointerDown.current) return;
    const currentX = e.touches[0].clientX;
    const diff = currentX - dragStartX.current;
    if (Math.abs(diff) > 5) {
      hasMoved.current = true;
    }
    setDragOffset(diff);
  };

  const handleTouchEnd = () => {
    if (!isPointerDown.current) return;
    isPointerDown.current = false;
    setIsDragging(false);

    const threshold = 40;
    if (dragOffset < -threshold) {
      nextSlide();
    } else if (dragOffset > threshold) {
      prevSlide();
    }
    setDragOffset(0);
  };

  const handleMouseDown = (e) => {
    if (transitionLock.current || e.button !== 0) return;
    isPointerDown.current = true;
    dragStartX.current = e.clientX;
    hasMoved.current = false;
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (!isPointerDown.current) return;
    const diff = e.clientX - dragStartX.current;
    if (Math.abs(diff) > 5) {
      hasMoved.current = true;
    }
    setDragOffset(diff);
  };

  const handleMouseUp = () => {
    if (!isPointerDown.current) return;
    isPointerDown.current = false;
    setIsDragging(false);

    const threshold = 40;
    if (dragOffset < -threshold) {
      nextSlide();
    } else if (dragOffset > threshold) {
      prevSlide();
    }
    setDragOffset(0);
  };

  const handleMouseLeave = () => {
    if (isPointerDown.current) {
      handleMouseUp();
    }
    setIsPaused(false);
  };

  const activeDot = ((currentIndex % L) + L) % L;

  // Calculate transform with real-time drag offset
  const baseTranslatePercent = -currentIndex * (100 / visibleCount);
  const transform = dragOffset !== 0
    ? `translateX(calc(${baseTranslatePercent}% + ${dragOffset}px))`
    : `translateX(${baseTranslatePercent}%)`;

  const transition = isDragging
    ? "none"
    : isTransitioning
    ? "transform 0.45s cubic-bezier(0.25, 1, 0.5, 1)"
    : "none";

  return (
    <div
      className="card-slider-wrapper"
      style={{
        position: "relative",
        padding: "0 10px",
        userSelect: isDragging ? "none" : "auto",
        cursor: isDragging ? "grabbing" : "grab"
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {/* Slider Window */}
      <div style={{ overflow: "hidden", margin: "0 -12px" }}>
        <div
          ref={trackRef}
          onTransitionEnd={handleTransitionEnd}
          style={{
            display: "flex",
            transform,
            transition,
            willChange: "transform"
          }}
        >
          {extendedItems.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              style={{
                flex: `0 0 ${100 / visibleCount}%`,
                maxWidth: `${100 / visibleCount}%`,
                padding: "0 12px",
                boxSizing: "border-box"
              }}
            >
              <div className="single-service compact-slider-card">
                <span className="service-num">{item.number}</span>
                <div
                  className="service-icon"
                  style={{ width: "48px", height: "48px", marginBottom: "16px" }}
                >
                  <img src={item.icon} alt={item.title} draggable="false" />
                </div>

                <h4
                  style={{
                    fontSize: "1.15rem",
                    fontWeight: 700,
                    marginBottom: "12px",
                    lineHeight: 1.35
                  }}
                >
                  <Link
                    to={`${linkPrefix}/${item.slug}`}
                    onClick={(e) => {
                      if (hasMoved.current) e.preventDefault();
                    }}
                    style={{
                      color: "var(--color-dark-bg)",
                      transition: "color 0.2s"
                    }}
                    onMouseOver={(e) =>
                      (e.target.style.color = "var(--color-primary)")
                    }
                    onMouseOut={(e) =>
                      (e.target.style.color = "var(--color-dark-bg)")
                    }
                  >
                    {item.title}
                  </Link>
                </h4>

                <p
                  style={{
                    fontSize: "0.88rem",
                    color: "var(--color-text-muted)",
                    lineHeight: 1.6,
                    margin: 0
                  }}
                >
                  {item.shortDescription || item.homeDescription}
                </p>

                <div style={{ marginTop: "auto", paddingTop: "20px" }}>
                  <Link
                    to={`${linkPrefix}/${item.slug}`}
                    onClick={(e) => {
                      if (hasMoved.current) e.preventDefault();
                    }}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      fontWeight: 600,
                      color: "var(--color-dark-bg)",
                      fontSize: "0.88rem"
                    }}
                  >
                    <span>Read More</span>
                    <i
                      className="fas fa-arrow-right"
                      style={{
                        color: "var(--color-primary)",
                        fontSize: "0.8rem"
                      }}
                    ></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Slider Controls: Pagination Dots and Prev/Next Navigation */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "25px",
          padding: "0 10px"
        }}
      >
        {/* Pagination Dots */}
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          {Array.from({ length: L }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              style={{
                width: activeDot === idx ? "26px" : "10px",
                height: "10px",
                borderRadius: "5px",
                backgroundColor:
                  activeDot === idx
                    ? "var(--color-primary)"
                    : "rgba(0, 0, 0, 0.15)",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "all 0.3s ease"
              }}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Prev & Next Navigation Buttons */}
        <div style={{ display: "flex", gap: "10px" }}>
          <button
            onClick={prevSlide}
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background: "#fff",
              border: "1px solid var(--color-border-subtle)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--color-dark-bg)",
              cursor: "pointer",
              transition: "all 0.2s",
              boxShadow: "0 2px 8px rgba(0,0,0,0.06)"
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "var(--color-primary)";
              e.currentTarget.style.borderColor = "var(--color-primary)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "#fff";
              e.currentTarget.style.borderColor = "var(--color-border-subtle)";
            }}
            aria-label="Previous slide"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button
            onClick={nextSlide}
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background: "#fff",
              border: "1px solid var(--color-border-subtle)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--color-dark-bg)",
              cursor: "pointer",
              transition: "all 0.2s",
              boxShadow: "0 2px 8px rgba(0,0,0,0.06)"
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "var(--color-primary)";
              e.currentTarget.style.borderColor = "var(--color-primary)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "#fff";
              e.currentTarget.style.borderColor = "var(--color-border-subtle)";
            }}
            aria-label="Next slide"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
