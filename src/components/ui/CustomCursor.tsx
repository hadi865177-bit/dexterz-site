"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorFollowerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorFollower = cursorFollowerRef.current;

    if (!cursor || !cursorFollower) return;

    let mouseX = 0;
    let mouseY = 0;
    let followerX = 0;
    let followerY = 0;

    const updateCursor = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animateCursor = () => {
      // Main cursor follows mouse instantly
      gsap.set(cursor, {
        x: mouseX - 4,
        y: mouseY - 4,
      });

      // Follower cursor with smooth following
      followerX += (mouseX - followerX) * 0.1;
      followerY += (mouseY - followerY) * 0.1;

      gsap.set(cursorFollower, {
        x: followerX - 20,
        y: followerY - 20,
      });

      requestAnimationFrame(animateCursor);
    };

    const handleMouseEnter = () => {
      gsap.to(cursor, { scale: 1.2, duration: 0.3 });
      gsap.to(cursorFollower, { scale: 1.2, duration: 0.3 });
    };

    const handleMouseLeave = () => {
      gsap.to(cursor, { scale: 1, duration: 0.3 });
      gsap.to(cursorFollower, { scale: 1, duration: 0.3 });
    };

    // Add event listeners
    window.addEventListener("mousemove", updateCursor);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll("a, button, [data-cursor-hover]");

    interactiveElements.forEach((element) => {
      element.addEventListener("mouseenter", () => {
        gsap.to(cursor, {
          scale: 1.8,
          backgroundColor: "#1ABC9C",
          duration: 0.3,
        });
        gsap.to(cursorFollower, {
          scale: 0.8,
          backgroundColor: "rgba(26, 188, 156, 0.2)",
          borderColor: "#1ABC9C",
          duration: 0.3,
        });
      });

      element.addEventListener("mouseleave", () => {
        gsap.to(cursor, {
          scale: 1,
          backgroundColor: "#1ABC9C",
          duration: 0.3,
        });
        gsap.to(cursorFollower, {
          scale: 1,
          backgroundColor: "rgba(26, 188, 156, 0.1)",
          borderColor: "rgba(26, 188, 156, 0.3)",
          duration: 0.3,
        });
      });
    });

    animateCursor();

    return () => {
      window.removeEventListener("mousemove", updateCursor);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-2 h-2 bg-brand-teal rounded-full pointer-events-none z-[9999] shadow-lg"
        style={{ transform: "translate(-50%, -50%)" }}
      />

      {/* Follower cursor */}
      <div
        ref={cursorFollowerRef}
        className="fixed top-0 left-0 w-10 h-10 border border-brand-teal/30 rounded-full pointer-events-none z-[9998] bg-brand-teal/10 backdrop-blur-sm"
        style={{ transform: "translate(-50%, -50%)" }}
      />
    </>
  );
};

export default CustomCursor;
