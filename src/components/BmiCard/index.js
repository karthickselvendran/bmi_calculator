import React from "react";
import Button from "../Button";
import Input from "../Input";
import "./bmiCard.css";

const BmiCard = ({
  bmiDetails = {},
  setBmiDetails = {},
  addContactToList = {},
  resetBmiDetails = {},
}) => {
  const handleChange = async (e) => {
    e.preventDefault();
    const { id = "", value = "" } = e.target;
    setBmiDetails((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  return (
    <form>
      <Input
        id="weight"
        placeholder="Weight (kg)..."
        type="number"
        value={bmiDetails.weight}
        onChange={handleChange}
        autoFocus={true}
      />
      <Input
        id="height"
        placeholder="Height (cms)..."
        type="number"
        value={bmiDetails.height}
        onChange={handleChange}
      />

      <div className="controlsRow">
        <Button name={`Calculate`} onClick={(e) => addContactToList(e)} />
        <Button type="reset" name="Reset" onClick={(e) => resetBmiDetails(e)} />
      </div>
      {bmiDetails.bmi ? (
        <div>
          <br />
          <h1>BMI: {bmiDetails.bmi}</h1>
          <br />
          <h3>{bmiDetails.msg}</h3>
          <br />
          <img src={bmiDetails.bmiImg} alt="bmi" height="200" />
        </div>
      ) : null}
    </form>
  );
};
export default BmiCard;
