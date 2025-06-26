"use client";
import { useEffect, useState } from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  const [visits, setVisits] = useState(null);

  useEffect(() => {
    const BIN_ID = process.env.NEXT_PUBLIC_JSONBIN_BIN_ID; // ✅ Your JSONBin Bin ID
    const API_KEY = process.env.NEXT_PUBLIC_JSONBIN_API_KEY;    // 🔐 Paste your secret key here for testing

    const headers = {
      "Content-Type": "application/json",
      "X-Master-Key": API_KEY,
    };

    const binUrl = `https://api.jsonbin.io/v3/b/${BIN_ID}`;

    async function updateVisitorCount() {
      try {
        const res = await fetch(binUrl, { headers });
        const data = await res.json();
        const currentVisits = data.record.visits;

        await fetch(binUrl, {
          method: "PUT",
          headers,
          body: JSON.stringify({ visits: currentVisits + 1 }),
        });

        setVisits(currentVisits + 1);
      } catch (err) {
        console.error("Visitor counter error:", err);
      }
    }

    updateVisitorCount();
  }, []);

  return (
    <footer className="bg-gray-900 text-white text-center py-6 px-4 sm:px-8 md:px-16 select-none">
      <hr className="border-t border-gray-700 mb-4 opacity-40" />
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 text-sm">
        <span>© {year} Rushikesh Mithagare.</span>
        <span className="opacity-70">All rights reserved.</span>
        <a
          href="https://vaibhavxom.github.io/dev-portfolio"
          className="hover:underline hover:text-gray-400 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          Portfolio
        </a>
      </div>
      <span className="opacity-50 text-xs mt-2 block">
        Built with Next.js & TailwindCSS · No cookies · No trackers
      </span>
      {visits !== null && (
        <span className="opacity-50 text-xs mt-1 block">
          Visitor Count: {visits}
        </span>
      )}
    </footer>
  );
}
