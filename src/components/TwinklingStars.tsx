import { useEffect, useState } from "react";

interface TwinklingStar {
  id: number;
  top: number;
  left: number;
  size: number;
  delay: number;
  duration: number;
}

const TwinklingStars = () => {
  const [stars, setStars] = useState<TwinklingStar[]>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars: TwinklingStar[] = [];
      for (let i = 0; i < 30; i++) {
        newStars.push({
          id: i,
          top: Math.random() * 80,
          left: Math.random() * 100,
          size: 1 + Math.random() * 3,
          delay: Math.random() * 5,
          duration: 2 + Math.random() * 3,
        });
      }
      setStars(newStars);
    };

    generateStars();
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className="twinkling-star"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

export default TwinklingStars;
