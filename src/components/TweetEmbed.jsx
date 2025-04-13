
import { useEffect } from 'react';

export default function TweetEmbed() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="flex justify-center mt-8">
      <blockquote
        className="twitter-tweet"
        data-theme="dark"
      >
        <a href="https://x.com/RobinHooding/status/1234567890123456789"></a>
      </blockquote>
    </div>
  );
}
