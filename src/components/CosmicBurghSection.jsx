import { useEffect } from 'react';

export default function CosmicBurghSection() {
  useEffect(() => {
    const script = document.createElement("script");
    script.setAttribute("src", "https://embedsocial.com/embedscript/in.js");
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section
      className="w-full py-12 text-white text-center bg-cover bg-center relative"
      style={{ backgroundImage: "url('/king-cole-hero-bg.png')" }}
    >
      <div className="bg-black bg-opacity-60 py-10 px-6 rounded-xl mx-auto max-w-4xl border border-purple-700 shadow-lg">
        <h2 className="text-3xl font-extrabold mb-3 text-purple-400 uppercase tracking-widest animate-pulse">
          Cosmic Burgh Broadcast
        </h2>
        <p className="text-md text-blue-300 mb-8 max-w-lg mx-auto">
          Alien reviews. Intergalactic vibes. Transmissions from the heart of the Steel City.
        </p>

        {/* Alien Fan Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {[
            {
              name: 'Zarnok of Galaxy 6B',
              quote: 'His punchlines reached our quadrant before the speed of light.',
            },
            {
              name: 'Floog of Saturn Rings',
              quote: 'My tentacles danced to every beat. 12/10.',
            },
            {
              name: 'Glarnok of The Federation',
              quote: 'We abducted him… just to open for our comedy tour.',
            },
          ].map((fan, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-purple-800 via-indigo-600 to-pink-500 p-4 rounded-lg shadow-md backdrop-blur-sm hover:scale-105 transform transition duration-300"
            >
              <p className="italic text-sm">"{fan.quote}"</p>
              <p className="font-bold text-sm mt-3 text-white">— {fan.name}</p>
            </div>
          ))}
        </div>

        {/* Instagram Embed */}
        <div className="mb-2">
          <iframe
            src="https://snapwidget.com/embed/1041574"
            className="w-full h-[400px] border-none rounded-lg shadow-md"
            allowtransparency="true"
            title="Instagram feed"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

