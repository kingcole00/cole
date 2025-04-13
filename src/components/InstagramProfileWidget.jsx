import { useEffect } from 'react';

export default function InstagramProfileWidget() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="w-full bg-gradient-to-b from-black via-gray-900 to-black py-12 text-center">
      <h2 className="text-3xl md:text-4xl text-purple-400 font-bold mb-4 animate-pulse">
        📸 CosmicCosmo007's Insta Feed
      </h2>
      <p className="text-blue-300 mb-8 max-w-2xl mx-auto">
        Broadcasts from Planet Cosmo 🐾— straight from the Pittsburgh quadrant. Hover, heart, repeat.
      </p>
      <div className="elfsight-app-2b691b45-1b50-4180-bac3-7cc51dabad87" data-elfsight-app-lazy></div>
    </section>
  );
}
