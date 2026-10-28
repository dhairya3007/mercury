import React, { useState, useEffect, useRef, useCallback } from "react";

export default function TestimonialSlider({
  items,
  autoPlay = true,
  autoPlayInterval = 2400
}) {
  const L = items.length;
  // 5x copies provide ample buffer in both directions (indices 0 to 5*L-1)
  const extendedItems = [...items, ...items, ...items, ...items, ...items];
  const BASE_INDEX = 2 * L;

  const [visibleCount, setVisibleCount] = useState(() => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 768) return 1;
      if (window.innerWidth < 1100) return 2;
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
  const transitionLock = useRef(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1100) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  // Seamless infinite loop normalization on transition end
  const handleTransitionEnd = () => {
    transitionLock.current = false;
    setIsTransitioning(false);

    if (currentIndex >= 3 * L || currentIndex < L) {
      const normalized = BASE_INDEX + (((currentIndex % L) + L) % L);
      if (trackRef.current) {
        trackRef.current.style.transition = "none";
        setCurrentIndex(normalized);
        void trackRef.current.offsetHeight; // Force browser reflow
      }
    }
  };

  // Touch handlers
  const handleTouchStart = (e) => {
    if (transitionLock.current) return;
    isPointerDown.current = true;
    dragStartX.current = e.touches[0].clientX;
    setIsDragging(true);
  };

  const handleTouchMove = (e) => {
    if (!isPointerDown.current) return;
    const diff = e.touches[0].clientX - dragStartX.current;
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

  // Mouse drag handlers
  const handleMouseDown = (e) => {
    if (transitionLock.current || e.button !== 0) return;
    isPointerDown.current = true;
    dragStartX.current = e.clientX;
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (!isPointerDown.current) return;
    const diff = e.clientX - dragStartX.current;
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
    ? "transform 0.3s cubic-bezier(0.25, 1, 0.5, 1)"
    : "none";

  return (
    <div
      className="testimonial-slider-wrapper"
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
          {extendedItems.map((testi, idx) => (
            <div
              key={`${testi.id}-${idx}`}
              style={{
                flex: `0 0 ${100 / visibleCount}%`,
                maxWidth: `${100 / visibleCount}%`,
                padding: "0 12px",
                boxSizing: "border-box"
              }}
            >
              <div
                className="single-testimonial"
                style={{
                  background: "#16151B",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: "14px",
                  padding: "36px 28px",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  minHeight: "330px",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.35)",
                  transition: "border-color 0.3s ease, transform 0.3s ease"
                }}
              >
                {/* Header: Quote Icon & 5 Stars */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "18px"
                  }}
                >
                  <div
                    className="quote-icon"
                    style={{
                      fontSize: "2rem",
                      color: "var(--color-primary)",
                      opacity: 0.95
                    }}
                  >
                    <i className="fas fa-quote-right"></i>
                  </div>
                  <div
                    className="stars"
                    style={{
                      display: "flex",
                      gap: "4px",
                      color: "#FFB800",
                      fontSize: "1.05rem"
                    }}
                  >
                    {[...Array(testi.rating || 5)].map((_, i) => (
                      <i key={i} className="fas fa-star"></i>
                    ))}
                  </div>
                </div>

                {/* Review Text */}
                <p
                  style={{
                    color: "#D6D5DC",
                    fontSize: "0.96rem",
                    lineHeight: 1.75,
                    marginBottom: "28px",
                    flexGrow: 1,
                    fontStyle: "italic"
                  }}
                >
                  "{testi.review}"
                </p>

                {/* Reviewer Details & Prominent Google Reviews Logo */}
                <div
                  style={{
                    marginTop: "auto",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingTop: "20px",
                    borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                    gap: "14px"
                  }}
                >
                  <div>
                    <h5
                      style={{
                        color: "#fff",
                        fontSize: "1.18rem",
                        fontWeight: 700,
                        margin: "0 0 6px 0",
                        letterSpacing: "-0.2px"
                      }}
                    >
                      {testi.name}
                    </h5>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <i
                        className="fas fa-check-circle"
                        style={{ color: "var(--color-primary)", fontSize: "0.85rem" }}
                      ></i>
                      <span
                        style={{
                          fontSize: "0.82rem",
                          color: "#A4A3AD",
                          fontWeight: 500
                        }}
                      >
                        {testi.platform || "Verified Google Review"}
                      </span>
                    </div>
                  </div>

                  {/* Prominent, High-Resolution Google Reviews Logo */}
                  <div
                    className="reviewer-badge"
                    title="Verified on Google Reviews"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0
                    }}
                  >
                    <img
                      src={testi.platformLogo || "/assets/images/google.png"}
                      alt="Google Reviews"
                      draggable="false"
                      style={{
                        height: "68px",
                        width: "68px",
                        minWidth: "68px",
                        minHeight: "68px",
                        borderRadius: "14px",
                        objectFit: "contain",
                        background: "#ffffff",
                        padding: "3px",
                        boxShadow: "0 4px 16px rgba(0, 0, 0, 0.4)",
                        display: "block"
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Slider Controls: Dots & Navigation Arrows */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "35px",
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
                width: activeDot === idx ? "28px" : "10px",
                height: "10px",
                borderRadius: "5px",
                backgroundColor:
                  activeDot === idx
                    ? "var(--color-primary)"
                    : "rgba(255, 255, 255, 0.25)",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "all 0.3s ease"
              }}
              aria-label={`Go to review ${idx + 1}`}
            />
          ))}
        </div>

        {/* Prev / Next Arrows */}
        <div style={{ display: "flex", gap: "10px" }}>
          <button
            onClick={prevSlide}
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              background: "rgba(255, 255, 255, 0.08)",
              border: "1px solid rgba(255, 255, 255, 0.18)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              cursor: "pointer",
              transition: "all 0.2s"
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "var(--color-primary)";
              e.currentTarget.style.color = "#121215";
              e.currentTarget.style.borderColor = "var(--color-primary)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.08)";
              e.currentTarget.style.color = "#fff";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.18)";
            }}
            aria-label="Previous review"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button
            onClick={nextSlide}
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              background: "rgba(255, 255, 255, 0.08)",
              border: "1px solid rgba(255, 255, 255, 0.18)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              cursor: "pointer",
              transition: "all 0.2s"
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "var(--color-primary)";
              e.currentTarget.style.color = "#121215";
              e.currentTarget.style.borderColor = "var(--color-primary)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.08)";
              e.currentTarget.style.color = "#fff";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.18)";
            }}
            aria-label="Next review"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
