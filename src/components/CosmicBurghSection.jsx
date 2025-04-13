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
      className="w-full py-16 text-white text-center bg-cover bg-center relative"
      style={{ backgroundImage: "url('/king-cole-hero-bg.png')" }}
    >
      <div className="bg-black bg-opacity-50 py-12 px-6 rounded-xl mx-auto max-w-5xl">
        <h2 className="text-4xl font-extrabold mb-4 text-purple-400 uppercase tracking-widest">
          Cosmic Burgh Broadcast
        </h2>
        <p className="text-lg text-blue-300 mb-10 max-w-xl mx-auto">
          Alien reviews. Intergalactic vibes. Live transmissions from the heart of the Steel City.
        </p>

        {/* Alien Fan Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
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
              className="bg-gradient-to-br from-purple-700 via-pink-500 to-yellow-400 p-6 rounded-lg shadow-xl backdrop-blur-sm hover:scale-105 transform transition duration-300"
            >
              <p className="italic text-sm">"{fan.quote}"</p>
              <p className="font-bold text-md mt-4 text-white">— {fan.name}</p>
            </div>
          ))}
        </div>

        {/* Instagram Embed */}
        <div className="mb-4">
          <iframe
            src="https://snapwidget.com/embed/1041572"
            className="w-full h-[500px] border-none"
            allowtransparency="true"
            title="Instagram feed"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
