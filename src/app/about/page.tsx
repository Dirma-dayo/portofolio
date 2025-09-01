
import Link from "next/link";
import Image from "next/image";
import crt from "@/crt.jpg"

export default function AboutPage() {
  return (
    <main

    >
      <h1 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
        Muhammad Fahri Baadila
      </h1>

      <p>
        Currently studying in{" "}
        <a
          href="https://smkn8malang.sch.id/"
          style={{ color: "yellow", textDecoration: "underline" }}
          target="_blank"
        >
          SMKN 8 Malang
        </a>{" "}
        in the{" "}
        <a
          href="https://smkn8malang.sch.id/Rpl"
          style={{ color: "yellow", textDecoration: "underline" }}
          target="_blank"
        >
          RPL
        </a>{" "}
        field.
      </p>

 <p style={{ marginTop: "1rem" }}>
  I joined RPL because I&apos;m pretty good at hardware already- built my own PC out of scraps,
  got a DDR1 & DDR2 RAM collection, old CPUs too. Thought: <i>&quot;why not branch out to RPL?&quot;</i>
</p>

<p style={{ marginTop: "1rem" }}>
  Sure I might be better off in TKJ, but honestly coding&apos;s fun once you actually know what does what.
</p>

<p style={{ marginTop: "1rem" }}>
  I&apos;m still learning stuff I&apos;m seventeen. My Discord is <b>dirma</b> if you wanna chat or you can just go to this 
  <Link href="/contact" style={{ margin: "0 8px" }}>page</Link>.
</p>


      <div style={{ margin: "0.5rem 0 1rem" }}>↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓</div>

<div style={{ display: "flex", justifyContent: "center" }}>
  <Image
    src={crt}
    alt="My CRT TV"
    width={420}
    height={315}
    className="pixelated"
  />
</div>


      <p style={{ marginTop: "1rem" }}>
        Im still learning stuff Im seventeen. My Discord is <b>dirma</b> if you wanna chat or you can just go to this 
        <Link href="/contact" style={{ margin: "0 8px" }}>page</Link>.
      </p>

      <p style={{ marginTop: "1rem" }}>
        I use Arch Linux and Windows, but usually Arch because it keeps my lappy cold and I can straight up kill my dGPU.
      </p>

      <p style={{ marginTop: "1rem", fontStyle: "italic", color: "#66ff99" }}>
        revert to clippy
      </p>
    </main>
  );
}
