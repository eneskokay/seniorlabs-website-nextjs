import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getBlogPost, blogPosts } from "@/app/lib/blogs";
import RemoveLoadingClass from "@/app/components/RemoveLoadingClass";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Senior Labs`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <RemoveLoadingClass />
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
            href="/blogs"
            className="text-sm text-white hover:text-[#FC8E1A] transition-colors duration-200"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            ← All Posts
          </Link>
        </div>
      </nav>

      {/* Article */}
      <article className="max-w-3xl mx-auto px-6 pt-32 pb-24">
        {/* Meta */}
        <div className="flex items-center gap-3 mb-6">
          <span
            className="text-xs text-[#FC8E1A] tracking-widest uppercase"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            {post.category}
          </span>
          <span className="text-white/20">·</span>
          <span
            className="text-sm text-gray-500"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {post.date}
          </span>
          <span className="text-white/20">·</span>
          <span
            className="text-sm text-gray-500"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {post.readTime}
          </span>
        </div>

        {/* Title */}
        <h1
          className="text-3xl md:text-5xl font-bold text-white leading-tight mb-8"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          {post.title}
        </h1>

        {/* Excerpt */}
        <p
          className="text-lg text-gray-300 leading-relaxed mb-12 border-l-4 border-[#FC8E1A] pl-5"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {post.excerpt}
        </p>

        <div className="border-t border-white/10 mb-12" />

        {/* Content */}
        <div className="flex flex-col gap-8">
          {post.content.map((section, i) => {
            if (section.type === "paragraph") {
              return (
                <p
                  key={i}
                  className="text-gray-300 text-base md:text-lg leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {section.text}
                </p>
              );
            }
            if (section.type === "heading") {
              return (
                <h2
                  key={i}
                  className="text-xl md:text-2xl font-bold text-white mt-4"
                  style={{ fontFamily: "'Orbitron', sans-serif" }}
                >
                  {section.text}
                </h2>
              );
            }
            if (section.type === "list" && section.items) {
              return (
                <ul key={i} className="flex flex-col gap-4">
                  {section.items.map((item, j) => (
                    <li
                      key={j}
                      className="flex gap-3 text-gray-300 text-base md:text-lg leading-relaxed"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      <span className="text-[#FC8E1A] mt-1 shrink-0">▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              );
            }
            if (section.type === "quote") {
              return (
                <blockquote
                  key={i}
                  className="border-l-4 border-[#FC8E1A] pl-6 py-2"
                >
                  <p
                    className="text-xl text-white italic leading-relaxed"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    &ldquo;{section.text}&rdquo;
                  </p>
                </blockquote>
              );
            }
            return null;
          })}
        </div>

        {/* Back link */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-[#FC8E1A] hover:text-[#ff4e00] transition-colors duration-200 font-medium"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            All Posts
          </Link>
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-6 text-center">
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
