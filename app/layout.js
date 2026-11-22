import { Inter } from "next/font/google";
import "./globals.css";
import { profile } from "../data/portfolio";

const inter = Inter({ subsets: ["latin"], display: "swap" });

const title = `${profile.name} | ${profile.role}`;

export const metadata = {
  metadataBase: new URL(profile.siteUrl),
  title,
  description: profile.intro,
  authors: [{ name: profile.name }],
  openGraph: {
    title,
    description: profile.intro,
    type: "profile",
    url: "/",
  },
  twitter: { card: "summary", title, description: profile.intro },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1120" },
  ],
};

// Runs before the page paints: applies the saved (or system) theme with no flash.
const themeScript = `(function(){var d=document.documentElement;try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}d.dataset.theme=t}catch(e){d.dataset.theme="light"}d.classList.add("js")})();`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
