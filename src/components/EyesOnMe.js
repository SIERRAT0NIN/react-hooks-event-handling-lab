// Code EyesOnMe Component Here
import React from "react";

const EyesOnMe = () => {
  const handleClickFocus = (e) => {
    console.log("Good!");
  };
  const handleClickBlur = (e) => {
    console.log("Hey! Eyes on me!");
  };
  return (
    <button onFocus={handleClickFocus} onBlur={handleClickBlur}>
      Eyes on me
    </button>
  );
};

export default EyesOnMe;
