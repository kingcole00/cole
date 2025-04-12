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
          <a href="#music" className="hover:text-purple-300 underline">MUSIC</a>
          <a href="#videos" className="hover:text-purple-300 underline">VIDEOS</a>
          <a href="#about" className="hover:text-purple-300 underline">ABOUT</a>
          <a href="#nfts" className="hover:text-purple-300 underline">NFTS</a>
          <a href="#comedy" className="hover:text-purple-300 underline">COMEDY</a>
        </nav>
      </div>

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
        <a href="/cole-chomps-deluxe.html" target="_blank" rel="noopener noreferrer">
          <button className="bg-purple-700 hover:bg-purple-500 text-white px-6 py-3 mt-6 rounded-full shadow-lg animate-pulse transition-all duration-300 ease-in-out">
            🎮 Play Cole Chomps Deluxe
          </button>
        </a>
        <div className="mt-8">
          <a href="https://www.ebay.com/str/bestlittlebookhouse" target="_blank" rel="noopener noreferrer">
            <button className="bg-purple-700 hover:bg-purple-500 text-white px-6 py-2 rounded-full animate-pulse mt-4">
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
