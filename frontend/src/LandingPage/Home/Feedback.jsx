import { useEffect, useState } from "react";

function Feedback() {
  const reviews = [
    {
      title: "Delightful Service & Personalized Financial Guidance",
      text: "I am extremely pleased with the service provided. It was refreshing to work with a financial adviser who genuinely took the time to understand my needs, circumstances, and preferences. Their knowledge, thoughtful approach, and attention to detail helped create a financial plan that truly suited my goals. Their professionalism, integrity, and caring attitude earned my complete trust and respect. I would gladly recommend their services to anyone seeking reliable and personalized financial advice.",      
      name: "Medha Shekhar",
    },
    {
      title: "Exceptional Service & Trusted Advice",
      text:"The guidance I received was exceptional. They took the time to understand my family's financial and protection needs and provided thoughtful advice tailored to our goals. Their professionalism, transparency, and commitment gave us complete confidence in planning for both today and the future.",      
      name: "Vijay Singh",
    },
    {
      title: "Great Work & Reliable Service",
      text: "A highly professional and reliable team. Their expertise, dedication, and personalized approach made the entire experience smooth and reassuring. I would gladly recommend their services to anyone looking for trustworthy financial guidance.",     
      name: "Aditya Singh",
    },
    {
      title: "Great Work & Trusted Guidance",
      text: "They provided excellent support in understanding all of my family's protection and financial needs. Their advice was clear, practical, and thoughtfully tailored to our present requirements as well as our future goals. From beginning to end, the team was professional, reliable, and genuinely committed to helping us make informed financial decisions.",      
      name: "Manoj Joshi",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatic slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    }, 6000);

    return () => clearInterval(interval);
  }, [reviews.length]);

  // Previous
  const previousSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  // Next
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <style>
        {`
          .btn-feedback {
          transition: transform 0.3s ease;
          cursor: pointer;
          }

        .btn-feedback:hover {
        transform: scale(1.05);}
        `}
      </style>

      <div
        style={{
          minHeight: "600px",
          backgroundColor: "#182129",
          color: "white",
          padding: "70px 8%",
          textAlign: "center",
        }}
      >
        {/* Heading */}
        <h1
          style={{
            fontSize: "45px",
            fontWeight: "400",
            marginBottom: "10px",
          }}
        >
          What they say about us
        </h1>

        <h5
          style={{
            fontSize: "20px",
            marginBottom: "65px",
          }}
        >
          Write us a review, your comment is a key of our success.
        </h5>

        {/* Review area */}
        <div
          style={{
            position: "relative",
            maxWidth: "1200px",
            margin: "auto",
            minHeight: "330px",
          }}
        >
          {/* LEFT ARROW */}
          <button
            onClick={previousSlide}
            style={{
              position: "absolute",
              left: "-60px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "none",
              border: "none",
              color: "white",
              fontSize: "70px",
              fontWeight: "200",
              cursor: "pointer",
              zIndex: 2,
            }}
          >
            ‹
          </button>

          {/* RIGHT ARROW */}
          <button
            onClick={nextSlide}
            style={{
              position: "absolute",
              right: "-60px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "none",
              border: "none",
              color: "white",
              fontSize: "70px",
              fontWeight: "200",
              cursor: "pointer",
              zIndex: 2,
            }}
          >
            ›
          </button>

          {/* REVIEW */}
          <div
            key={currentSlide}
            style={{
              transition: "opacity 0.5s ease",
            }}
          >
            <h2
              style={{
                textAlign: "left",
                fontSize: "30px",
                marginBottom: "20px",
              }}
            >
              {reviews[currentSlide].title}
            </h2>

            <p
              style={{
                textAlign: "left",
                fontSize: "20px",
                lineHeight: "1.45",
                fontStyle: "italic",
                fontWeight: "500",
                marginBottom: "35px",
              }}
            >
              {reviews[currentSlide].text}
            </p>

            {/* Line */}
            <hr
              style={{
                border: "none",
                borderTop: "1px solid white",
                marginBottom: "15px",
              }}
            />

            {/* Name */}
            <p
              style={{
                textAlign: "left",
                fontSize: "20px",
                fontWeight: "600",
                fontStyle: "italic",
              }}
            >
              {reviews[currentSlide].name}
            </p>
          </div>
        </div>

        {/* BUTTON */}
        <button
          className="btn-feedback"
          style={{
            backgroundColor: "#ffbd17",
            border: "none",
            borderRadius: "6px",
            padding: "15px 35px",
            fontSize: "18px",
            marginTop: "20px",
          }}
          onClick={() => {
            window.location.href = "#";
          }}
        >
          Post/Read feedback
        </button>
      </div>
    </>
  );
}

export default Feedback;
