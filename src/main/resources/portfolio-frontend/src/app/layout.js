import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Google Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// SEO + Social Metadata
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
        url: "/og-image.png", // Recommended: 1200x630 preview image in /public
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
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

// Root layout
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Rushikesh Mithagare" />
        <link
          rel="canonical"
          href="https://vaibhavxom.github.io/dev-portfolio"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
