import Link from "next/link";
import { posts } from "../../data/posts";

export default function BlogIndex() {
  return (
    <main className="min-h-screen bg-black text-green-400 font-mono p-6">
      <h1 className="text-3xl font-bold mb-6">blog dump</h1>
      <div className="flex flex-col gap-6">
        {posts.map((post) => (
          <div
            key={post.slug}
            className="border border-green-400/40 rounded-2xl p-6 bg-black/60 shadow-md shadow-green-900"
          >
            <h2 className="text-xl font-bold mb-2">{post.title}</h2>
            <p className="text-sm mb-4">{post.date}</p>
            <Link
              href={`/blog/${post.slug}`}
              className="underline hover:text-green-200"
            >
              read more →
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
