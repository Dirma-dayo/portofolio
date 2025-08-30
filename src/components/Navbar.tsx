
import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{ borderBottom: "2px solid #00ff00", padding: "8px 0", textAlign: "center", fontFamily: "monospace" }}>
      <Link href="/" style={{ margin: "0 8px" }}>terminal</Link>|
      <Link href="/about" style={{ margin: "0 8px" }}>about</Link>|
      <Link href="/projects" style={{ margin: "0 8px" }}>projects</Link>|
      <Link href="/skills" style={{ margin: "0 8px" }}>skills</Link>|
      <Link href="/contact" style={{ margin: "0 8px" }}>contact</Link>
    </nav>
  );
}
