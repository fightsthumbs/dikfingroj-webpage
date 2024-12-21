import Link from "next/link";

export default function Home() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Bienvenido a mi portafolio</h1>
      <p>Soy Benjamín, músico y editor audiovisual.</p>
      <nav>
        <ul>
          <li><Link href="/curriculum">Currículum</Link></li>
          <li><Link href="/demo-reel">Demo Reel</Link></li>
          <li><Link href="/musica">Música</Link></li>
          <li><Link href="/blog">Blog</Link></li>
        </ul>
      </nav>
    </div>
  );
}
