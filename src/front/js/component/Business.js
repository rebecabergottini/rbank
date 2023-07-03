import React from "react";
import GetStarted from "./GetStarted.js";
import Button from "react-bootstrap/Button";

const Business = () => {
  return (
    <div className="d-flex flex-row p-6">
      <div className="flex-1 d-flex flex-column ml-3">
        <div>
          <h1
            style={{
              fontFamily: "Poppins",
              fontSize: "48px",
              fontWeight: 600,
              lineHeight: "77px",
              letterSpacing: "0.01em",
              textAlign: "left",
              width: "622px",
              height: "154px",
              top: "1113px",
              left: "135px",
            }}
          >
            You do the business, we’ll handle the money.
          </h1>
          <p
            style={{
              fontFamily: "Poppins",
              fontSize: "18px",
              fontWeight: 400,
              lineHeight: "31px",
              letterSpacing: "0.01em",
              textAlign: "left",
              width: "570px",
              height: "93px",
              top: "1291px",
              left: "135px",
            }}
          >
            With the right credit card, you can improve your financial life by
            building credit, earning rewards, and saving money. But with
            hundreds of credit cards on the market.
          </p>
        </div>
        <div className="mt-4 d-none d-md-block">
          <Button
            style={{
              background:
                "linear-gradient(135deg, rgba(51, 187, 207, 1), rgba(51, 187, 207, 1))",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "5px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Get Started
          </Button>
        </div>
      </div>
      <div className="flex-1 d-flex flex-column ml-3">
        <div className="d-flex flex-column justify-content-end">
          <h4
            className=" font-semibold text-white"
            style={{
              fontFamily: "Poppins",
              fontSize: "18px",
              fontWeight: 600,
              letterSpacing: "0.01em",
              width: "81px",
              height: "23px",
              top: "1143px",
              left: "939px",
            }}
          >
            Rewards
          </h4>
          <p
            className="font-poppins font-normal text-dimWhite text-16 leading-[24px]"
            style={{
              fontFamily: "Poppins",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "24px",
              letterSpacing: "0em",
              textAlign: "right",
              width: "366px",
              height: "48px",
              top: "1174px",
              left: "939px",
            }}
          >
            The best credit cards offer some tantalizing combinations of
            promotions and prizes.
          </p>
        </div>
        <div style={{ textAlign: "right" }}>
          <h4
            className=" font-semibold text-white"
            style={{
              fontFamily: "Poppins",
              fontSize: "18px",
              fontWeight: 600,
              letterSpacing: "0.01em",
              width: "127px",
              height: "23px",
              top: "1143px",
              left: "939px",
            }}
          >
            100% Secured
          </h4>
          <p
            className="font-poppins font-normal text-dimWhite text-16 leading-[24px]"
            style={{
              fontFamily: "Poppins",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "24px",
              letterSpacing: "0em",
              textAlign: "right",
              width: "366px",
              height: "48px",
              top: "1174px",
              left: "939px",
            }}
          >
            We take proactive steps to make sure your information and
            transactions are secure.
          </p>
        </div>
        <div style={{ textAlign: "right" }}>
          <h4
            className="font-poppins font-semibold text-white text-18 leading-[23.4px] mb-1"
            style={{
              fontFamily: "Poppins",
              fontSize: "18px",
              fontWeight: 600,
              lineHeight: "23px",
              letterSpacing: "0.01em",
              textAlign: "right",
              width: "159px",
              height: "23px",
              top: "1143px",
              left: "939px",
            }}
          >
            Balance Transfer
          </h4>
          <p
            className="font-poppins font-normal text-dimWhite text-16 leading-[24px]"
            style={{
              fontFamily: "Poppins",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "24px",
              letterSpacing: "0em",
              textAlign: "right",
              width: "366px",
              height: "48px",
              top: "1174px",
              left: "939px",
            }}
          >
            A balance transfer credit card can save you a lot of money in
            interest charges.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Business;
