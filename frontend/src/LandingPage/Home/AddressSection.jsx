function AddressSection() {
    return (
      <>
        <div className="container mt-5 mb-5">
          <div className="row">
            <div className="col-4 ms-auto me-auto">
              <h4 style={{ marginLeft: "30px" }}>Useful links</h4>
              <ul style={{ listStyle: "none", lineHeight: "3" }}>
                <li>
                  <a href="#" style={{ textDecoration: "none" }}>
                    <i class="fa-solid fa-arrow-right small"></i>About us
                  </a>
                </li>

                <li>
                  <a href="#" style={{ textDecoration: "none" }}>
                    <i class="fa-solid fa-arrow-right small"></i>Taxation
                  </a>
                </li>

                <li>
                  <a href="#" style={{ textDecoration: "none" }}>
                    <i class="fa-solid fa-arrow-right small"></i>Tools &
                    Calculators
                  </a>
                </li>

                <li>
                  <a href="#" style={{ textDecoration: "none" }}>
                    <i class="fa-solid fa-arrow-right small"></i>Mutual fund
                    guide
                  </a>
                </li>

                <li>
                  <a href="#" style={{ textDecoration: "none" }}>
                    <i class="fa-solid fa-arrow-right small"></i>Download forms
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-4">
              <h3>Lakshya Sparsh</h3>
              <p className="mt-3 mb-4">
                <b>We adopt a structured & disciplined approach & <br />
                provide you portfolio solutions which meet your <br />
                desired financial goals and milestones.</b>
              </p>
              <p>
                <i class="fa-solid fa-location-dot pe-4 ms-1"></i>Flat No. 63, 6th floor, Vaibhav Apartment,
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Near Ashoka Cinema, Patna 800001, Bihar
              </p>
              <p><i class="fa-solid fa-phone pe-4 ms-1"></i>+91-926 273 7373, +91-983 507 0564</p>
              <p><i class="fa-solid fa-envelope pe-4 ms-1"></i>laksyahan@gmail.com</p>
            </div>

            <div className="col-4">
                <form>
                  <h3 className="mb-4 ms-5">Request Help</h3>
                  <div className="ms-5">
                  <input type="text" placeholder="Your name"/>
                  <br />
                  <br />
                  <input type="text" placeholder="Your mobile" />
                  <br />
                  <br />
                  <input type="text" placeholder="Your mail" />
                  <br />
                  <br />
                  <input type="text" placeholder="Your message" />
                  <br />
                    <button style={{backgroundColor:"#458FF0", color:"white", fontSize:"15px", width:"80px", marginTop:"6px"}}>Send<i class="fa-regular fa-envelope "></i></button>
                    </div>
                </form>
            </div>
          </div>
        </div>
      </>
    );
}

export default AddressSection;