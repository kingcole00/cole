import { Music, Rocket, Sparkles, Contact, ShoppingBag, UserCircle2, Laugh, Gamepad2 } from "lucide-react";
import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans relative overflow-hidden">
      {/* Cosmic Background */}
      <div className="absolute inset-0 z-0">
        <img src="/ufo-king-cole.png" alt="King Cole UFO" className="w-full h-full object-cover opacity-30 animate-pulse" />
      </div>

      {/* Floating UFO */}
      <motion.div className="absolute top-10 left-1/2 transform -translate-x-1/2 z-10" animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }}>
        <img src="/ufo-king-cole.png" alt="Floating UFO" className="w-64 opacity-90" />
      </motion.div>

      {/* Neon Skyline */}
      <div className="absolute bottom-0 w-full z-0">
        <img src="/neon-skyline.png" alt="Neon Skyline" className="w-full object-cover" />
      </div>

      {/* Header */}
      <header className="relative z-20 p-6 text-center mt-64">
        <h1 className="text-5xl font-bold tracking-wide font-mono text-cyan-400">King Cole</h1>
        <p className="text-xl text-purple-300">Cosmic Legend</p>
      </header>

      {/* Navigation */}
      <nav className="relative z-20 flex justify-center gap-6 p-4 text-lg flex-wrap">
        <a href="#music" className="hover:text-purple-300 flex items-center gap-2"><Music size={20}/> Music</a>
        <a href="#videos" className="hover:text-purple-300 flex items-center gap-2"><Rocket size={20}/> Videos</a>
        <a href="#comedy" className="hover:text-purple-300 flex items-center gap-2"><Laugh size={20}/> Comedy</a>
        <a href="#game" className="hover:text-purple-300 flex items-center gap-2"><Gamepad2 size={20}/> Game & Store</a>
        <a href="#about" className="hover:text-purple-300 flex items-center gap-2"><UserCircle2 size={20}/> About</a>
        <a href="#nfts" className="hover:text-purple-300 flex items-center gap-2"><ShoppingBag size={20}/> Merch/NFTs</a>
        <a href="#contact" className="hover:text-purple-300 flex items-center gap-2"><Contact size={20}/> Contact</a>
      </nav>

      {/* Sections */}
      <motion.section id="music" className="relative z-20 p-8 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h2 className="text-3xl font-bold mb-4 text-pink-400">Featured Tracks</h2>
        <iframe src="https://open.spotify.com/embed/artist/4CQnbedqSMOeOZmoQIAei0" width="300" height="380" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
      </motion.section>

      <motion.section id="videos" className="relative z-20 p-8 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h2 className="text-3xl font-bold mb-4 text-pink-400">Live from the Galaxy</h2>
        <div className="flex justify-center gap-6 flex-wrap">
          <iframe width="360" height="215" src="https://www.youtube.com/embed/Ph6g0ckDMw8" allowFullScreen></iframe>
          <iframe width="360" height="215" src="https://www.youtube.com/embed/Nwn_DcbIZzg" allowFullScreen></iframe>
          <iframe width="360" height="215" src="https://www.youtube.com/embed/_G9EDL_ThAg" allowFullScreen></iframe>
          <iframe width="360" height="215" src="https://www.youtube.com/embed/d7JthvQKXNw" allowFullScreen></iframe>
        </div>
      </motion.section>

      <motion.section id="comedy" className="relative z-20 p-8 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h2 className="text-3xl font-bold mb-4 text-pink-400">Stand-Up Comedy</h2>
        <p className="text-purple-300">When King Cole isn't launching beats into the cosmos, he's landing punchlines on Earth. 🌍✨</p>
      </motion.section>

      <motion.section id="game" className="relative z-20 p-8 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h2 className="text-3xl font-bold mb-4 text-pink-400">Cole Chomps: Game & Store</h2>
        <a href="/cole-chomps-game.html" target="_blank" rel="noopener noreferrer">
  <button className="bg-purple-700 hover:bg-purple-500 text-white px-6 py-3 mt-6 rounded-full shadow-lg animate-pulse transition-all duration-300 ease-in-out">
    🎮 Play Cole Chomps in a New Tab
  </button>
</a>
        <div className="mt-8">
          <a href="https://www.ebay.com/str/bestlittlebookhouse" target="_blank" rel="noopener noreferrer">
  <button className="bg-purple-700 hover:bg-purple-500 text-white px-6 py-3 mt-6 rounded-full shadow-lg animate-pulse transition-all duration-300 ease-in-out">
    🛒 Visit My eBay Store – Best Little Bookhouse
  </button>
</a>
        </div>
      </motion.section>

      <motion.section id="about" className="relative z-20 p-8 text-center max-w-3xl mx-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h2 className="text-3xl font-bold mb-4 text-pink-400">About King Cole</h2>
        <p className="text-purple-200 text-lg">From Pittsburgh to the stars, King Cole blends therapy-core lyrics with UFO grooves and comedy heat. He’s a vibe, a dimension, and a universal transmission.</p>
      </motion.section>

      <motion.section id="nfts" className="relative z-20 p-8 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h2 className="text-3xl font-bold mb-4 text-pink-400">NFTs & Merch</h2>
        <p className="mb-4 text-purple-300">Own a piece of the galaxy.</p>
        <a href="https://rarible.com/kingcole/sale" target="_blank" rel="noopener noreferrer">
          <button className="bg-purple-700 hover:bg-purple-600 text-white px-6 py-2 rounded-full animate-pulse">Shop King Cole NFTs</button>
        </a>
      </motion.section>

      <motion.section id="contact" className="relative z-20 p-8 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h2 className="text-3xl font-bold mb-4 text-pink-400">Contact</h2>
        <p className="text-purple-300 mb-2">Want to book King Cole or beam in a message?</p>
        <a href="mailto:kingcole001@yahoo.com" className="text-xl underline text-purple-400 hover:text-purple-200">kingcole001@yahoo.com</a>
        <div className="mt-4">
          <a href="https://x.com/RobinHooding" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-100">Follow me on X (Twitter)</a>
        </div>
      </motion.section>

      <motion.section id="newsletter" className="relative z-20 p-8 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h2 className="text-3xl font-bold mb-4 text-pink-400">Join the Transmission</h2>
        <p className="text-purple-300 mb-4">Get cosmic drops, secret shows & King Cole updates.</p>
        <form action="https://formspree.io/f/mblgwgaa" method="POST">
          <input type="email" name="email" required placeholder="Enter your email..." className="px-4 py-2 rounded-full w-64 text-black focus:outline-none" />
          <button type="submit" className="bg-purple-600 hover:bg-purple-500 text-white ml-2 px-6 py-2 rounded-full">Subscribe</button>
        </form>
      </motion.section>

      <footer className="relative z-20 p-6 text-center text-purple-400">
        <p>© 2025 King Cole. All rights reserved in this galaxy and the next.</p>
      </footer>
    </div>
  );
}
