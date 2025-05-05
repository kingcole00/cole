// components/NFTCarousel.jsx
import React, { useEffect, useState } from 'react';
import './NFTCarousel.css';

export default function NFTCarousel() {
  const [nfts, setNfts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNFTs = async () => {
      try {
        const res = await fetch('https://api.rarible.org/v0.1/items/byCreator?creator=ETHEREUM:kingcole');
        const data = await res.json();

        const formatted = data.items.map(item => ({
          title: item.meta?.name || 'Untitled',
          image: item.meta?.content?.[0]?.url?.replace('ipfs://', 'https://ipfs.io/ipfs/') || '',
          description: item.meta?.description || 'No description provided.',
          link: `https://rarible.com/token/ethereum/${item.id}`
        })).filter(nft => nft.image);

        setNfts(formatted);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch NFTs:', error);
        setLoading(false);
      }
    };

    fetchNFTs();
  }, []);

  useEffect(() => {
    const carousel = document.getElementById("nftCarousel");
    const radius = 350;
    const angleStep = 360 / nfts.length;

    const items = carousel?.children || [];
    [...items].forEach((item, i) => {
      item.style.transform = `rotateY(${i * angleStep}deg) translateZ(${radius}px)`;
    });
  }, [nfts]);

  if (loading) return <p className="text-purple-300">🚀 Loading your cosmic collection...</p>;

  return (
    <div className="carousel-wrapper">
      <div className="carousel" id="nftCarousel">
        {nfts.map((nft, i) => (
          <div className="carousel-item" key={i}>
            <img src={nft.image} alt={nft.title} />
            <h3>{nft.title}</h3>
            <p>{nft.description}</p>
            <a href={nft.link} target="_blank" rel="noopener noreferrer">View on Rarible</a>
          </div>
        ))}
      </div>
    </div>
  );
}
