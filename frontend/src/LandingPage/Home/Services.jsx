function Services() {
  return (
    <div className="container mt-5 mb-5">
      
      {/* Heading */}
      <div className="text-center mb-5">
        <h3>Services We Provide</h3>
        <h6 className="mt-3">
          Our success is driven by the trust worthy financial & goal based
          services
        </h6>
      </div>

      {/* Services */}
      <div
        className="row"
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        {/* 1 */}
        <div className="col-3 mt-3">
          <a href="#">
            <i
              className="fa-solid fa-wallet"
              style={{ fontSize: "60px" }}
            ></i>

          <h6 className="mt-4">Financial Services</h6>
          </a>

          <p>
            We offer several services to cater
            <br />
            to the needs of different types of
            <br />
            investors
          </p>
        </div>

        {/* 2 */}
        <div className="col-3 mt-3">
          <a href="#">
            <i
              className="fa-solid fa-bullseye"
              style={{ fontSize: "60px" }}
            ></i>
          

          <h6 className="mt-4">Goal Based Investment</h6>
          </a>

          <p>
            We help to achieve your long term
            <br />
            personal financial goals &
            <br />
            monitor your continued progress
          </p>
        </div>

        {/* 3 */}
        <div className="col-3 mt-3">
          <a href="#">
            <i
              className="fa-solid fa-file"
              style={{ fontSize: "60px" }}
            ></i>

          <h6 className="mt-4">Smart Tax Saving</h6>
          </a>

          <p>
            Invest in Equity Linked Saving
            <br />
            Schemes (ELSS) & grow your
            <br />
            money while saving your taxes.
          </p>
        </div>

        {/* 4 */}
        <div className="col-3 mt-3">
          <a href="#">
            <i
              className="fa-solid fa-house-flood-water-circle-arrow-right"
              style={{ fontSize: "60px" }}
            ></i>


          <h6 className="mt-4">Insurance Services</h6>
           </a>

          <p>
            The plan which provides extra
            <br />
            benefit of insurance cover at
            <br />
            no extra cost.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;