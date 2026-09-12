function NriCorner() {
  return (
    <>
      <style>
        {`
          .nri-page {
            font-family: sans-serif;
            color: #222;
          }

          /* Hero Banner */
          .nri-hero-placeholder {
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

          /* Main Content Container */
          .nri-content {
            width: 90%;
            max-width: 1500px;
            margin: 0 auto;
            padding: 50px 0;
            line-height: 1.8;
          }

          .nri-content h2 {
            color: #458ff0;
            font-size: 24px;
            font-weight: 400;
            margin-top: 40px;
            margin-bottom: 15px;
          }

          .nri-content p, .nri-content li {
            font-size: 15px;
            margin-bottom: 15px;
            text-align: justify;
          }

          /* Two Column Section for Image */
          .nri-split-section {
            display: flex;
            flex-wrap: wrap;
            gap: 40px;
            align-items: flex-start;
            margin-top: 20px;
          }

          .nri-text-col {
            flex: 1;
            min-width: 300px;
          }

          .nri-img-col {
            flex: 1;
            min-width: 300px;
            height: 250px;
            background-color: #e8e8e8; /* Image placeholder */
            border-radius: 4px;
          }

          /* FAQ Section */
          .faq-list {
            margin-top: 20px;
          }

          .faq-item {
            border: 1px solid #ddd;
            margin-bottom: 10px;
            border-radius: 4px;
            overflow: hidden;
          }

          .faq-question {
            background-color: #f9f9f9;
            padding: 15px 20px;
            font-weight: bold;
            color: #333;
            margin: 0;
          }

          .faq-answer {
            padding: 15px 20px;
            border-top: 1px solid #ddd;
            background-color: white;
          }

          /* Pre-Footer Links Area */
          .pre-footer-links {
            margin-top: 60px;
            padding-top: 20px;
            border-top: 1px solid #ddd;
            display: flex;
            gap: 30px;
          }

          .pre-footer-links a {
            color: #555;
            text-decoration: none;
            font-size: 14px;
            transition: color 0.2s;
          }

          .pre-footer-links a:hover {
            color: #458ff0;
          }
        `}
      </style>

      <div className="nri-page">
        {/* Empty banner space matching the theme color */}
        <div className="nri-hero-placeholder">
          <h1>NRI Corner</h1>
        </div>

        <div className="nri-content">
          <h2>A complete guide for NRIs investing in Mutual Funds</h2>
          <p>
            <strong>"NRIs have been major participants in India's growth story."</strong><br />
            Historically, NRIs have shown a considerable bias towards real estate in India. Fact is real estate remains illiquid and the returns over long periods have not been great. Equity Mutual Funds have outperformed and have given higher returns compared to other asset classes. Past performance cannot be a guarantee of future performance, but we strongly believe that equity gives maximum returns over long periods.
          </p>

          <div className="nri-split-section">
            <div className="nri-text-col">
              <h2 style={{marginTop: 0}}>Can NRIs invest in mutual funds?</h2>
              <p>
                Yes, Non-Resident Indians (NRIs) can invest in mutual funds in India on a repatriable or non-repatriable basis. To invest on a repatriable basis, you must have an NRE account or FCNR account with a bank in India. To invest on a non-repatriable basis, you must have an NRO account. The investment amounts are debited through normal banking channels.
              </p>
            </div>
            <div className="nri-img-col">
              {/* Drop your specific image here later */}
            </div>
          </div>

          <h2>Income Tax Provisions for NRIs:</h2>
          <p>
            Under the Income Tax Act, 1961, income earned by an NRI in India is taxable. However, the tax treatment of the income varies depending on the type of income.
          </p>
          <ul>
            <li>Interest income from NRE and FCNR accounts is tax-free.</li>
            <li>Interest income from NRO accounts is taxable.</li>
            <li>Capital gains from the sale of equity mutual funds are subject to capital gains tax.</li>
          </ul>

          <h2>Applicable Deductions and Exemptions for NRIs:</h2>
          <p>
            NRIs are eligible for certain deductions under Section 80C of the Income Tax Act, up to a maximum of Rs. 1.5 lakhs. This includes investments in ELSS (Equity Linked Savings Scheme) mutual funds, life insurance premiums, and principal repayment of home loans.
          </p>

          <h2>Five Income Tax Rules To Know</h2>
          <p>
            1. TDS (Tax Deducted at Source) is applicable on capital gains from mutual funds for NRIs.<br/>
            2. Short-term capital gains (STCG) on equity funds are taxed at 15%.<br/>
            3. Long-term capital gains (LTCG) on equity funds exceeding Rs. 1 lakh are taxed at 10%.<br/>
            4. Indexation benefits apply to debt mutual funds for LTCG.<br/>
            5. Double Taxation Avoidance Agreement (DTAA) benefits can be claimed to avoid paying tax twice on the same income.
          </p>

          <h2>FAQs For NRIs</h2>
          <div className="faq-list">
            <div className="faq-item">
              <p className="faq-question">1. What are Foreign Exchange Assets and Specified Assets?</p>
              <div className="faq-answer">
                <p><strong>Ans:</strong> As per Chapter XII-A of Income Tax Act 1961, "Foreign Exchange Asset" means any specified asset which the assessee has acquired or purchased with, or subscribed to in, convertible foreign exchange.</p>
              </div>
            </div>
            <div className="faq-item">
              <p className="faq-question">2. Whether Right / Bonus Shares form part of Foreign Exchange Assets?</p>
            </div>
            <div className="faq-item">
              <p className="faq-question">3. What are the unique tax provisions available to NRIs under IT Act?</p>
            </div>
            <div className="faq-item">
              <p className="faq-question">4. What is meant by investment through direct subscription route?</p>
            </div>
            <div className="faq-item">
              <p className="faq-question">5. What is the Portfolio Investment Scheme?</p>
            </div>
          </div>

          {/* Pre-Footer Link Buttons */}
          <div className="pre-footer-links">
            <a href="#">Check mail</a>
            <a href="#">Disclaimer</a>
            <a href="#">Commission Disclosure</a>
          </div>

        </div>
      </div>
    </>
  );
}

export default NriCorner;