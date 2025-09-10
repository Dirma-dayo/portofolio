// components/footer.tsx
export default function Footer() {
  return (
    <footer className="border-t-2 border-green-400 py-3 text-center font-mono text-sm text-green-400">
      © Aria 2008-{new Date().getFullYear()}
    </footer>
  );
}
