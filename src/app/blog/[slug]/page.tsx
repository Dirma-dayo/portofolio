import { posts } from "../../../data/posts";
import ReactMarkdown from "react-markdown";

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    return <main className="p-6 text-green-400">post not found :</main>;
  }

  return (
    <main className="min-h-screen bg-black text-green-400 font-mono p-6">
  <article className="prose prose-invert prose-green max-w-none">
    <h1 className="text-3xl font-extrabold">{post.title}</h1>
    <p className="italic text-gray-400">{post.date}</p>
    <ReactMarkdown>{post.content}</ReactMarkdown>
  </article>
</main>

  );
}
