import { useEffect, useState } from "react";

function HomeHero() {
  const slides = [
    {
      image: "media/images/slide2.jpg",
      title: "To travel is to live",
      description: "We help you save for meaningful travel experiences",
    },
    {
      image: "media/images/slide1.jpg",
      title: (<>
      Buying your first car? <br /> 
      We will help you buy your first car
      </>),
      description: "Discover beautiful places and create unforgettable memories",
    },
    {
      image: "media/images/slide3.jpg",
      title: "Make every journey count",
      description: "Plan your next adventure with us",
    },
    {
      image: "media/images/slide4.jpg",
      title: "Travel more",
      description: "Save today for the experiences you dream about",
    },
    {
      image: "media/images/slide5.jpg",
      title: "Your next adventure",
      description: "Start planning your perfect trip",
    },
    {
      image: "media/images/landing.svg",
      title: "Live. Travel. Explore.",
      description: "Because the best memories are made while travelling",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatic sliding
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="container">
      <div className="row">
        
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "500px",
        overflow: "hidden",
      }}
    >
      {/* Background image */}
      <img
        src={slides[currentSlide].image}
        alt=""
        style={{
           width: "110%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />

      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.25)",
        }}
      ></div>

      {/* Text */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "9%",
          color: "white",
          maxWidth: "500px",
        }}
      >
        <h1
          style={{
            fontSize: "52px",
            fontWeight: "700",
            marginBottom: "15px",
          }}
        >
          {slides[currentSlide].title}
        </h1>

        <p
          style={{
            fontSize: "30px",
            lineHeight: "1.1",
            fontWeight: "500",
            marginBottom: "45px",
          }}
        >
          {slides[currentSlide].description}
        </p>

        <button
          style={{
            backgroundColor: "#ffbd38",
            border: "none",
            padding: "15px 20px",
            borderRadius: "6px",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          READ MORE
        </button>
      </div>

      {/* Dots */}
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "8px",
        }}
      >
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            style={{
              width: "15px",
              height: "15px",
              borderRadius: "50%",
              border: "1px solid white",
              backgroundColor:
                currentSlide === index ? "white" : "transparent",
              cursor: "pointer",
              padding: 0,
            }}
          ></button>
        ))}
      </div>
    </div>
    </div>
    </div>
  );
}

export default HomeHero;