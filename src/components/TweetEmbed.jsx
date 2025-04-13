import { useEffect, useRef } from 'react';

export default function TweetEmbed() {
  const containerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
    script.setAttribute('async', '');
    containerRef.current.appendChild(script);
  }, []);

  return (
    <div ref={containerRef} className="flex justify-center mt-8">
      <blockquote className="twitter-tweet" data-theme="dark">
        <a href="https://x.com/RobinHooding/status/1745131794227435724">
          https://x.com/RobinHooding/status/1745131794227435724
        </a>
      </blockquote>
    </div>
  );
}
