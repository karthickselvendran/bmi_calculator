import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import BmiCard from "./components/BmiCard";
import Header from "./components/Header";
import "./App.css";

const initialState = {
  weight: "",
  height: "",
  bmi: 0,
  bmiImg: "",
  msg: "",
};

function App() {
  const [bmiDetails, setBmiDetails] = useState(initialState);

  const addContactToList = (e) => {
    e.preventDefault();
    let tempMsg = "";
    let tempBmiImg = "";
    const { weight = 0, height = 0 } = bmiDetails;
    if (!weight.trim() || !height.trim()) {
      toast.error("All fields are required");
      return;
    }
    console.log("weight  ::  ", weight);
    console.log("height  ::  ", height);
    let bmiResult = Math.round(weight / (height / 100) ** 2).toFixed(2);
    console.log("bmiResult  ::  ", bmiResult);
    if (bmiResult < 18.5) {
      tempMsg = "You are underweight";
      tempBmiImg = require("./images/underweight.png");
    } else if (bmiResult >= 18.5 && bmiResult < 25) {
      tempMsg = "You are normal";
      tempBmiImg = require("./images/normal.png");
    } else if (bmiResult >= 25 && bmiResult < 30) {
      tempMsg = "You are overweight";
      tempBmiImg = require("./images/overweight.png");
    } else {
      tempMsg = "You are obese";
      tempBmiImg = require("./images/obese.png");
    }
    setBmiDetails((prevData) => ({
      ...prevData,
      bmi: bmiResult,
      bmiImg: tempBmiImg,
      msg: tempMsg,
    }));
    toast.success("BMI value is calculated");
  };

  const resetBmiDetails = (e) => {
    e.preventDefault();
    setBmiDetails(initialState);
  };

  console.log("bmiDetails  :: ", bmiDetails);
  return (
    <div>
      <ToastContainer autoClose={2000} />
      <Header title="BMI Calculator" />
      <div className="container">
        <p>
          A person’s Body-Mass Index, or BMI, helps them check whether they’re a
          healthy weight for their height. You can use this BMI calculator to
          check your BMI, which will help you understand if you’re underweight,
          a healthy weight, overweight or obese.
        </p>
        <div className="addContactCard">
          <BmiCard
            bmiDetails={bmiDetails}
            setBmiDetails={setBmiDetails}
            addContactToList={addContactToList}
            resetBmiDetails={resetBmiDetails}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
