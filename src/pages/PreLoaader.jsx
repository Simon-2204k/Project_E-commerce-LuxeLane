import { useRef, useEffect } from "react";
import video from "../assets/newVideo2.mp4";
import gsap from "gsap"; // GSAP library for animations
import { useNavigate } from "react-router-dom"; // Navigation for "Shop Now" button

import img2 from "../assets/images/3.avif";
import img3 from "../assets/images/4.avif";
import img4 from "../assets/images/5.avif";
import img5 from "../assets/images/6.avif";
import img6 from "../assets/images/7.avif";
import img7 from "../assets/images/8.avif";

const PreLoaader = () => {
  const navigate = useNavigate();
  const handleEnter = () => navigate("/home"); // Navigate to Home page on button click

  const headingRef = useRef(null); // Ref for animated heading
  const buttonRef = useRef(null); // Ref for "Shop Now" button

  // Refs for left and right side images for GSAP animation
  const leftImages = [useRef(null), useRef(null), useRef(null)];
  const rightImages = [useRef(null), useRef(null), useRef(null)];

  // Split heading into letters for staggered animation
  const headingText = "LuxeLane";
  const letters = headingText.split("").map((char, i) => (
    <span key={i} className="inline-block">
      {char === " " ? "\u00A0" : char} {/* Preserve space characters */}
    </span>
  ));

  useEffect(() => {
    // GSAP timeline for sequential animations
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Animate heading letters
    tl.from(headingRef.current.querySelectorAll("span"), {
      y: -50, // Slide from top
      opacity: 0, // Fade in
      duration: 0.5,
      stagger: 0.05, // Stagger each letter
    })
      // Animate left images
      .from(
        leftImages.map((ref) => ref.current),
        { opacity: 0, scale: 0.5, y: 50, duration: 0.6, stagger: 0.2 },
        "-=0.2"
      )
      // Animate right images
      .from(
        rightImages.map((ref) => ref.current),
        { opacity: 0, scale: 0.5, y: -50, duration: 0.6, stagger: 0.2 },
        "-=0.5"
      )
      // Animate button pop-in
      .from(
        buttonRef.current,
        { scale: 0, opacity: 0, duration: 0.5, ease: "back.out(1.7)" },
        "-=0.2"
      );
  }, []);

  return (
    <div className="relative bg-black h-screen w-screen overflow-hidden">
      {/* Background video */}
      <video
        className="absolute h-full w-full object-cover"
        src={video}
        autoPlay
        loop
        muted
      />

      {/* Animated heading */}
      <h1
        ref={headingRef}
        className="font-[font1] absolute -bottom-10 text-white text-[15vw] left-[5vw] z-10 uppercase"
      >
        {letters}
      </h1>

      {/* Left side images */}
      <div className="h-[50vh] w-[20vw] p-4 flex flex-col gap-4">
        <img
          ref={leftImages[0]}
          src={img2}
          alt="2"
          className="rotate-infinite w-[10vw] h-[10vw] md:w-[8vw] md:h-[8vw] sm:w-[12vw] sm:h-[12vw] object-cover rounded-full border-4 border-white"
        />
        <img
          ref={leftImages[1]}
          src={img3}
          alt="3"
          className="rotate-infinite w-[10vw] h-[10vw] md:w-[8vw] md:h-[8vw] sm:w-[12vw] sm:h-[12vw] object-cover rounded-full border-4 border-white"
        />
        <img
          ref={leftImages[2]}
          src={img4}
          alt="4"
          className="rotate-infinite w-[10vw] h-[10vw] md:w-[8vw] md:h-[8vw] sm:w-[12vw] sm:h-[12vw] object-cover rounded-full border-4 border-white"
        />
      </div>

      {/* Right side images */}
      <div className="absolute top-0 -right-[6vw] h-[50vh] w-[20vw] p-4 flex flex-col gap-4">
        <img
          ref={rightImages[0]}
          src={img7}
          alt="7"
          className="rotate-infinite w-[10vw] h-[10vw] md:w-[8vw] md:h-[8vw] sm:w-[12vw] sm:h-[12vw] object-cover rounded-full border-4 border-white"
        />
        <img
          ref={rightImages[1]}
          src={img6}
          alt="6"
          className="rotate-infinite w-[10vw] h-[10vw] md:w-[8vw] md:h-[8vw] sm:w-[12vw] sm:h-[12vw] object-cover rounded-full border-4 border-white"
        />
        <img
          ref={rightImages[2]}
          src={img5}
          alt="5"
          className="rotate-infinite w-[10vw] h-[10vw] md:w-[8vw] md:h-[8vw] sm:w-[12vw] sm:h-[12vw] object-cover rounded-full border-4 border-white"
        />
      </div>

      {/* "Shop Now" button */}
      <div
        ref={buttonRef}
        className="absolute right-[43%] bottom-[45%] flex justify-center items-center"
      >
        <button
          onClick={handleEnter} // Navigate to Home page
          className="
      enter-button px-6 py-3 text-white border-2 border-white font-bold uppercase font-[font1]
      w-[20vw] h-[10vw] text-[1.5rem]          
      md:w-[20vw] md:h-[10vw] md:text-[1rem] 
      sm:w-[16vw] sm:h-[8vw] sm:text-[0.5em] sm:-mt-2
    "
        >
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default PreLoaader;
