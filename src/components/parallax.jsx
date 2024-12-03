'use client';
import { useEffect, useState } from "react";

const ParallaxSquare = ({ width, x, y, color, y2 }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Avoid potential divide-by-zero errors
  const scrollHeight = document.body.scrollHeight - window.innerHeight || 1;

  // Calculate current Y position based on scroll
  const currentY = y + (y2 - y) * (scrollY / scrollHeight);
  const currentYInVh = (currentY / window.innerHeight) * 100;

  return (
    <div
      style={{
        position: "absolute",
        top: `${currentYInVh}vh`, // Correct responsive positioning
        left: `${x}vw`, // Responsive horizontal positioning
        width: `${width}vw`, // Responsive width
        height: `${width * 2.5}vw`, // Height is 2.5x the width
        backgroundColor: color,
        zIndex: 1, // Place behind other elements
      }}
    ></div>
  );
};

