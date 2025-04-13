import { useEffect } from 'react';

export default function InstagramEmbedBlock() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="flex justify-center mt-8">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink="https://www.instagram.com/p/CosmicCosmo007/"
        data-instgrm-version="12"
        style={{
          background: '#FFF',
          border: 0,
          borderRadius: '3px',
          boxShadow: '0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)',
          margin: '1px',
          maxWidth: '540px',
          minWidth: '326px',
          width: '99.375%',
        }}
      ></blockquote>
    </div>
  );
}

