import { useEffect, useRef } from 'react';

export default function TweetEmbed() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Check if the script has already been loaded
    if (!document.querySelector('script[src="https://platform.twitter.com/widgets.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://platform.twitter.com/widgets.js';
      script.async = true;
      document.body.appendChild(script);
    } else if (window.twttr?.widgets) {
      window.twttr.widgets.load(containerRef.current);
    }
  }, []);

  return (
    <div ref={containerRef} className="flex justify-center mt-8">
      <blockquote className="twitter-tweet" data-theme="dark">
        <a href="https://x.com/RobinHooding/status/1745131794227435724">Loading tweet…</a>
      </blockquote>
    </div>
  );
}
