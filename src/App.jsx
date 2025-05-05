import InstagramProfileWidget from './components/InstagramProfileWidget';
import TweetEmbed from './components/TweetEmbed';
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
        <nav className="flex gap-6 text-lg flex-wrap justify-center"></nav>
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
        <h2 className="text-3xl font-bold mb-4 text-pink-400">Renaissance man
</h2>
        <p className="text-purple-300">When King Cole isn't launching beats into the cosmos, he's landing punchlines on Earth , making films , Acting , doing astronomy , flying drones and spreading his cosmic engery and love. 🌍✨</p>
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

      {/* ✅ Instagram Profile Feed */}
      <InstagramProfileWidget />

      <TweetEmbed />
      

      <motion.section id="newsletter" className="relative z-20 p-8 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h2 className="text-3xl font-bold mb-4 text-pink-400">Join the Transmission</h2>
        <p className="text-purple-300 mb-4">Get cosmic drops, secret shows & King Cole updates.</p>
        <form action="https://formspree.io/f/mblgwgaa" method="POST">
          <input type="email" name="email" required placeholder="Enter your email..." className="px-4 py-2 rounded-full w-64 text-black focus:outline-none" />
          <button type="submit" className="bg-gradient-to-r from-blue-600 to-indigo-500 text-white ml-2 px-6 py-2 rounded-full shadow-lg hover:scale-105 hover:shadow-indigo-400 transition-all duration-300 ease-in-out flex items-center gap-2">
            📬 Subscribe
          </button>
        </form>
      </motion.section>

      <motion.section id="contact" className="relative z-20 p-8 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
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
      import NFTCarousel from './components/NFTCarousel';

// Then in your JSX:
<motion.section id="carousel" className="relative z-20 p-8 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
  <h2 className="text-3xl font-bold mb-4 text-pink-400">Cosmic NFT Carousel</h2>
  <NFTCarousel />
</motion.section>


      <footer className="relative z-20 p-6 text-center text-purple-400">
        <p>© 2025 King Cole. All rights reserved in this galaxy and the next.</p>
      </footer>
    </div>
  );
}

