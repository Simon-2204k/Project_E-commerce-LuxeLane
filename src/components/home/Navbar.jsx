import logo from "../../assets/images/new.png"; // Brand logo
import { LuShoppingCart, LuHeart } from "react-icons/lu"; // Cart & Wishlist icons
import { Link } from "react-router-dom"; // For navigation
import AnimateHome from "./AnimateHome"; // Home animation component
import gsap from "gsap"; // GSAP for animations
import { useGSAP } from "@gsap/react"; // GSAP React integration
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Scroll-trigger plugin
import { useRef } from "react";

const Navbar = () => {
  // Refs for GSAP animations
  const headerRef = useRef();
  const loginRef = useRef();

  // GSAP animation hook
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate header with blur/brightness/contrast on scroll
    gsap.to(headerRef.current, {
      backdropFilter: "blur(10px)brightness(1.2) contrast(120%)",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top+=800% 80%", // Animation triggers at scroll position
        scrub: true, // Smooth animation with scrolling
      },
    });

    // Hide login section on scroll
    gsap.to(loginRef.current, {
      display: "none",
      scrollTrigger: {
        trigger: loginRef.current,
        start: "top+=800% 80%",
        scrub: true,
      },
    });
  });

  return (
    <>
      <header>
        {/* Fixed navbar container */}
        <div className="fixed z-40 top-0 h-[17vh] w-full">
          {/* Top navigation: logo + category links + cart/wishlist */}
          <div
            className="flex my-[0.5vh] items-center justify-between px-[2vw]"
            ref={headerRef}
          >
            <Link to="/home">
              <img src={logo} className="h-[15vh]" alt="luxelane" />
            </Link>

            {/* Category links + icons */}
            <div className="flex items-center space-x-[2vw]">
              <Link
                to="/electronic"
                className="h-[10vh] rounded-4xl text-center font-[font3] font-medium"
              >
                Electronics
              </Link>
              <Link
                to="/women"
                className="h-[10vh] rounded-4xl text-center font-[font3] font-medium"
              >
                Women's Clothing
              </Link>
              <Link
                to="/men"
                className="h-[10vh] rounded-4xl text-center font-[font3] font-medium"
              >
                Men's Clothing
              </Link>
              <Link
                to="/jewellary"
                className="h-[10vh] rounded-4xl text-center font-[font3] font-medium"
              >
                Jewellery
              </Link>

              {/* Wishlist icon */}
              <Link to="/wishlist">
                <div className="cursor-pointer text-[4vh] h-[10vh] w-[3vw] rounded-full text-center">
                  <LuHeart />
                </div>
              </Link>

              {/* Cart icon */}
              <Link to="/cart">
                <div className="cursor-pointer text-[4vh] h-[10vh] w-[3vw] rounded-full text-center">
                  <LuShoppingCart />
                </div>
              </Link>
            </div>
          </div>

          {/* Login link section */}
          <div
            className="flex my-[0.5vh] items-center justify-between px-[2vw]"
            ref={loginRef}
          >
            <div className="flex items-center justify-between w-screen relative -top-7">
              <Link
                to="/login"
                className="mt-1 ml-[3vw] h-[5vh] underline rounded-4xl text-center text-[1.5vw] font-[font3] font-medium"
              >
                login
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Animated home section */}
      <AnimateHome />
    </>
  );
};

export default Navbar;
