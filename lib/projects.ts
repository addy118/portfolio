// lib/data.ts

export interface Project {
  id: string; // e.g., "fairshare"
  title: string;
  tagline: string;
  liveDemoUrl: string;
  githubUrl: string;
  problemStatement: string;
  solution: {
    description: string;
    features: string[];
  };
  techStack: {
    category: string;
    technologies: string[];
  }[];
  dbSchemaSvg: string; // path to svg, e.g., "/diagrams/fairshare-db.svg"
  highLevelArchSvg: string; // path to svg, e.g., "/diagrams/fairshare-hla.svg"
  coreFeatures: {
    title: string;
    description: string;
    svg: string; // path to svg, e.g., "/diagrams/fairshare-core-expense.svg"
  }[]; // Array to hold multiple core feature diagrams
  challenges: {
    challenge: string;
    solution: string;
  }[];
  futureScope: string[];
}

export type Projects = Project[];

export const projects = [
  {
    id: "fairshare",
    title: "Fairshare",
    tagline:
      "A smart expense splitter for groups with optimized debt settlement.",
    liveDemoUrl: "https://fairshare.adityakirti.tech", // update if needed
    githubUrl: "https://github.com/addy118/fairshare",
    problemStatement:
      "Managing shared expenses among friends or groups often becomes chaotic, especially when multiple currencies, unequal splits, and recurring payments are involved.",
    solution: {
      description:
        "FairShare simplifies group expenses and debt tracking using smart algorithms and group-based event flows.",
      features: [
        "Split expenses equally or unequally among friends or groups",
        "Support for multi-currency expense tracking",
        "Add friends without sharing personal details",
        "Recurring expense support with reminders",
        "Min-cost flow based debt optimization",
        "PDF export of expense summaries",
        "Payment app integrations (e.g., UPI, PayTM)",
        "Group invite and approval system",
      ],
    },
    techStack: [
      {
        category: "Frontend",
        technologies: ["React", "Tailwind CSS", "TypeScript"],
      },
      { category: "Backend", technologies: ["Node.js", "Express", "Prisma"] },
      { category: "Database", technologies: ["PostgreSQL"] },
      {
        category: "Auth",
        technologies: ["JWT", "OAuth", "Clerk"],
      },
      { category: "Deployment", technologies: ["Vercel"] },
    ],
    dbSchemaSvg: "/diagrams/fairshare-db.svg",
    highLevelArchSvg: "/diagrams/fairshare-hla.svg",
    coreFeatures: [
      {
        title: "Expense Group and Friend Architecture",
        description:
          "Manages user relationships and group-based permissions for controlled expense sharing.",
        svg: "/diagrams/fairshare-core-group.svg",
      },
      {
        title: "Expense Splitting and Payer Mapping",
        description:
          "Handles multiple payers and varying splits per expense, even across currencies.",
        svg: "/diagrams/fairshare-core-expense.svg",
      },
      {
        title: "Debt Optimization via Min-Cost Flow",
        description:
          "Reduces number of transactions required to settle debts using graph optimization.",
        svg: "/diagrams/fairshare-core-debt-opt.svg",
      },
    ],
    challenges: [
      {
        challenge:
          "Handling unequal splits with multiple payers and dynamic group members.",
        solution:
          "Used a normalized `Split` and `Payer` schema model with validations at API level to enforce rules.",
      },
      {
        challenge: "Optimizing debt settlement algorithm efficiently.",
        solution:
          "Implemented a variation of the Min-Cost Flow algorithm using a graph-based approach on top of the Split graph.",
      },
      {
        challenge:
          "Securing user tokens without exposing them in local storage.",
        solution:
          "Planned and partially implemented JWT with HTTP-only cookies and Axios interceptors.",
      },
    ],
    futureScope: [
      "Add real-time notifications for expense updates",
      "Switch to Clerk for secure and scalable auth",
      "Enable settlement via UPI/PayPal APIs",
      "Add analytics dashboard for individual and group spending habits",
    ],
  },
  {
    id: "livelet",
    title: "Livelet",
    tagline:
      "Collaborative code editing & running with real-time presence, access control, and productivity tracking.",
    liveDemoUrl: "https://livelet.adityakirti.tech",
    githubUrl: "https://github.com/addy118/livelet",
    problemStatement:
      "Online collaboration for code editing lacks real-time sync, access-level control, and session-based productivity insights for developers working in teams or mentorship.",
    solution: {
      description:
        "Livelet offers a powerful real-time collaborative editor with access management and deep session analytics.",
      features: [
        "Real-time collaborative editing using Liveblocks and CodeMirror",
        "Access level control per user: editor/viewer",
        "Room-based sharing with Clerk-authenticated users",
        "Session and interval tracking for user productivity",
        "Activity timeline for each room",
        "PostgreSQL-backed logging for analysis",
      ],
    },
    techStack: [
      {
        category: "Frontend",
        technologies: [
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "ShadCN UI",
          "CodeMirror",
        ],
      },
      { category: "Backend", technologies: ["Next.js API Routes", "Prisma"] },
      { category: "Database", technologies: ["PostgreSQL"] },
      { category: "Auth", technologies: ["Clerk", "Google OAuth"] },
      { category: "Realtime", technologies: ["Liveblocks"] },
      { category: "Deployment", technologies: ["Vercel"] },
    ],
    dbSchemaSvg: "/diagrams/livelet-db.svg",
    highLevelArchSvg: "/diagrams/livelet-hla.svg",
    coreFeatures: [
      {
        title: "Room and Access Role Management",
        description:
          "Supports room creation and role-based permissions using Clerk session data.",
        svg: "/diagrams/livelet-core-rooms.svg",
      },
      {
        title: "Live Collaborative Editing Engine",
        description:
          "Leverages Liveblocks for real-time editing with presence indicators and conflict resolution.",
        svg: "/diagrams/livelet-core-realtime.svg",
      },
      {
        title: "Session and Activity Tracking",
        description:
          "Tracks user activity per session and aggregates it into productivity logs.",
        svg: "/diagrams/livelet-core-analytics.svg",
      },
    ],
    challenges: [
      {
        challenge:
          "Persisting user sessions and tracking interval activity in a real-time app.",
        solution:
          "Used Prisma models for Sessions and Intervals, and triggered writes during live events using Liveblocks presence callbacks.",
      },
      {
        challenge:
          "Handling dynamic roles per room with Clerk-auth integration.",
        solution:
          "Extended Clerk session to support custom role metadata, and enforced logic in backend API routes.",
      },
      {
        challenge:
          "Maintaining clean UI for presence indicators and code editing.",
        solution:
          "Used CodeMirror with Tailwind-based overlays and integrated user cursors via Liveblocks hooks.",
      },
    ],
    futureScope: [
      "Add support for voice and video collaboration",
      "Room chat integration",
      "AI-powered code suggestions",
      "Export session analytics as CSV/PDF for team leads",
    ],
  },
  {
    id: "cloudvault",
    title: "CloudVault",
    tagline:
      "Minimal, secure cloud storage with a focus on privacy and accessibility.",
    liveDemoUrl: "", // add when deployed
    githubUrl: "https://github.com/addy118/cloudvault", // update if different
    problemStatement:
      "Most cloud storage platforms require tying your account to personal identity (like Google), which raises privacy concerns. There's also a risk of forgetting to log out on shared systems.",
    solution: {
      description:
        "CloudVault offers simple, secure file storage with basic email/password JWT authentication. It mimics Google Drive’s navigation and layout while preserving user privacy.",
      features: [
        "JWT-based authentication using only email and password",
        "File upload, delete, rename, and folder creation",
        "Breadcrumb-based navigation (like Google Drive)",
        "Fully responsive layout with drag-and-drop UI",
        "No external identity provider or tracking",
        "Folder hierarchy with user-isolated storage",
      ],
    },
    techStack: [
      { category: "Frontend", technologies: ["React", "Tailwind CSS"] },
      { category: "Backend", technologies: ["Node.js", "Express"] },
      { category: "Auth", technologies: ["JWT", "bcrypt"] },
      {
        category: "Storage",
        technologies: ["Local filesystem (dev)", "Cloud storage planned"],
      },
      {
        category: "Deployment",
        technologies: ["Railway", "Vercel (frontend)"],
      },
    ],
    dbSchemaSvg: "/diagrams/cloudvault-db.svg", // optional if using DB
    highLevelArchSvg: "/diagrams/cloudvault-hla.svg",
    coreFeatures: [
      {
        title: "User Authentication Flow",
        description:
          "Uses JWT tokens issued at login and stored in memory or HTTP-only cookies to protect private file access.",
        svg: "/diagrams/cloudvault-core-auth.svg",
      },
      {
        title: "File Storage and Access Logic",
        description:
          "Isolated folders per user; each file operation is permission-gated using the JWT payload user ID.",
        svg: "/diagrams/cloudvault-core-files.svg",
      },
      {
        title: "Breadcrumb Navigation UI",
        description:
          "Shows folder path as a breadcrumb, dynamically updates on folder change, and supports nested navigation.",
        svg: "/diagrams/cloudvault-core-ui.svg",
      },
    ],
    challenges: [
      {
        challenge:
          "Ensuring secure access without persistent login on shared devices.",
        solution:
          "Used short-lived JWT tokens and avoided saving credentials or tokens in local storage.",
      },
      {
        challenge: "Structuring file storage per user with nested folders.",
        solution:
          "Used a virtual folder system mapped to real directories using user ID as prefix/root path.",
      },
      {
        challenge:
          "Building responsive breadcrumb navigation with correct file path syncing.",
        solution:
          "Used React state to maintain folder tree and URL structure for deep linking.",
      },
    ],
    futureScope: [
      "Add preview for common file types (PDF, images, docs)",
      "Migrate storage to AWS S3 or Cloudinary",
      "Enable multi-user sharing and link-based access",
      "Two-factor auth support for better security",
    ],
  },
];
