import { useEffect, useRef } from 'react';

export default function TweetEmbed() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Load the Twitter script if it hasn’t already been loaded
    if (!window.twttr) {
      const script = document.createElement("script");
      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
      script.onload = () => {
        if (window.twttr && window.twttr.widgets) {
          window.twttr.widgets.load(containerRef.current);
        }
      };
      document.body.appendChild(script);
    } else {
      // Twitter script already loaded, trigger widget rendering
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
