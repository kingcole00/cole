import { Music, Rocket, Sparkles, Contact, ShoppingBag, UserCircle2, Laugh, Gamepad2 } from "lucide-react";
import { motion } from "framer-motion";

export default function App() {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage: "url('/king-cole-hero-bg.png')",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col items-center justify-center text-center py-20">
        <h1 className="text-6xl font-bold tracking-wider text-blue-400 mb-4">KING COLE</h1>
        <p className="text-2xl text-purple-300 mb-6">COSMIC LEGEND</p>
        <nav className="flex gap-6 text-lg flex-wrap justify-center">
          
        </nav>
      </div>

     

      <motion.section id="videos" className="relative z-20 p-8 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h2 className="text-3xl font-bold mb-4 text-pink-400">Live from the Galaxy</h2>
        <div className="flex justify-center gap-6 flex-wrap">
          <iframe width="360" height="215" src="https://www.youtube.com/embed/Ph6g0ckDMw8" allowFullScreen></iframe>
          <iframe width="360" height="215" src="https://www.youtube.com/embed/Nwn_DcbIZzg" allowFullScreen></iframe>
          <iframe width="360" height="215" src="https://www.youtube.com/embed/_G9EDL_ThAg" allowFullScreen></iframe>
          <iframe width="360" height="215" src="https://www.youtube.com/embed/d7JthvQKXNw" allowFullScreen></iframe>
          <iframe width="360" height="215" src="https://www.youtube.com/embed/8vnNCzIRIZo?si=qddJ1j0V1OtPjBXM" allowFullScreen></iframe>
        </div>
      </motion.section>

      <motion.section id="comedy" className="relative z-20 p-8 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h2 className="text-3xl font-bold mb-4 text-pink-400">Stand-Up Comedy</h2>
        <p className="text-purple-300">When King Cole isn't launching beats into the cosmos, he's landing punchlines on Earth. 🌍✨</p>
      </motion.section>

      <motion.section id="shop" className="relative z-20 p-8 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
  <h2 className="text-3xl font-bold mb-4 text-pink-400">My Cosmic Bookstore</h2>
  <p className="text-purple-300 mb-4">Rare finds, cosmic vibes, and vintage treasures 📚✨</p>
  <a href="https://www.ebay.com/str/bestlittlebookhouse" target="_blank" rel="noopener noreferrer">
    <button className="bg-gradient-to-r from-yellow-500 to-pink-600 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 hover:shadow-pink-300 transition-all duration-300 ease-in-out flex items-center gap-2">
      📚 Visit My eBay Store
    </button>
  </a>
</motion.section>

      <motion.section id="about" className="relative z-20 p-8 text-center max-w-3xl mx-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h2 className="text-3xl font-bold mb-4 text-pink-400">About King Cole</h2>
        <p className="text-purple-200 text-lg">From Pittsburgh and the tri-state area to the stars, King Cole blends therapy-core lyrics with UFO grooves and comedy heat. He’s a vibe, a dimension, and a universal transmission.</p>
      </motion.section>

      <motion.section id="nfts" className="relative z-20 p-8 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h2 className="text-3xl font-bold mb-4 text-pink-400">NFTs & Merch</h2>
        <p className="mb-4 text-purple-300">Own a piece of the galaxy.</p>
        <a href="https://rarible.com/kingcole/sale" target="_blank" rel="noopener noreferrer">
          <button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 hover:rotate-1 hover:shadow-purple-400 transition-all duration-300 ease-in-out flex items-center gap-2">
            🪐 Shop King Cole NFTs
          </button>
        </a>
      </motion.section>

 
       <motion.section id="music" className="relative z-20 p-8 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h2 className="text-3xl font-bold mb-4 text-pink-400">Featured Tracks</h2>
        <iframe src="https://open.spotify.com/embed/artist/4CQnbedqSMOeOZmoQIAei0" width="300" height="380" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
      </motion.section> 
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


      <motion.section id="newsletter" className="relative z-20 p-8 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h2 className="text-3xl font-bold mb-4 text-pink-400">Join the Transmission</h2>
        <p className="text-purple-300 mb-4">Get cosmic drops, secret shows & King Cole updates.</p>
        <form action="https://formspree.io/f/mblgwgaa" method="POST">
          <input type="email" name="email" required placeholder="Enter your email..." className="px-4 py-2 rounded-full w-64 text-black focus:outline-none" />
          <button type="submit" className="bg-gradient-to-r from-blue-600 to-indigo-500 text-white ml-2 px-6 py-2 rounded-full shadow-lg hover:scale-105 hover:shadow-indigo-400 transition-all duration-300 ease-in-out flex items-center gap-2">
            📬 Subscribe
          </button>
        </form>
      </motion.section> <motion.section id="contact" className="relative z-20 p-8 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
     <div className="flex justify-center gap-4 mt-4">
  <a href="mailto:kingcole001@yahoo.com" title="Email King Cole">
    <img
      src="/icon-email-48.png"
      alt="Email"
      className="w-12 h-12 animate-pulse hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_6px_#a855f7]"
    />
  </a>

  <a href="https://x.com/RobinHooding" target="_blank" rel="noopener noreferrer" title="Follow on X">
    <img
      src="/icon-twitter-48.png"
      alt="Twitter"
      className="w-12 h-12 animate-pulse hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_6px_#60a5fa]"
    />
  </a>
</div>
      </motion.section>
      <div className="fixed bottom-4 right-4 z-50 animate-float">

</div>

      <footer className="relative z-20 p-6 text-center text-purple-400">
        <p>© 2025 King Cole. All rights reserved in this galaxy and the next.</p>
      </footer>
    </div>
  );
}
