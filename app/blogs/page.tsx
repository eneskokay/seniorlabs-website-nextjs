import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/app/lib/blogs";

export const metadata = {
  title: "Blog — Senior Labs",
  description:
    "Insights on AI-native mobile development, design, and engineering from the Senior Labs team.",
};

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/">
            <Image
              src="/logo-main.webp"
              alt="Senior Labs"
              width={480}
              height={120}
              className="h-10 w-auto"
            />
          </Link>
          <Link
            href="/"
            className="text-sm text-white hover:text-[#FC8E1A] transition-colors duration-200"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            ← Back
          </Link>
        </div>
      </nav>

      {/* Header */}
      <div className="pt-32 pb-16 px-6 max-w-7xl mx-auto">
        <p
          className="text-xs text-[#FC8E1A] tracking-[0.3em] uppercase mb-4"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          From the team
        </p>
        <h1
          className="text-5xl md:text-7xl font-bold text-white mb-6"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          Blog
        </h1>
        <p
          className="text-gray-400 text-lg max-w-xl"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Thoughts on AI, mobile, and building things that last.
        </p>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="border-t border-white/10" />
      </div>

      {/* Post list */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col divide-y divide-white/10">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blogs/${post.slug}`}
              className="group py-10 flex flex-col md:flex-row md:items-start md:justify-between gap-4 hover:bg-white/[0.02] -mx-4 px-4 rounded-lg transition-colors duration-200"
            >
              <div className="flex flex-col gap-3 max-w-2xl">
                <div className="flex items-center gap-3">
                  <span
                    className="text-xs text-[#FC8E1A] tracking-widest uppercase"
                    style={{ fontFamily: "'Orbitron', sans-serif" }}
                  >
                    {post.category}
                  </span>
                  <span className="text-white/20 text-xs">·</span>
                  <span
                    className="text-xs text-gray-500"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {post.readTime}
                  </span>
                </div>
                <h2
                  className="text-xl md:text-2xl font-bold text-white group-hover:text-[#FC8E1A] transition-colors duration-200"
                  style={{ fontFamily: "'Orbitron', sans-serif" }}
                >
                  {post.title}
                </h2>
                <p
                  className="text-gray-400 text-sm leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {post.excerpt}
                </p>
              </div>
              <div className="flex items-center gap-2 text-[#FC8E1A] shrink-0 mt-2 md:mt-0">
                <span
                  className="text-sm font-medium whitespace-nowrap"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {post.date}
                </span>
                <svg
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-16 py-8 px-6 text-center">
        <p
          className="text-gray-600 text-sm"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          © 2025 Senior Labs. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
