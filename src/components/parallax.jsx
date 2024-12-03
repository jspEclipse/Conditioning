'use client';
import { useEffect, useState } from "react";

const ParallaxSquare = ({ width, x, y, color, y2 }) => {
  const [scrollY, setScrollY] = useState(y);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate current Y position based on scroll
  const currentY = y + (y2 - y) * (scrollY / (document.body.scrollHeight - window.innerHeight));
  const currentYInVh = (currentY / window.innerHeight) * 100;


  return (
    <div
      style={{
        position: "absolute",
        top: `${currentY}vh`, // Responsive positioning
        left: `${x}vw`, // Responsive positioning
        width: `${width}vw`, // Responsive width
        height: `${width * 2.5}vw`, // Height is 3 times the width
        backgroundColor: color,
        zIndex: 1, // Send behind other elements
      }}
    ></div>
  );  
};

export default ParallaxSquare;
