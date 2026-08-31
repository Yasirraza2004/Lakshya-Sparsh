function DebtFunds() {
  const cards = [
    {
      icon: "fa-piggy-bank",
      title: (
        <>
          Liquid
          <br />
          Funds
        </>
      ),
      link: "/liquid-funds.html",
    },
    {
      icon: "fa-sack-dollar",
      title: (
        <>
          Long term
          <br />
          debt funds
        </>
      ),
      link: "/long-term-debt-funds.html",
    },
    {
      icon: "fa-hand-holding-dollar",
      title: (
        <>
          Conservative
          <br />
          hybrid funds
        </>
      ),
      link: "/conservative-hybrid-funds.html",
    },
  ];

  return (
    <>
      <style>
        {`
          .fund-card {
            width: 214px;
            height: 218px;
            background-color: white;
            border-radius: 6px;
            text-align: center;
            padding-top: 20px;
            box-sizing: border-box;
            cursor: pointer;

            transition: transform 0.25s ease,
                        box-shadow 0.25s ease;
          }

          .fund-card:hover {
            transform: scale(1.05);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
          }
        `}
      </style>

      <div
        className="container-fluid"
        style={{
          backgroundColor: "#478fe8",
          minHeight: "470px",
          paddingTop: "25px",
          marginBottom: "35px",
        }}
      >
        <div className="row">
          <div className="col-7">
            <div style={{ margin: "30px 0 35px 190px", color: "white" }}>
              <h1 style={{ fontSize: "55px", fontWeight: "400" }}>
                Debt Funds Simplified
              </h1>
              <p style={{ fontSize: "25px", fontWeight: "300" }}>
                Avoid the choppy markets & erratic returns
              </p>
              <h5
                style={{
                  marginTop: "-13px",
                  fontSize: "27px",
                  fontWeight: "400",
                }}
              >
                Consider Debt Funds for safe returns
              </h5>
            </div>
            <div
              style={{
                display: "flex",
                marginLeft: "190px",
                gap: "38px",
              }}
            >
              {cards.map((card, index) => (
                <a
                  key={index}
                  className="fund-card"
                  href={card.link}
                  style={{
                    width: "170px",
                    height: "160px",
                    backgroundColor: "white",
                    borderRadius: "6px",
                    textAlign: "center",
                    paddingTop: "6px",
                    boxSizing: "border-box",
                    textDecoration: "none",
                    color: "black",
                    display: "block",
                    cursor: "pointer",
                  }}
                >
                  {/* Icon */}
                  <div
                    style={{
                      height: "99px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <i
                      className={`fa-solid ${card.icon}`}
                      style={{
                        fontSize: "75px",
                        color: "#2878dc",
                      }}
                    ></i>
                  </div>

                  {/* Text */}
                  <div
                    style={{
                      fontSize: "16px",
                      lineHeight: "1.35",
                    }}
                  >
                    {card.title}
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="col-5 mt-5"
          style={{
            position:"relative",
          }}>
            <img
              src="/media/images/slide2.jpg"
              alt="logo"
              style={{ width: "80%"}}
            />
            {/* TOP LEFT YELLOW CORNER */}
            <div
              style={{
                position: "absolute",
                top: "-17px",
                left:"-5px",
                width: "95px",
                height: "12px",
                backgroundColor: "white",
              }}
            ></div>

            <div
              style={{
                position: "absolute",
                top: "-6px",
                right: "99%",
                width: "11px",
                height: "95px",
                backgroundColor: "white",
              }}
            ></div>

            {/* BOTTOM RIGHT YELLOW CORNER */}
            <div
              style={{
                position: "absolute",
                bottom: "-6%",
                right: "19%",
                width: "95px",
                height: "12px",
                backgroundColor: "white",
              }}
            ></div>

            <div
              style={{
                position: "absolute",
                bottom: "-6%",
                right: "18%",
                width: "12px",
                height: "95px",
                backgroundColor: "white",
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DebtFunds;
