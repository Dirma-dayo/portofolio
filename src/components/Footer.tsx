
export default function Footer() {
  return (
    <footer style={{ borderTop: "2px solid #00ff00", padding: "10px 0", textAlign: "center", fontFamily: "monospace", fontSize: "12px" }}>
      ©Aria 2008-{new Date().getFullYear()}
    </footer>
  );
}
