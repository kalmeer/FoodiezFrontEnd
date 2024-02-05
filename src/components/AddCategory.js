import React, { useState } from "react";

const AddIngredient = () => {
  const [flag, setFlag] = useState(false);

  const handleChange = (event) => {
    if (event.target.value === "other") setFlag(true);
  };

  return (
    <div className="category bg-orange-200 text-orange-800">
      {!flag ? (
        <select onChange={handleChange} className="">
          <option value=" ">Select Category</option>
          <option value="category1">Category 1</option>
          <option value="category2">Category 2</option>
          <option value="category3">Category 3</option>
          <option value="other">Other</option>
        </select>
      ) : (
        <input
          type="text"
          className=" px-1 category text-orange-800 placeholder-orange-300 bg-orange-100"
          placeholder="Type Ingredient"
          required
        />
      )}
    </div>
  );
};

export default AddIngredient;
