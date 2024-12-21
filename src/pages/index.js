import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-gray-800">Bienvenido a mi portafolio</h1>
      <p className="text-lg text-gray-600 mt-4">Soy Benjamín, músico y editor audiovisual.</p>
      <nav className="mt-6">
        <ul className="flex space-x-4">
          <li><Link className="text-blue-500 hover:underline" href="/curriculum" >Currículum</Link></li>
          <li><Link className="text-blue-500 hover:underline" href="/demo-reel">Demo Reel</Link></li>
          <li><Link className="text-blue-500 hover:underline" href="/musica">Música</Link></li>
          <li><Link className="text-blue-500 font-mono hover:underline" href="/blog">Blog</Link></li>
        </ul>
      </nav>
    </div>
  );
}
