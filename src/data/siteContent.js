export const siteContent = {
  companyName: "Mercury Infotech",
  legalName: "Mercury Infotech Ltd",
  tagline: "Building Digital Success For Businesses.",
  description: "From custom websites to business automation, we build technology that is user-friendly, scalable, and aligned with your business goals. No unnecessary complexity. The tech industry already produces enough of that to power three existential crises a week.",
  aboutShort: "Empowering businesses with modern technology and result-driven digital solutions built for today’s competitive market.",
  
  contact: {
    email: "Info@mercuryinfotech.co.uk",
    secondaryEmail: "imercuryinfotechuk@gmail.com",
    phone: "+44 7442 974622",
    address: "11, Hillrise Court, 135 Kenton Rd, Harrow HA3 0AZ, United Kingdom",
    businessHours: "Monday to Friday: 09:00 AM – 06:00 PM (UK Time)",
    mapEmbedUrl: "https://maps.google.com/maps?q=11%20Hillrise%20Court,%20135%20Kenton%20Rd,%20Harrow%20HA3%200AZ,%20United%20Kingdom&t=&z=15&ie=UTF8&iwloc=&output=embed"
  },

  icoSecurityNumber: "CSN2076847",
  copyrightYear: 2026,

  socialLinks: [
    { name: "Facebook", url: "https://www.facebook.com/profile.php?id=61583623924337", icon: "facebook" },
    { name: "Instagram", url: "https://www.instagram.com/mercuryinfotechuk/", icon: "instagram" },
    { name: "LinkedIn", url: "https://www.linkedin.com/company/109994856/admin/dashboard/", icon: "linkedin" }
  ],

  stats: [
    { number: 13, suffix: "+", label: "Projects Successfully Delivered", icon: "/assets/icons/feature-icon-1.png" },
    { number: 23, suffix: "+", label: "Happy Clients Across Industries", icon: "/assets/icons/feature-icon-2.png" },
    { number: 4, suffix: "+", label: "Creative & Technical Specialists", icon: "/assets/icons/feature-icon-3.png" },
    { number: 2, suffix: "+", label: "Years Of Industry Experience", icon: "/assets/icons/feature-icon-4.png" }
  ]
};

export const siteInfo = {
  companyName: siteContent.companyName,
  legalName: siteContent.legalName,
  tagline: siteContent.tagline,
  description: siteContent.description,
  aboutShort: siteContent.aboutShort,
  phone: siteContent.contact.phone,
  emails: [siteContent.contact.email, siteContent.contact.secondaryEmail],
  address: {
    full: siteContent.contact.address
  },
  social: {
    facebook: siteContent.socialLinks.find(s => s.name === "Facebook")?.url || "https://www.facebook.com/profile.php?id=61583623924337",
    instagram: siteContent.socialLinks.find(s => s.name === "Instagram")?.url || "https://www.instagram.com/mercuryinfotechuk/",
    linkedin: siteContent.socialLinks.find(s => s.name === "LinkedIn")?.url || "https://www.linkedin.com/company/109994856/admin/dashboard/"
  },
  icoNumber: siteContent.icoSecurityNumber,
  stats: siteContent.stats
};
