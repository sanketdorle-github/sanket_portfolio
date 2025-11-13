export interface Project {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  features: string[];
  technologies: string[];
  challenges: {
    challenge: string;
    solution: string;
  }[];
  images: {
    featured: string;
    gallery: string[];
  };
  links: {
    demo?: string;
    github?: string;
  };
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Decyde.shop",
    slug: "decyde-shop",
    tagline: "Product-based discount coupon distribution platform",
    description:
      "Decyde.shop is a full-stack discount coupon distribution platform where store owners can register their shops, list products, and create promotional coupons. Customers can browse products, claim discounts, and make secure purchases. The system manages both customer and owner modules, handling everything from shop registration to coupon creation, integrated with payment gateways and centralized state management using React Redux.",
    features: [
      "Customer, Owner, and Admin modules with role-based access control",

      "Owner dashboard for shop and product management",
      "Customer dashboard with coupon listings, active/expired tracking, and account settings",
      "Integrated chat feature allowing customers to reach out directly to vendors",
      "Product-based coupon creation with multiple types — Buy One Get One, Fixed Amount, Percentage Discount, and Bulk Discount",
      "Coupon creation and distribution linked to specific products",
      "Vendor dashboard displaying coupon analytics, shop performance, and product insights",
      "Ability to archive and restore coupons and products separately with republish options",
      "Vendor manager system allowing shop owners to assign managers for product and coupon management",
      "Broadcast request feature enabling communication between vendors and customers for promotional offers",
      "Integrated payment gateway for secure transactions",
      "Redux-based global state management for smoother user experience",
      "Admin dashboard for managing users, shops, and product listings",
      "Dynamic coupon validation and redemption system",
    ],
    technologies: [
      "React",
      "Redux",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "Payment Gateway API (Razorpay)",
    ],
    challenges: [
      {
        challenge: "Designing a scalable data model for multi-role access",
        solution:
          "Created MongoDB schemas for customers, shop owners, products, and coupons with reference-based relationships, ensuring efficient data retrieval and access control.",
      },
      {
        challenge: "Implementing secure payment and coupon redemption logic",
        solution:
          "Integrated payment gateway APIs for seamless transactions and built server-side logic to validate and redeem coupons safely using Express and JWT.",
      },
      {
        challenge: "Managing state across multiple user flows",
        solution:
          "Used Redux for predictable and centralized state management, simplifying synchronization between owner and customer dashboards, authentication, and product data.",
      },
    ],
    images: {
      featured: "/data/decyde_1.png",
      gallery: [
        "/data/decyde_1.png",
        "/data/decyde_2.png",
        "/data/decyde_3.png",
        "/data/decyde_4.png",
        "/data/decyde_5.png",
        "/data/decyde_6.png",
        "/data/decyde_7.png",
        "/data/decyde_8.png",
        "/data/decyde_9.png",
        "/data/decyde_10.png",
        "/data/decyde_11.png",
        "/data/decyde_12.png",
        "/data/decyde_13.png",
        "/data/decyde_14.png",
        "/data/decyde_15.png",
        "/data/decyde_16.png",
        "/data/decyde_17.png",
        "/data/decyde_18.png",
        "/data/decyde_19.png",
      ],
    },
    links: {
      demo: "https://decyde.shop/",
    },
  },
  {
    id: "2",
    title: "Tenderwin",
    slug: "tenderwin-react",
    tagline: "Tenderwin - Streamline Tender Bidding and Management",
    description:
      "A powerful platform designed to simplify tender bidding, streamline document management, and enhance collaboration for businesses seeking contracts.",
    features: [
      "Automated tender search and notifications",
      "Document management and submission tracking",
      "Bid analytics and competitor insights",
      "Collaboration tools for team-based tendering",
      "Compliance and eligibility verification",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
      "Redux-Toolkit",
    ],
    challenges: [
      {
        challenge:
          "Optimizing slow database queries for large-scale tender data",
        solution:
          "Implemented indexing, query optimization to reduce query execution time and improve 20% performance.",
      },
      {
        challenge:
          "Implementing efficient paginated APIs for handling large datasets",
        solution:
          "Designed RESTful APIs with pagination and filtering mechanisms to fetch relevant data efficiently without overloading the server.",
      },
      {
        challenge:
          "Utilizing modern UI libraries while ensuring responsiveness",
        solution:
          "Used Tailwind CSS and component-based UI libraries like shadcn/ui to create a consistent, responsive, and accessible user interface.",
      },
    ],
    images: {
      featured:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1332&q=80",

      gallery: [
        "/data/t_one.png",
        "/data/t_two.png",
        "/data/t_three.png",
        "/data/t_four.png",
      ],
    },
    links: {
      demo: "https://www.tenderwin.ai/",
    },
  },
  {
    id: "3",
    title: "Crack Visa",
    slug: "crack-visa",
    tagline: "AI-powered visa interview practice & evaluation platform",
    description:
      "Crack Visa is an interactive visa preparation platform that helps applicants practice for visa interviews through realistic mock interviews, speech-to-text transcription, and AI-driven evaluation. The system generates personalized questions, transcribes spoken answers, and provides actionable feedback and scoring to help users improve fluency, confidence, and correctness.",
    features: [
      "Mock interview sessions that mirror real visa interviews",
      "Speech-to-text transcription for spoken answer capture",
      "AI-generated and adaptive interview questions",
      "Automated evaluation and scoring with constructive feedback",
      "Playback with timestamps and highlightable transcript for review",
      "Progress tracking and personalized improvement suggestions",
    ],
    technologies: [
      "React",
      "Node.js / Express ",
      "MongoDB",
      "WebRTC / Media APIs (live audio recording)",
      "Speech-to-Text (Web Speech API / Whisper-style models)",
      "AI / NLP (OpenAI models or custom NLP pipelines for question generation and evaluation)",
      "Tailwind CSS",
    ],
    challenges: [
      {
        challenge:
          "Integrating speech-to-text functionality in a MERN environment",
        solution:
          "Used browser-based speech recognition APIs and Node.js endpoints to handle and store transcribed data securely. Implemented efficient communication between frontend and backend for real-time transcription updates.",
      },
      {
        challenge:
          "Managing dynamic question generation and response evaluation",
        solution:
          "Built modular backend services in Express.js that handle question retrieval, AI evaluation APIs, and scoring logic. Designed MongoDB schemas to track user sessions and performance history.",
      },
      {
        challenge:
          "Ensuring seamless user experience with asynchronous operations",
        solution:
          "Optimized API calls and component updates using React hooks and async/await patterns. Improved load times and responsiveness through lazy loading and efficient state updates.",
      },
    ],
    images: {
      featured: "/data/crackvisa_1.png",
      gallery: [
        "/data/crackvisa_1.png",
        // "/data/crackvisa_2.png",
        // "/data/crackvisa_3.png",
      ],
    },
    links: {
      demo: "https://www.crackvisa.com/",
    },
  },
  {
    id: "4",
    title: "Chat-App",
    slug: "chat-app",
    tagline: "A chatting application based on MERN stack",
    description:
      "A real-time chat application with instant messaging, group chats, and media sharing, built using the MERN stack with WebSocket integration for seamless communication.",
    features: [
      "Real-time messaging",
      "Group chat functionality",
      "Media and file sharing",
      "User authentication and profile management",
      "Online/offline status indicators",
    ],
    technologies: [
      "React",

      "Node.js",
      "Express",
      "MongoDB",
      "Socket.io",
      "Tailwind CSS",
      "Zustand",
    ],
    challenges: [
      {
        challenge: "Ensuring real-time message delivery with minimal latency",
        solution:
          "Implemented WebSocket communication using Socket.io for fast and efficient message transmission",
      },
      {
        challenge: "Managing user presence (online/offline status)",
        solution:
          "Integrated a presence system using Redis to track and update user activity in real-time",
      },
      {
        challenge: "Secure authentication and authorization",
        solution:
          "Implemented JWT-based authentication with encrypted user data storage",
      },
    ],
    images: {
      featured:
        "https://img.freepik.com/free-vector/man-woman-chatting-online-people-using-mobile-phones-speech-bubble-distance-flat-vector-illustration-communication-internet_74855-8440.jpg?t=st=1743062754~exp=1743066354~hmac=6c9f74c8cf560a4a487d4e05595bb6901d4f47c080bb29bf460a64595038f1c4&w=1380",
      gallery: ["/data/c_one.png", "/data/c_two.png", "/data/c_three.png"],
    },
    links: {
      demo: "https://chat-application-production-7pzx.onrender.com/",
      github: "https://github.com/sanketdorle-github/Chat-App",
    },
  },
];
