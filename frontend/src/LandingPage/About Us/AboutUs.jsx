function AboutUs() {
  return (
    <>
      <style>
        {`
          .about-page {
            font-family: sans-serif;
            color: #222;
          }

          .about-hero-placeholder {
            width: 100%;
            height: 220px;
            background-color: #458ff0; 
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 32px;
            font-weight: bold;
          }

          .about-content {
            width: 90%;
            max-width: 1500px;
            margin: 0 auto;
            padding: 50px 0;
            line-height: 1.8;
          }

          .about-content p {
            margin-bottom: 20px;
            font-size: 16px;
            text-align: justify;
          }

          .services-heading {
            color: #458ff0; 
            font-size: 24px;
            font-weight: 500;
            margin-top: 60px;
            margin-bottom: 10px;
          }

          .services-subtext {
            font-size: 15px;
            margin-bottom: 40px !important;
          }

          .services-grid {
            display: flex;
            flex-wrap: wrap;
            gap: 25px;
            justify-content: center; 
          }

          .service-card {
            position: relative;
            width: calc(33.333% - 25px);
            min-width: 300px; 
            height: 200px;
            border-radius: 4px;
            overflow: hidden;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
          }

          .service-img-placeholder {
            width: 100%;
            height: 100%;
            background-color: #e8e8e8; 
          }

          .service-card h3 {
            position: absolute;
            bottom: 20px;
            left: 0;
            width: 100%;
            text-align: center;
            color: white;
            font-size: 20px;
            font-weight: 500;
            text-shadow: 1px 1px 4px rgba(0,0,0,0.8); 
            margin: 0;
            z-index: 2;
          }
        `}
      </style>

      <div className="about-page">
        <div className="about-hero-placeholder">
          <h1>About Us</h1>
        </div>

        <div className="about-content">
          <p>Founded by Mr. Gaurav Mehrotra - an expert in the field of Financial Services for the last 21 years, Lakshya Sparsh was created in 2017. The last 21 years have been a wonderful & satisfying journey of helping clients in meeting their Short Term & Long Term Goals through Financial Planning. In the years goneby, the effort has always been to Learn as much as possible through various Training programs facilitated by the leading mutual funds.</p>
          
          <p>Recently he got the opportunity to attend a "Transformational Leadership" program at IIM Ahmedabad on conducted over 3 days. In May 2018, he was awarded <strong>"Financial Advisor of The Year Award"</strong> in the IFA category instituted by the CNBC TV 18. We have a very dedicated and sincere team of 5 executives operating out of our newly setup Office at Budha Marg, Patna for support & services.</p>
          
          <p>At <strong>Lakshya Sparsh</strong> we adopt a structured and disciplined advisory approach and provide you portfolio solutions which meet your desired financial goals and milestones.</p>
          
          <p>At <strong>Lakshya Sparsh</strong>, we offer you a complete range of solutions that complement our advisory services. The range includes a combination of best of breed proprietary and non proprietary (third party) products. The approach is to recommend you product solutions within your overall asset allocation in an unbiased manner after evaluating all the options available in the market.</p>
          
          <p>Work with us to develop a wealth creation and protection plan that provides you with the best chance to reach your financial goals according to your specific needs and comfort levels. Our estate planning, insurance, and wealth management expertise will put you in the best position to succeed while allowing you to maximize your time devoted to focusing on the pursuits that are most important to you.</p>

          <h2 className="services-heading">We offer following specific solutions to our clients:</h2>
          <p className="services-subtext">Below are the service offered by us to help you in investing for your various stages of your life so that you can live your life freely</p>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-img-placeholder"></div>
              <h3>Financial Planning</h3>
            </div>
            <div className="service-card">
              <div className="service-img-placeholder"></div>
              <h3>Mutual Fund</h3>
            </div>
            <div className="service-card">
              <div className="service-img-placeholder"></div>
              <h3>Tax Planning</h3>
            </div>
            <div className="service-card">
              <div className="service-img-placeholder"></div>
              <h3>Life Insurance</h3>
            </div>
            <div className="service-card">
              <div className="service-img-placeholder"></div>
              <h3>General Insurance</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;