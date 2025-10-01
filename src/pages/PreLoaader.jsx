import { useRef } from "react";
import video from "../assets/video.mp4";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useNavigate } from "react-router-dom";
const PreLoaader = () => {
  const navigate = useNavigate();

  const handleEnter = () => {
    navigate("/home");
  };
  const preLoaderRef = useRef(null);

  const text0Ref = useRef(null);
  const text1Ref = useRef(null);

  const text3Ref = useRef(null);
  const text4Ref = useRef(null);
  const text5Ref = useRef(null);

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
      [
        text0Ref.current,
        text1Ref.current,

        text3Ref.current,
        text4Ref.current,
        text5Ref.current,
      ],
      {
        y: 20,

        opacity: 0,
        duration: 0.5,
        stagger: 0.3,
      },
      "0.12"
    )
      .from(
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
      });
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

      <div ref={text0Ref} className="w-1/5 absolute  top-5 right-[2%]">
        <p className=" top-text text-white text-[10px] leading-relaxed font-[font1]">
          Discover pieces that never go out of fashion. Our collection blends
          classic silhouettes with modern details, creating outfits that feel
          effortless yet refined. Each item is crafted to elevate your wardrobe
          with a sense of elegance and individuality.
        </p>
      </div>
      <div ref={text1Ref} className="w-1/5 absolute top-20 left-[1%]">
        <p className=" top-text text-white text-[10px] leading-relaxed font-[font1]">
          Style is confidence made visible. From casual chic to evening glam,
          our pieces are designed to make you feel unstoppable, no matter where
          you go. Comfort meets couture in every thread.
        </p>
      </div>

      <div ref={text3Ref} className="w-1/5 absolute top-[50%] left-[70%]">
        <p className="top-text text-white text-[10px] leading-relaxed font-[font1]">
          Shopping is more than buying — it’s finding something that speaks to
          your personality.
        </p>
      </div>
      <div ref={text4Ref} className="w-1/5 absolute top-2 left-[50%]">
        <p className="top-text text-white text-[10px] leading-relaxed font-[font1]">
          Step into sophistication with fashion that feels as good as it looks.
        </p>
      </div>
      <div ref={text5Ref} className="w-1/5 absolute top-[50%] left-[1%]">
        <p className="top-text text-white text-[10px] leading-relaxed font-[font1]">
          From effortless basics to statement pieces, discover fashion made for
          you.
        </p>
      </div>

     <div
        ref={buttonRef}
        className="absolute right-[43%] bottom-[45%] h-[10vw] w-[20vw] bg-cover bg-center rounded-lg  flex justify-center items-center"
      >
      <button
          className=" enter-button
    px-6 py-3 
    text-white 
    border-2 border-white 
    font-bold 
    uppercase 
   h-full w-full
   font-[font1]
    
  "    onClick={handleEnter}
        >
          shop now
        </button>
      </div>
    </div>
  );
};

export default PreLoaader;
