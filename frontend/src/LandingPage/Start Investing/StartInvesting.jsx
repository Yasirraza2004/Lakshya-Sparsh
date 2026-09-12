function StartInvesting() {
  return (
    <>
      <style>
        {`
          .investing-page {
            font-family: sans-serif;
            color: #222;
          }

          /* Hero Section */
          .investing-hero {
            width: 100%;
            background-color: #3b4b5a; /* Dark slate background from your image */
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 50px 10%;
            box-sizing: border-box;
            min-height: 300px;
          }

          .hero-text {
            color: white;
            max-width: 60%;
          }

          .hero-text h1 {
            font-size: 64px;
            font-weight: 600;
            margin: 0 0 10px 0;
            letter-spacing: 1px;
          }

          .hero-text h2 {
            font-size: 26px;
            font-weight: 400;
            margin: 0;
            line-height: 1.4;
          }

          .hero-text .highlight {
            color: #ffc107; /* Yellow text */
          }

          /* Placeholder for the signpost graphic */
          .hero-graphic-placeholder {
            width: 300px;
            height: 250px;
            background-color: rgba(255, 255, 255, 0.1);
          }

          /* Split Content Section */
          .split-section {
            width: 90%;
            max-width: 1200px;
            margin: 60px auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .split-column {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: 0 40px;
          }

          /* Placeholders for graduation cap and tool icons */
          .icon-placeholder {
            width: 100px;
            height: 100px;
            background-color: #e8e8e8;
            margin-bottom: 30px;
          }

          .split-column p {
            font-size: 18px;
            font-weight: 600;
            line-height: 1.5;
            margin-bottom: 40px;
            min-height: 60px; /* Keeps buttons aligned even if text wraps differently */
          }

          .split-btn {
            background-color: #458ff0; /* Theme blue */
            color: white;
            border: none;
            padding: 12px 25px;
            font-size: 15px;
            border-radius: 4px;
            cursor: pointer;
            transition: background 0.3s;
          }

          .split-btn:hover {
            background-color: #357ae8;
          }

          /* The vertical divider with "Or" */
          .divider {
            position: relative;
            width: 1px;
            background-color: #ddd;
            height: 250px;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .divider-text {
            background-color: white;
            padding: 10px;
            color: #555;
            font-weight: bold;
            border-radius: 50%;
            position: absolute;
          }
        `}
      </style>

      <div className="investing-page">
        {/* Hero Section */}
        <div className="investing-hero">
          <div className="hero-text">
            <h1>Mutual Funds</h1>
            <h2>are the best Investment Vehicle</h2>
            <h2 className="highlight">To reach all your Financial destination</h2>
          </div>
          <div className="hero-graphic-placeholder">
            {/* Add your signpost image here later */}
          </div>
        </div>

        {/* Main Split Section */}
        <div className="split-section">
          
          {/* Left Side */}
          <div className="split-column">
            <div className="icon-placeholder">
              {/* Add your Graduation Cap icon here */}
            </div>
            <p>If you are new to Mutual Funds<br />and wish to learn before investing</p>
            <button className="split-btn">Click here &#10140;</button>
          </div>

          {/* Center Divider */}
          <div className="divider">
            <span className="divider-text">Or</span>
          </div>

          {/* Right Side */}
          <div className="split-column">
            <div className="icon-placeholder">
              {/* Add your User Tools icon here */}
            </div>
            <p>If you are aware about Mutual Funds<br />then use our fund selector tools</p>
            <button className="split-btn">Start here &#10140;</button>
          </div>

        </div>
      </div>
    </>
  );
}

export default StartInvesting;