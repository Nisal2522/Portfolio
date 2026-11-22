import { DatabaseIcon, ApiIcon, CycleIcon, TestIcon, CodeIcon, LayoutIcon, DevicesIcon, BugIcon } from "./Icons";

// Skill name (lowercase) -> logo file in /public/logos.
// To add a logo: save the SVG in public/logos/ and add a line here.
// Free official logos: https://devicon.dev
const LOGOS = {
  angular: "angular",
  "spring boot": "spring",
  spring: "spring",
  postgresql: "postgresql",
  firebase: "firebase",
  vite: "vite",
  cloudinary: "cloudinary",
  "cloudflare pages": "cloudflarepages",
  cloudflare: "cloudflarepages",
  payhere: "payhere.png",
  nestjs: "nestjs",
  rabbitmq: "rabbitmq",
  docker: "docker",
  kubernetes: "kubernetes",
  "socket.io": "socketio",
  stripe: "stripe",
  gemini: "gemini",
  "google gemini": "gemini",
  javascript: "javascript",
  typescript: "typescript",
  java: "java",
  python: "python",
  react: "react",
  "next.js": "nextjs",
  html5: "html5",
  html: "html5",
  css3: "css3",
  css: "css3",
  "tailwind css": "tailwindcss",
  "node.js": "nodejs",
  express: "express",
  mongodb: "mongodb",
  mysql: "mysql",
  git: "git",
  github: "github",
  postman: "postman",
  figma: "figma",
};

// Black logos that get inverted in dark mode so they stay visible
const MONO = new Set(["nextjs", "express", "github", "socketio"]);

// Skills without an official logo get a matching line icon
const GENERIC = {
  sql: DatabaseIcon,
  "rest apis": ApiIcon,
  "agile / scrum": CycleIcon,
  "unit testing": TestIcon,
  "ui / ux design": LayoutIcon,
  "responsive design": DevicesIcon,
  debugging: BugIcon,
};

export default function SkillLogo({ name, size = 20 }) {
  const key = name.toLowerCase();
  const file = LOGOS[key];

  if (file) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={file.includes(".") ? `/logos/${file}` : `/logos/${file}.svg`}
        alt=""
        width={size}
        height={size}
        loading="lazy"
        className={`skill-logo${MONO.has(file) ? " mono" : ""}`}
      />
    );
  }

  const Icon = GENERIC[key] || CodeIcon;
  return <Icon width={size - 2} height={size - 2} className="skill-logo skill-logo-generic" />;
}
