import { useEffect, useRef } from 'react';

export default function TweetEmbed() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Inject Twitter widget script
    const script = document.createElement('script');
    script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
    script.setAttribute('async', '');
    script.setAttribute('charset', 'utf-8');
    containerRef.current.appendChild(script);
  }, []);

  return (
    <div ref={containerRef} className="flex justify-center mt-8">
      <blockquote className="twitter-tweet">
        <p lang="en" dir="ltr">
          I will be hosting + doing some comedy in between sets at this show on the 23rd <br />
          Help a young mom fight cancer ✨🙏<br />
          Rock for Hope: A Benefit for Noelle at 565 LIVE<br />
          Noelle DeFazio, a mother of two from Pittsburgh, PA, is battling stage 4 cervical cancer. She has undergone multiple…{' '}
          <a href="https://t.co/OzrHrC1xOa">pic.twitter.com/OzrHrC1xOa</a>
        </p>
        — King Cole (
        <a href="https://twitter.com/RobinHooding/status/1910142967915913700?ref_src=twsrc%5Etfw">
          @RobinHooding
        </a>){' '}
        <a href="https://twitter.com/RobinHooding/status/1910142967915913700?ref_src=twsrc%5Etfw">April 10, 2025</a>
      </blockquote>
    </div>
  );
}
