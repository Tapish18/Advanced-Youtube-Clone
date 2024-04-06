import React from "react";

const Button = ({ name }) => {
  return (
    <button className="bg-gray-200 border rounded-lg px-4 py-2 mx-2">
      {name}
    </button>
  );
};

export default Button;
