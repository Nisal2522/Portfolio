// ============================================================
//  EDIT YOUR DETAILS HERE
//  This is the only file you need to change. Everything on the
//  site (and the browser tab, favicon and link previews) is built
//  from it. Leave a value as "" or [] to hide that item/section.
// ============================================================

export const profile = {
  name: "Nisal Amarasekara",
  role: "Associate Software Engineer",
  // The hero types these one after another (the first one is also the page title)
  roles: ["Associate Software Engineer", "Angular Developer", "UI / UX Enthusiast", "Final-Year SE Undergraduate"],
  company: "Control Union Inspections", // shown under your photo, with your role
  location: "Gampaha, Sri Lanka",
  // One or two sentences. Say what you do and what you're looking for.
  intro:
    "Associate Software Engineer at Control Union and final-year Software Engineering undergraduate at SLIIT. I build responsive, user-focused web applications with Angular, Spring Boot and PostgreSQL, with a strong eye for clean UI and great user experience.",
  available: true,
  availability: "Open to new opportunities",
  email: "nisalamarasekara@gmail.com",
  phone: "+94 71 983 9270", // leave "" to hide
  github: "https://github.com/Nisal2522",
  linkedin: "https://www.linkedin.com/in/nisal-amarasekara-632323341",
  // Put files in the "public" folder, then reference them with a leading "/"
  photo: "/profile.jpg", // e.g. "/profile.jpg" (square, at least 400x400). Initials are shown if empty.
  cv: "", // e.g. "/cv.pdf". The "Download CV" buttons appear once this is set.
  siteUrl: "https://nisal-amarasekara.vercel.app", // your live URL, used for link previews
};

// Highlight numbers shown under the hero
export const stats = [
  { value: "3+", label: "Years at Control Union" },
  { value: "Year 4", label: "Software Engineering at SLIIT" },
  { value: "20+", label: "Technologies & tools" },
];

export const about = {
  paragraphs: [
    "I'm an Associate Software Engineer at Control Union Inspections and a final-year Software Engineering undergraduate at SLIIT. I joined Control Union in April 2023 as a Contracting & Planning Specialist, moved into the software team as an intern in June 2025, and became an Associate Software Engineer when my internship ended. Working in industry while finishing my degree has taught me to balance priorities, deliver on deadlines and write code that holds up in production.",
    "My day-to-day focus is frontend development in Angular: building and refining interfaces, improving UI/UX, and tracking down and fixing bugs, working closely with Spring Boot and PostgreSQL on the backend. I care about interfaces that feel simple to use and code that is easy for the next person to read and maintain.",
    "Through my work, university coursework and personal projects I've built experience across the stack, from REST APIs and database design to responsive interfaces. I work well in teams, communicate clearly, and pick up new tools quickly.",
  ],
  facts: [
    { label: "Current role", value: "Associate Software Engineer, Control Union Inspections (Pvt) Ltd" },
    { label: "Degree", value: "BSc (Hons) in Software Engineering" },
    { label: "University", value: "Sri Lanka Institute of Information Technology (SLIIT)" },
    { label: "Status", value: "Year 4, Semester 2 · Graduating 2027" },
    { label: "Languages", value: "English, Sinhala" },
  ],
};

export const skills = [
  {
    category: "Frontend",
    items: ["Angular", "TypeScript", "JavaScript", "HTML5", "CSS3", "React", "Tailwind CSS"],
  },
  {
    category: "Backend & Data",
    items: ["Spring Boot", "Java", "PostgreSQL", "REST APIs", "SQL", "Node.js", "NestJS", "Express", "MongoDB", "MySQL", "Firebase", "Socket.IO"],
  },
  {
    category: "Design & UX",
    items: ["UI / UX design", "Figma", "Responsive design"],
  },
  {
    category: "Tools & Practices",
    items: ["Git", "GitHub", "Docker", "Postman", "Debugging", "Agile / Scrum"],
  },
];

// Internships, part-time jobs, freelance work, university society roles, etc.
// To hide this column, delete every entry so the list is empty.
export const experience = [
  {
    role: "Associate Software Engineer",
    org: "Control Union Inspections (Pvt) Ltd",
    period: "Nov 2025 – Present",
    points: [
      "Develop and maintain frontend features in Angular and TypeScript, integrated with Spring Boot REST APIs and PostgreSQL.",
      "Investigate, debug and resolve production issues, improving the stability and reliability of the application.",
      "Improve UI/UX across the product, turning requirements into clean, consistent and responsive interfaces.",
    ],
  },
  {
    role: "Software Engineering Intern",
    org: "Control Union Inspections (Pvt) Ltd",
    period: "Jun 2025 – Nov 2025",
    points: [
      "Moved internally from Contracting & Planning into the software development team, working on Angular frontend features and bug fixes.",
      "Gained hands-on experience with Spring Boot, PostgreSQL and team workflows such as code reviews and version control.",
      "Offered a full-time Associate Software Engineer role on completion of the internship.",
    ],
  },
  {
    role: "Contracting & Planning Specialist",
    org: "Control Union Inspections (Pvt) Ltd",
    period: "Apr 2023 – Jun 2025",
    points: [
      // Add 2–3 bullet points about this role (e.g. what you planned, coordinated or managed)
    ],
  },
];

