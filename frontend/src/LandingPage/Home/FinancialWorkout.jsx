function FinancialWorkout() {
  return (
    <div
      className="container-fluid"
      style={{
        backgroundColor: "#438fe8",
        height: "675px",
        position: "relative",
      }}
    >
      <div className="row h-100">

        {/* LEFT SIDE */}
        <div className="col-6">
          <div
            style={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              left: "10%",
              color: "white",
              width: "650px",
            }}
          >
            <h1
              style={{
                fontSize: "40px",
                fontWeight: "700",
                marginBottom: "5px",
              }}
            >
              You are physically fit today.
            </h1>

            <p
              style={{
                fontSize: "30px",
                margin: "0",
                lineHeight: "1.1",
              }}
            >
              But will you remain fit, if you don't
            </p>

            <h1
              style={{
                fontSize: "55px",
                fontWeight: "700",
                margin: "0 0 30px 0",
              }}
            >
              Workout Regularly?
            </h1>

            <button
              style={{
                backgroundColor: "#ffbd17",
                border: "none",
                padding: "15px 20px",
                borderRadius: "4px",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              Know your financial workout
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="col-6">
          <img
            src="/media/images/slide2.jpg"
            alt="Financial planning"
            style={{
              position: "absolute",
              width: "545px",
              height: "403px",
              objectFit: "cover",
              top: "50%",
              right: "9%",
              transform: "translateY(-50%)",
            }}
          />

          {/* TOP LEFT YELLOW CORNER */}
          <div
            style={{
              position: "absolute",
              top: "18%",
              right: "39%",
              width: "95px",
              height: "12px",
              backgroundColor: "#ffbd17",
            }}
          ></div>

          <div
            style={{
              position: "absolute",
              top: "18%",
              right: "45%",
              width: "12px",
              height: "95px",
              backgroundColor: "#ffbd17",
            }}
          ></div>

          {/* BOTTOM RIGHT YELLOW CORNER */}
          <div
            style={{
              position: "absolute",
              bottom: "18%",
              right: "8%",
              width: "95px",
              height: "12px",
              backgroundColor: "#ffbd17",
            }}
          ></div>

          <div
            style={{
              position: "absolute",
              bottom: "18%",
              right: "8%",
              width: "12px",
              height: "95px",
              backgroundColor: "#ffbd17",
            }}
          ></div>
        </div>

      </div>
    </div>
  );
}

export default FinancialWorkout;
