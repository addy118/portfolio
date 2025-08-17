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
    svg: string; // path to svg, e.g., "/diagrams/fairshare-core-expense.svg"
  }[]; // Array to hold multiple core feature diagrams
  challenges: string[];
  futureScope: string[];
}

export type Projects = Project[];

export const projects = [
  {
    id: "fairshare",
    title: "Fairshare",
    tagline:
      "A smart expense splitter for groups having multiple payers with optimized debt settlement and reminders",
    liveDemoUrl: "https://fairshare.adityakirti.tech",
    githubUrl: "https://github.com/addy118/fairshare",
    problemStatement:
      "Managing shared expenses among friends or groups often becomes chaotic, especially when a single expense is paid by multiple people unequally and many such expenses are involved",
    solution: {
      description:
        "Fairshare simplifies group expenses and debt tracking using smart algorithm and group-based event flows",
      features: [
        "Split multi-payer expenses equally among friends or groups",
        "Cash flow algorithm which reduces the total transactions upto 60%",
        "Two-way confirmation mechanism for debt settlement",
        "Transparency of expense history and settlement history for all members in the group",
        "PDF export of expense history for sharing",
        "In-app UPI payment support for debt settlement",
      ],
    },
    techStack: [
      {
        category: "Frontend",
        technologies: [
          "React.js",
          "Modern Redux Toolkit",
          "Tailwind CSS",
          "ShadCN UI",
          "JavaScript",
        ],
      },
      {
        category: "Backend",
        technologies: ["Node.js", "Express.js", "TypeScript"],
      },
      { category: "Database", technologies: ["PostgreSQL", "Prisma"] },
      { category: "Other", technologies: ["Clerk", "Vercel"] },
    ],
    dbSchemaSvg: "/schemas/fairshare-erd.svg",
    highLevelArchSvg: "/seq-diagrams/fairshare/fs-high-arch.svg",
    coreFeatures: [
      {
        title: "Power of the Cash flow algorithm for splits calculation",
        svg: "/diagrams/optimization.svg",
      },
      {
        title: "How are splits of an expense calculated?",
        svg: "/diagrams/split-algo.svg",
      },
      {
        title: "Expense creation in a group",
        svg: "/seq-diagrams/fairshare/fs-expense.svg",
      },
      {
        title: "Two-way confirmation of debt settlement",
        svg: "/seq-diagrams/fairshare/fs-settlement.svg",
      },
      {
        title: "Integration of Clerk's user management in Fairshare",
        svg: "/seq-diagrams/fairshare/fs-clerk-flow.svg",
      },
      {
        title: "Standard JWT authentication used by Clerk",
        svg: "/seq-diagrams/fairshare/fs-std-auth.svg",
      },
    ],
    challenges: [
      "Calculating equal splits having unequal payments from multiple payers and optimizing debt settlement algorithm efficiently",
      "Introducing a direct payment option within the app for settling debts",
      "Collecting the data of expenses having dynamic payers using forms",
      "Managing the state throughout the app using Redux Toolkit & RTK Query",
      "Exporting the payment history in PDF",
    ],
    futureScope: [
      "Add real-time notifications for expense updates",
      "Enable adding users as friends",
      "Role-based access in groups",
      "Group chat for increasing communications between members",
    ],
  },
  {
    id: "livelet",
    title: "Livelet",
    tagline:
      "Collaborative code editor & executor with real-time presence and access control",
    liveDemoUrl: "https://livelet.adityakirti.tech",
    githubUrl: "https://github.com/addy118/livelet",
    problemStatement:
      "Online collaboration for code editing lacks a web-based lightweight, real-time, access-level controlled platform for developers working in teams or mentorship",
    solution: {
      description:
        "Livelet offers a real-time collaborative editor with code execution and access management",
      features: [
        "Real-time collaborative editing using Liveblocks and CodeMirror",
        "Code execution using Judge0 supporting 5 major programming languages",
        "Robust authentication system with social sign-ons and email OTP generation for sensitive actions",
        "Room-based collaboratioin and access level control for each user in the room",
        "Capable of 10+ concurrent users per room",
      ],
    },
    techStack: [
      {
        category: "Frontend",
        technologies: [
          "Next.js",
          "CodeMirror",
          "ShadCN UI",
          "Tailwind CSS",
          "TypeScript",
        ],
      },
      { category: "Backend", technologies: ["Next.js", "TypeScript"] },
      { category: "Database", technologies: ["PostgreSQL", "Prisma"] },
      { category: "Realtime", technologies: ["Liveblocks", "Yjs"] },
      { category: "Other", technologies: ["Auth.js", "Resend", "Vercel"] },
    ],
    dbSchemaSvg: "/schemas/livelet-erd.svg",
    highLevelArchSvg: "/seq-diagrams/livelet/llt-high-arch.svg",
    coreFeatures: [
      {
        title: "How the editor works in real-time?",
        svg: "/seq-diagrams/livelet/llt-editor.svg",
      },
      {
        title: "User authentication using Auth.js",
        svg: "/seq-diagrams/livelet/llt-auth.svg",
      },
      {
        title: "Collaborative room creation for coding",
        svg: "/seq-diagrams/livelet/llt-room.svg",
      },
      {
        title: "Room access authorization using Liveblocks API",
        svg: "/seq-diagrams/livelet/llt-room-auth.svg",
      },
    ],
    challenges: [
      "Syncing the the code document in real-time with live cursors",
      "Handling dynamic roles per room according to liveblocks authentication",
      "Maintaining clean and dark UI code editor",
    ],
    futureScope: [
      "Add support for voice collaboration",
      "Integerate chat section within the room members",
      "Enable AI-powered code suggestions",
      "Add a feature for hosting coding competitions",
    ],
  },
  {
    id: "cloudvault",
    title: "Cloudvault",
    tagline:
      "Minimal, secure cloud storage with a focus on privacy and accessibility.",
    liveDemoUrl: "https://cloudvault.adityakirti.tech",
    githubUrl: "https://github.com/addy118/cloudvault",
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
    dbSchemaSvg: "/diagrams/cloudvault-db.svg",
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
      "Ensuring secure access without persistent login on shared devices",
      "Structuring file storage per user with nested folders",
      "Building responsive breadcrumb navigation with correct file path syncing",
    ],
    futureScope: [
      "Add preview for common file types (PDF, images, docs)",
      "Migrate storage to AWS S3 or Cloudinary",
      "Enable multi-user sharing and link-based access",
      "Two-factor auth support for better security",
    ],
  },
];