export const education = [
  {
    degree: "BSc (Hons) in Software Engineering",
    org: "Sri Lanka Institute of Information Technology (SLIIT)",
    period: "2023 – 2027 (expected)",
    points: [
      "Specialisation: Software Engineering",
      "Currently in Year 4, Semester 2",
      "CGPA: 3.00 / 4.00",
    ],
  },
  {
    degree: "G.C.E. Advanced Level, Biosystems Technology stream",
    org: "Bandaranayake College, Gampaha",
    period: "2021",
    points: [],
  },
];

// 3–4 of your strongest projects. Lead with impact, not just a feature list.
// featured: true shows the project as a large card with its screenshot.
// image: put a screenshot in public/projects/ (about 1200x750).
export const projects = [
  {
    title: "Action Realm",
    type: "Client project · E-commerce",
    featured: true,
    image: "/projects/action-realm.jpg",
    summary:
      "A complete e-commerce platform for Action Realm, a Sri Lankan online store for premium action figures, statues and pop-culture collectibles. Designed, built and delivered for a real client, and live in production.",
    highlights: [
      "Full shopping experience: catalogue by brand, category and franchise, search, cart, wishlist, checkout and order tracking.",
      "Pre-order system with 30% deposits, plus Cash on Delivery, bank transfer and PayHere online payments.",
      "Customer accounts with a \"Realm Coins\" loyalty programme, coupon codes and a newsletter sign-up offer.",
      "Admin panel to manage products, orders and coupons, with product images uploaded to Cloudinary.",
      "Mobile-first responsive design with light/dark mode, SEO meta tags and WhatsApp support.",
    ],
    tech: ["React", "Vite", "Firebase", "PayHere", "Cloudinary", "Cloudflare Pages"],
    live: "https://actionrealmsl.com",
    code: "",
  },
  {
    title: "CycleLink",
    type: "University group project · Full stack",
    image: "/projects/cyclelink.jpg",
    summary:
      "A full-stack cycling rewards and community platform. Riders track rides and earn eco-tokens, redeem them at partner shops, discover safe routes, report road hazards, chat in real time and get help from an AI cycling assistant.",
    role: "Team of 4. I managed the repository and pull requests, and built the real-time chat, AI assistant, admin module and cyclist dashboard.",
    highlights: [
      "Built one-to-one and group chat with Socket.IO and JWT-authenticated sockets.",
      "Integrated a Google Gemini AI cycling assistant with streaming responses.",
      "Developed admin user and payout management, with PayHere payouts to partner shops.",
      "Wrote unit and integration tests (Jest, Supertest) and set up GitHub Actions CI.",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "Socket.IO", "Gemini", "PayHere", "Tailwind CSS"],
    live: "https://cycle-link-eta.vercel.app",
    code: "https://github.com/Nisal2522/CycleLink",
  },
  {
    title: "MediSmart AI",
    type: "University group project · Microservices",
    image: "/projects/medicare.jpg",
    summary:
      "A smart healthcare platform built as NestJS microservices. Patients find doctors, book and pay for appointments, join video consultations and check symptoms with AI, while doctors issue prescriptions and admins manage the platform.",
    role: "Team of 4. I built the doctor service, AI symptom analysis, real-time notifications, SMS alerts and the admin panel.",
    highlights: [
      "Built an AI symptom checker on the Groq LLM API with structured responses.",
      "Added real-time notifications with Socket.IO, SMS alerts and access control for patient reports.",
      "Created admin endpoints and UI to manage users, appointments and payments.",
      "8 services communicating over REST and RabbitMQ, with Stripe payments, Agora video calls, Docker and Kubernetes.",
    ],
    tech: ["React", "NestJS", "MongoDB", "RabbitMQ", "Socket.IO", "Stripe", "Docker", "Kubernetes"],
    live: "https://medicare-inky.vercel.app",
    code: "https://github.com/Nisal2522/Medicare",
  },
];

// Leave as [] to hide this section.
export const certifications = [
  // Example: { name: "Certificate name", issuer: "Coursera", year: "2025", link: "" },
];
