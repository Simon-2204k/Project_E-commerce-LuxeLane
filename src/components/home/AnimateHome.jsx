import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

// Team data with name and trend highlight
const team = [
  {
    name: "Simon",
    trendHighlight: "Vintage denim revival meets sleek tailoring",
  },
  {
    name: "Vijay",
    trendHighlight: "Vintage denim revival meets sleek tailoring",
  },
  {
    name: "Abhi",
    trendHighlight: "Monochrome layers with bold statement accessories",
  },
  {
    name: "Abhishek",
    trendHighlight: "Eco-luxury fabrics blended with urban chic",
  },
  {
    name: "Aravind",
    trendHighlight: "Runway-inspired neutrals for effortless elegance",
  },
  {
    name: "Shankar",
    trendHighlight: "Oversized silhouettes with minimalist finesse",
  },
  {
    name: "Sanjay",
    trendHighlight: "Retro sneakers paired with tailored streetwear",
  },
  {
    name: "Sunil",
    trendHighlight: "Art-deco prints reimagined for modern nights",
  },
  {
    name: "Ajay",
    trendHighlight: "Lightweight linen layers for breezy sophistication",
  },
  {
    name: "Rahul",
    trendHighlight: "High-contrast textures for a bold seasonal statement",
  },
];

const AnimateHome = () => {
  const [currentSlide, setCurrentSlide] = useState(1); // Track current slide
  const marqueeRef = useRef([]); // Refs for marquee text elements
  const imagesRef = useRef([]); // Refs for images
  const teamSlides = team.length;

  // GSAP animation for slide reveal/hide
  const animationSlidesGsap = (idx, reveal) => {
    const clip = reveal
      ? "polygon(0% 100%,100% 100%,100% 0%,0% 0%)" // fully visible
      : "polygon(0% 100%,100% 100%,100% 100%,0% 100%)"; // hidden

    gsap.to(marqueeRef.current[idx], {
      clipPath: clip,
      duration: 1,
      ease: "power4.out",
      delay: 0.3,
    });
    gsap.to(imagesRef.current[idx], {
      clipPath: clip,
      duration: 1,
      ease: "power4.out",
    });
  };

  // Event listener for clicking left/right to navigate slides
  useEffect(() => {
    const onClick = (dets) => {
      const halfWayScreen = window.innerWidth / 2;
      if (dets.clientX > halfWayScreen && currentSlide < teamSlides) {
        animationSlidesGsap(currentSlide, true); // reveal next slide
        setCurrentSlide((s) => s + 1);
      } else if (dets.clientX <= halfWayScreen && currentSlide > 1) {
        animationSlidesGsap(currentSlide - 1, false); // hide previous slide
        setCurrentSlide((s) => s - 1);
      }
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [currentSlide]);

  const currentName = team[currentSlide - 1]; // Current team member

  return (
    <div className="animateHome">
      <div className="container">
        {/* Marquee text overlay */}
        <div className="overlay">
          {team.map((member, i) => (
            <div
              key={i}
              ref={(el) => (marqueeRef.current[i] = el)}
              className={`marquee-wrapper t-${i + 1}`}
            >
              <h1 className="classic">{`${member.name} `.repeat(10)}</h1>
            </div>
          ))}
        </div>

        {/* Modal with images + info */}
        <div className="modal">
          <div className="modal-images">
            {team.map((_, i) => (
              <div
                key={i}
                ref={(el) => (imagesRef.current[i] = el)}
                className="img"
                id={`t-${i + 1}`}
              >
                <img
                  src={
                    [
                      "https://plus.unsplash.com/premium_photo-1727942418440-d085b3b5f065?q=80&w=387&auto=format&fit=crop",
                      "https://images.unsplash.com/photo-1635205383144-402b892efa23?q=80&w=465&auto=format&fit=crop",
                      "https://images.unsplash.com/photo-1615087574126-f4f3d62d73cf?q=80&w=391&auto=format&fit=crop",
                      "https://images.unsplash.com/photo-1536766820879-059fec98ec0a?q=80&w=387&auto=format&fit=crop",
                      "https://images.unsplash.com/photo-1637975080219-1913dcff2110?q=80&w=387&auto=format&fit=crop",
                      "https://images.unsplash.com/photo-1649641988638-e683265dd9ca?q=80&w=464&auto=format&fit=crop",
                      "https://images.unsplash.com/photo-1606080261080-efee04387612?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                      "https://images.unsplash.com/photo-1616404661184-67bc5d4da4f5?q=80&w=387&auto=format&fit=crop",
                      "https://images.unsplash.com/photo-1697319501786-8f5dc64326ad?q=80&w=464&auto=format&fit=crop",
                      "https://images.unsplash.com/photo-1664029248229-c1f6fdb4150e?q=80&w=387&auto=format&fit=crop",
                    ][i]
                  }
                  alt={currentName.name}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimateHome;
