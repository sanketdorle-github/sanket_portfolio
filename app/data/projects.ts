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
];
