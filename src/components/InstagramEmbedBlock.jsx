import { useEffect } from 'react';

export default function InstagramProfileWidget() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="w-full bg-black py-12 text-center">
      <h2 className="text-3xl text-purple-400 font-bold mb-6 animate-pulse">
        📸 Live from the CosmicCam
      </h2>
      <p className="text-blue-300 mb-8 max-w-xl mx-auto">
        Straight from the interstellar adventures of @cosmiccosmo007. Hover, like, and vibe with our galaxy feed.
      </p>
      <div className="elfsight-app-2b691b45-1b50-4180-bac3-7cc51dabad87" data-elfsight-app-lazy></div>
    </section>
  );
}
