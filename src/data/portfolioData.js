export const portfolioData = {
  profile: {
    name: "Yaraveda Govardhan Reddy",
    title: "Full-Stack Developer",
    bio: "Passionate Full-Stack Developer specializing in crafting robust and interactive web applications. Experienced in developing secure payment integrations, scalable API services, and responsive, premium user interfaces.",
    cvUrl: "#",
    socials: {
      github: "https://github.com/govardhareddy23",
      linkedin: "https://linkedin.com",
      email: "mailto:govardhan.reddy@example.com",
    }
  },
  skills: [
    {
      category: "Frontend Development",
      items: [
        { name: "React.js", level: 90 },
        { name: "JavaScript (ES6+)", level: 88 },
        { name: "Context API & Redux", level: 82 },
        { name: "HTML5 & Vanilla CSS", level: 92 },
        { name: "Responsive Design", level: 90 }
      ]
    },
    {
      category: "Backend & Database",
      items: [
        { name: "Node.js", level: 86 },
        { name: "Express.js", level: 88 },
        { name: "MongoDB & Mongoose", level: 84 },
        { name: "RESTful APIs", level: 90 },
        { name: "JWT Authentication", level: 85 }
      ]
    },
    {
      category: "Integrations & Tools",
      items: [
        { name: "Razorpay Gateway", level: 90 },
        { name: "Payment Lifecycle", level: 88 },
        { name: "Git & GitHub", level: 82 },
        { name: "Postman API Client", level: 85 }
      ]
    }
  ],
  projects: [
    {
      title: "ShopFlow: MERN E-Commerce",
      description: "A high-performance online storefront featuring a full checkout flow, JWT authentication, administrative inventory controls, and an integration with Razorpay (Test Mode) along with a virtual digital wallet payment system.",
      image: "/projects/shopflow.jpg",
      tags: ["React", "Node.js", "Express", "MongoDB", "Razorpay"],
      liveLink: "#",
      codeLink: "https://github.com/govardhareddy23/ECommerce-MERN-razorpay"
    },
    {
      title: "Red Pay Dashboard",
      description: "A simulated payment gateway transaction environment. Created to experiment with credit transactions, payment states (success, pending, failure), ledger tracking, PDF receipts, and user account wallets.",
      image: "/projects/redpay.jpg",
      tags: ["React", "Vanilla CSS", "Node.js", "Express"],
      liveLink: "#",
      codeLink: "#"
    },
    {
      title: "GrandStay Hotel Booking",
      description: "A dynamic booking management system featuring interactive room catalogs, real-time availability filters, date booking validators, user reservation dashboard, and simple billing summary workflows.",
      image: "/projects/hotelbooking.jpg",
      tags: ["React", "Express", "Node.js", "MongoDB", "CSS Modules"],
      liveLink: "#",
      codeLink: "#"
    }
  ],
  experience: [
    {
      role: "Full-Stack Project Developer",
      company: "MERN Stack Solutions",
      period: "2024 - Present",
      description: "Architected and delivered end-to-end web applications. Integrated payment options (Razorpay SDK) and implemented secure backend user session controls (JWT) alongside highly responsive client layouts."
    },
    {
      role: "Payment Integration Explorer",
      company: "Sandbox Implementations",
      period: "2024 - 2025",
      description: "Designed custom ledger patterns and digital wallet databases. Tested webhook processing for payment events and managed transaction reliability pipelines."
    }
  ]
};
