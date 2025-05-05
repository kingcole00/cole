// components/NFTCarousel.jsx
import React, { useEffect } from 'react';
import './NFTCarousel.css'; // You’ll make this CSS file next

const nfts = [
  {
    title: "Spacewalk",
    image: "https://ipfs.raribleusercontent.com/ipfs/QmSJmgYLnQWGbpxTE1yXY3v6TTZK6bgXEZD4HPPQbD1PoP",
    description: "A space-age anthem about navigating the noise, watching for hawks, and floating above the nonsense.",
    link: "https://rarible.com/token/ethereum/0xd07dc4262bcdbf85190c01c996b4c06a461d2430:845722"
  },
  {
    title: "Hope",
    image: "https://ipfs.raribleusercontent.com/ipfs/QmbdXDR2vFCeWDRtTZi4PbzFKuBLkekBQkziqkzNTNEDmf",
    description: "A golden universe of hope and a few spicy innuendos. Hold on tight.",
    link: "https://rarible.com/token/ethereum/0xd07dc4262bcdbf85190c01c996b4c06a461d2430:844872"
  },
  {
    title: "Story",
    image: "https://ipfs.raribleusercontent.com/ipfs/QmRYmK4ezgrtGReBeFo9Zp2vgC6QyUocJ8DNKRxzm3ViHE",
    description: "Written in the stars, bound in Akashic leather, and sprinkled with purpose.",
    link: "https://rarible.com/token/ethereum/0xd07dc4262bcdbf85190c01c996b4c06a461d2430:844345"
  }
];

export default function NFTCarousel() {
  useEffect(() => {
    const carousel = document.getElementById("nftCarousel");
    const radius = 400;
    const angleStep = 360 / nfts.length;

    const items = carousel?.children || [];
    [...items].forEach((item, i) => {
      item.style.transform = `rotateY(${i * angleStep}deg) translateZ(${radius}px)`;
    });
  }, []);

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
