import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";

// Google Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Dynamic base path (works for localhost and GitHub Pages)
const basePath =
  process.env.NODE_ENV === "production" ? "/dev-portfolio" : "";

// SEO Metadata (used by Next.js App Router)
export const metadata = {
  title: "Rushikesh Mithagare | Full Stack Developer",
  description:
    "Backend-focused Full Stack Developer skilled in Java, Spring Boot, Python, and modern cloud-native architectures.",
  keywords: [
    "Rushikesh Mithagare",
    "Java Developer",
    "Spring Boot",
    "Full Stack Developer",
    "Backend Developer",
    "Software Engineer Portfolio",
    "Cloud Developer",
  ],
  authors: [
    {
      name: "Rushikesh Mithagare",
      url: "https://vaibhavxom.github.io/dev-portfolio",
    },
  ],
  creator: "Rushikesh Mithagare",
  metadataBase: new URL("https://vaibhavxom.github.io/dev-portfolio"),
  openGraph: {
    title: "Rushikesh Mithagare | Full Stack Portfolio",
    description:
      "Explore the projects and skills of Rushikesh Mithagare, a backend-focused software engineer.",
    url: "https://vaibhavxom.github.io/dev-portfolio",
    siteName: "Rushikesh Mithagare Portfolio",
    images: [
      {
        url: `${basePath}/og-image.png`, // Updated for subpath
        width: 1200,
        height: 630,
        alt: "Rushikesh Mithagare Portfolio Screenshot",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rushikesh Mithagare | Full Stack Developer",
    description:
      "Java | Spring Boot | Python | Cloud | DevOps | Problem Solver. Explore my work and connect.",
    images: [`${basePath}/og-image.png`],
  },
  icons: {
    icon: `${basePath}/favicon.ico`,
    shortcut: `${basePath}/favicon.ico`,
    apple: `${basePath}/apple-touch-icon.png`,
  },
};

// Root Layout
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Icons */}
        <link rel="icon" href={`${basePath}/favicon.ico`} sizes="any" />
        <link
          rel="apple-touch-icon"
          href={`${basePath}/apple-touch-icon.png`}
        />

        {/* SEO Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Rushikesh Mithagare" />
        <link
          rel="canonical"
          href={`https://vaibhavxom.github.io${basePath}`}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
