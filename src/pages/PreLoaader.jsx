import { useRef } from "react";
import video from "../assets/newVideo2.mp4";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/images/2.avif";
import img2 from "../assets/images/3.avif";
import img3 from "../assets/images/4.avif";
import img4 from "../assets/images/5.avif";
import img5 from "../assets/images/6.avif";
import img6 from "../assets/images/7.avif";
import img7 from "../assets/images/8.avif";
import img8 from "../assets/images/9.avif";
const PreLoaader = () => {
  const navigate = useNavigate();

  const handleEnter = () => {
    navigate("/home");
  };
  const preLoaderRef = useRef(null);

  const headingRef = useRef(null);
  const buttonRef = useRef(null);
  const headingText = "LuxeLane";

  const letters = headingText.split("").map((char, i) => (
    <span key={i} className="inline-block">
      {char === " " ? "\u00A0" : char}
    </span>
  ));
  useGSAP(() => {
    const headingLetters = headingRef.current.querySelectorAll("span");

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(
      headingLetters,
      {
        y: -50,
        opacity: 0,
        duration: 0.5,
        stagger: 0.05,
      },
      "0"
    )
      .from(buttonRef.current, {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        ease: "back.out(1.7)",
      })
      .from(
        ".grid img",
        {
          opacity: 0,
          scale: 0.5,
          stagger: 0.1,
          duration: 0.6,
        },
        "-=0.3"
      );
  });

  return (
    <div
      ref={preLoaderRef}
      className=" relative bg-black h-screen w-screen overflow-hidden"
    >
      <video
        className=" absolute h-full w-full object-cover"
        src={video}
        autoPlay
        loop
        muted
      ></video>
      <h1
        id="luxelane-title"
        ref={headingRef}
        className=" font-[font1] absolute -bottom-10 text-white text-[15vw] left-[5vw] z-10 uppercase"
      >
        {letters}
      </h1>

      <div className="h-[50vh] w-[20vw] p-4 ">
        <img
          src={img1}
          alt="1"
          className="rotate-infinite w-[7vw] h-[7vw] md:w-[7vw] md:h-[7vw] sm:w-[10vw] sm:h-[10vw] object-cover rounded-full border-4 border-white"
        />
        <img
          src={img2}
          alt="2"
          className="rotate-infinite w-[7vw] h-[7vw] md:w-[7vw] md:h-[7vw] sm:w-[10vw] sm:h-[10vw] object-cover rounded-full border-4 border-white"
        />
        <img
          src={img3}
          alt="3"
          className="rotate-infinite w-[7vw] h-[7vw] md:w-[7vw] md:h-[7vw] sm:w-[10vw] sm:h-[10vw] object-cover rounded-full border-4 border-white"
        />
        <img
          src={img4}
          alt="4"
          className="rotate-infinite w-[7vw] h-[7vw] md:w-[7vw] md:h-[7vw] sm:w-[10vw] sm:h-[10vw] object-cover rounded-full border-4 border-white"
        />
      </div>
      <div className="absolute  top-0 -right-[6vw] h-[50vh] w-[20vw] p-4 ">
        <img
          src={img8}
          alt="1"
          className="rotate-infinite w-[7vw] h-[7vw] md:w-[7vw] md:h-[7vw] sm:w-[10vw] sm:h-[10vw] object-cover rounded-full border-4 border-white"
        />
        <img
          src={img7}
          alt="2"
          className="rotate-infinite w-[7vw] h-[7vw] md:w-[7vw] md:h-[7vw] sm:w-[10vw] sm:h-[10vw] object-cover rounded-full border-4 border-white"
        />
        <img
          src={img6}
          alt="3"
          className="rotate-infinite w-[7vw] h-[7vw] md:w-[7vw] md:h-[7vw] sm:w-[10vw] sm:h-[10vw] object-cover rounded-full border-4 border-white"
        />
        <img
          src={img5}
          alt="4"
          className="rotate-infinite w-[7vw] h-[7vw] md:w-[7vw] md:h-[7vw] sm:w-[10vw] sm:h-[10vw] object-cover rounded-full border-4 border-white"
        />
      </div>
      <div
        ref={buttonRef}
        className="absolute right-[43%] bottom-[45%] h-[10vw] w-[20vw] bg-cover bg-center rounded-lg  flex justify-center items-center"
      ></div>
      <div
        ref={buttonRef}
        className="absolute right-[43%] bottom-[45%] h-[10vw] w-[20vw] bg-cover bg-center rounded-lg  flex justify-center items-center"
      >
        <button
          className=" enter-button px-6 py-3 text-white border-2 border-white font-bold uppercase 
   h-full w-full font-[font1]"
          onClick={handleEnter}
        >
          shop now
        </button>
      </div>
    </div>
  );
};

export default PreLoaader;
