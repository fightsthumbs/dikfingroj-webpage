import { getAllMusic } from '../lib/posts';


// export default function Musica() {
//     return (
//       <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
//         <h1>Mi Música</h1>
//         <p>Explora las pistas de banda sonora que he compuesto.</p>
//       </div>
//     );
//   }



export async function getStaticProps() {
  const music = getAllMusic();
  return {
    props: { music },
  };
}

export default function Musica({ music }) {
  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Música</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {music.map((track) => (
          <div key={track.id} className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-2xl font-semibold mb-2">{track.title}</h2>
            <audio controls className="w-full mb-4">
              <source src={track.audio} type="audio/mpeg" />
              Tu navegador no soporta la reproducción de audio.
            </audio>
            <p className="text-gray-700">{track.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
