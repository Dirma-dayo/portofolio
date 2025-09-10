
export default function AboutPage() {
  return (
    <main className="font-mono text-green-400 bg-black min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-4">Muhammad Fahri Baadila</h1>

      <p className="mb-4">
        currently studying in{" "}
        <a href="https://smkn8malang.sch.id/" target="_blank" className="underline text-yellow-400">
          SMKN 8 Malang
        </a>{" "}
        in the{" "}
        <a href="https://smkn8malang.sch.id/Rpl" target="_blank" className="underline text-yellow-400">
          RPL
        </a>{" "}
        field.
      </p>

      <p className="mb-4 italic">
        i joined rpl because i&apos;m pretty good at hardware already—built my own pc out of scraps,
        got a ddr1 & ddr2 ram collection, old cpus too. thought: <i>why not branch out to rpl?</i>
      </p>

      <p className="mb-4">sure i might be better off in tkj, but codings fun once you know what does what.</p>

      <p className="mb-4">
        im still learning stuff im seventeen. discord: <b>dirma</b> or go to{" "}
        <a href="/contact" className="underline text-green-300">
          contact page
        </a>
        .
      </p>

      <p className="mb-4">
        i use arch linux and windows, usually arch because it keeps my lappy cold and i can straight up kill my dGPU.
      </p>

      <p className="italic text-green-300">revert to clippy</p>
    </main>
  );
}
