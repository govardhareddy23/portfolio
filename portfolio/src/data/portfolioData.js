export const portfolioData = {
  profile: {
    name: "Yaraveda Govardhan Reddy",
    title: "Full-Stack AI Engineer",
    bio: "Full-Stack AI Engineer specializing in building autonomous multi-agent systems, RAG pipelines, and production-grade web applications. Experienced in LangGraph orchestration, secure payment integrations, scalable API services, and premium, responsive user interfaces.",
    cvUrl: "#",
    socials: {
      github: "https://github.com/govardhareddy23",
      linkedin: "https://www.linkedin.com/in/yaraveda-reddy/",
      email: "mailto:govardhanreddywork@gmail.com",
    }
  },
  skills: [
    {
      category: "AI / Machine Learning",
      items: [
        { name: "LangChain & LangGraph", level: 88 },
        { name: "LLM Integration (Gemini/OpenAI)", level: 90 },
        { name: "RAG (Retrieval-Augmented Generation)", level: 87 },
        { name: "TensorFlow / Keras", level: 80 },
        { name: "Scikit-learn & XGBoost", level: 80 },
        { name: "SHAP Explainability", level: 75 }
      ]
    },
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
        { name: "Node.js & Express.js", level: 87 },
        { name: "Python & FastAPI", level: 85 },
        { name: "MongoDB & Mongoose", level: 84 },
        { name: "PostgreSQL", level: 82 },
        { name: "RESTful APIs", level: 90 },
        { name: "JWT Authentication", level: 85 }
      ]
    },
    {
      category: "Integrations & Tools",
      items: [
        { name: "Docker", level: 80 },
        { name: "ChromaDB (Vector DB)", level: 82 },
        { name: "Razorpay Gateway", level: 90 },
        { name: "Git & GitHub", level: 85 },
        { name: "Postman API Client", level: 85 }
      ]
    }
  ],
  projects: [
    {
      title: "CareerPilot AI: Multi-Agent Career OS",
      description: "An autonomous 17-agent system orchestrated with LangGraph, automating job discovery, scoring, resume tailoring, and application prep. Features a Supervisor-Planner agent hierarchy, RAG-grounded content generation via ChromaDB, and a strict human-in-the-loop approval workflow before any application is submitted.",
      image: "/projects/careerpilot.jpg",
      tags: ["LangGraph", "LangChain", "Python", "FastAPI", "RAG", "ChromaDB"],
      liveLink: "#",
      codeLink: "#"
    },
    {
      title: "FraudGuard: Real-Time Fraud Detection",
      description: "An end-to-end fraud detection system combining an ANN model with a live FastAPI scoring engine. Benchmarked against Logistic Regression, Random Forest, and XGBoost, with SMOTE for class imbalance and SHAP for model explainability, backed by a PostgreSQL alerting pipeline and review dashboard.",
      image: "/projects/fraudguard.jpg",
      tags: ["Python", "TensorFlow", "XGBoost", "SHAP", "FastAPI", "PostgreSQL"],
      liveLink: "#",
      codeLink: "#"
    },
    {
      title: "YouTube RAG Bot",
      description: "A Retrieval-Augmented Generation chatbot that answers questions from YouTube video transcripts, using LangChain to orchestrate retrieval and LLM response generation over vector-embedded transcript chunks.",
      image: "/projects/youtuberag.jpg",
      tags: ["LangChain", "RAG", "Python", "Vector DB"],
      liveLink: "#",
      codeLink: "#"
    },
    {
      title: "ShopFlow: MERN E-Commerce",
      description: "A high-performance online storefront featuring a full checkout flow, JWT authentication, administrative inventory controls, and an integration with Razorpay (Test Mode) along with a virtual digital wallet payment system.",
      image: "/projects/shopflow.jpg",
      tags: ["React", "Node.js", "Express", "MongoDB", "Razorpay"],
      liveLink: "#",
      codeLink: "https://github.com/govardhareddy23/ECommerce-MERN-razorpay"
    },
    {
      title: "PayFlow: UPI Payment Simulator",
      description: "A production-ready UPI-style payment simulator with multi-factor email OTP authentication, real-time recipient lookup, and atomic PostgreSQL transactions using row-level locks to prevent race conditions.",
      image: "/projects/payflow.jpg",
      tags: ["React", "Node.js", "Express", "PostgreSQL"],
      liveLink: "#",
      codeLink: "#"
    },
    {
      title: "StayEase: Stay Management Platform",
      description: "A dynamic booking management system featuring interactive room catalogs, real-time availability updates via Socket.io, date booking validators, and a user reservation dashboard.",
      image: "/projects/stayease.jpg",
      tags: ["React", "Express", "Node.js", "MongoDB", "Socket.io"],
      liveLink: "#",
      codeLink: "#"
    }
  ],
  experience: [
    {
      role: "Full-Stack AI Engineer (Independent Projects)",
      company: "Self-Directed AI Engineering",
      period: "2025 - Present",
      description: "Designed and built autonomous multi-agent AI systems using LangGraph and LangChain, including a 17-agent career automation platform with RAG-grounded content generation and human-in-the-loop safety controls. Developed and benchmarked ML models (ANN, XGBoost) for real-time fraud detection with SHAP explainability."
    },
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
