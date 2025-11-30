import { useState, useEffect } from "react";

export const StarBg = () => {
  const [stars, setStars] = useState([]);
  const [meteor, setmeteor] = useState([]);

//   if any change in anything regenerate stars and meteors
  useEffect(() => {
  
    generateStars();
    generateMeteor();
  

}, []);


//   generate stars based on screen size
  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 2000
    );

    // stpred multiple stars in an array
    const newStars = [];

    // for each star generate random properties.
    // now each star in newStars array will have these properties
    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i + 1,
        size: Math.random() * 3,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.4 + 0.4,
        animationDuration: Math.random() * 5 + 3,
      });
    }

    // set the stars state
    setStars(newStars);
  };

  const generateMeteor = () => {
    const numberofmeteors = 4;
    const newmeteor = [];

    for (let i = 0; i < numberofmeteors; i++) {
      newmeteor.push({
        id: i + 1,
        size: Math.random() * 2,
        x: Math.random() * 100,
        y: Math.random() * 20,
        opacity: Math.random() * 15,
        animationDuration: Math.random() * 3 + 3,
      });
    }

    setmeteor(newmeteor); // ✔ corrected
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">

      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle absolute rounded-full bg-white"
        //   setting the star properties in window frame
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            top: `${star.y}%`,
            left: `${star.x}%`,
            opacity: star.opacity,
            animationDuration: `${star.animationDuration}s`,
          }}
        />
      ))}

      {meteor.map((star) => (
        <div
          key={star.id}
          className="meteor animate-meteor"
          style={{
            width: `${star.size * 50}px`, 
            height: `${star.size * 2}px`,
            top: `${star.y}%`,
            left: `${star.x}%`,
            opacity: star.opacity,
            animationDelay: star.delay,
            animationDuration: `${star.animationDuration}s`,
          }}
        />
      ))}
    </div>
  );
};
