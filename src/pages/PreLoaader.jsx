import { useRef, useEffect } from "react";
import video from "../assets/newVideo2.mp4";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";

import img2 from "../assets/images/3.avif";
import img3 from "../assets/images/4.avif";
import img4 from "../assets/images/5.avif";
import img5 from "../assets/images/6.avif";
import img6 from "../assets/images/7.avif";
import img7 from "../assets/images/8.avif";

const PreLoaader = () => {
  const navigate = useNavigate();
  const handleEnter = () => navigate("/home");

  const headingRef = useRef(null);
  const buttonRef = useRef(null);

  const leftImages = [useRef(null), useRef(null), useRef(null)];
  const rightImages = [useRef(null), useRef(null), useRef(null)];

  const headingText = "LuxeLane";
  const letters = headingText.split("").map((char, i) => (
    <span key={i} className="inline-block">
      {char === " " ? "\u00A0" : char}
    </span>
  ));

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(headingRef.current.querySelectorAll("span"), {
      y: -50,
      opacity: 0,
      duration: 0.5,
      stagger: 0.05,
    })
      .from(
        leftImages.map((ref) => ref.current),
        { opacity: 0, scale: 0.5, y: 50, duration: 0.6, stagger: 0.2 },
        "-=0.2"
      )
      .from(
        rightImages.map((ref) => ref.current),
        { opacity: 0, scale: 0.5, y: -50, duration: 0.6, stagger: 0.2 },
        "-=0.5"
      )
      .from(
        buttonRef.current,
        { scale: 0, opacity: 0, duration: 0.5, ease: "back.out(1.7)" },
        "-=0.2"
      );
  }, []);

  return (
    <div className="relative bg-black h-screen w-screen overflow-hidden">
      <video
        className="absolute h-full w-full object-cover"
        src={video}
        autoPlay
        loop
        muted
      />
      <h1
        ref={headingRef}
        className="font-[font1] absolute -bottom-10 text-white text-[15vw] left-[5vw] z-10 uppercase"
      >
        {letters}
      </h1>

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

      <div
        ref={buttonRef}
        className="absolute right-[43%] bottom-[45%] h-[10vw] w-[20vw] flex justify-center items-center"
      >
        <button
          onClick={handleEnter}
          className="enter-button px-6 py-3 text-white border-2 border-white font-bold uppercase h-full w-full font-[font1]"
        >
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default PreLoaader;
