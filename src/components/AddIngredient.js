import React, { useState } from "react";

const AddIngredient = () => {
  const [flag, setFlag] = useState(false);

  const handleChange = (event) => {
    if (event.target.value === "other") setFlag(true);
  };

  return (
    <div className="category">
      {!flag ? (
        <select onChange={handleChange}>
          <option value=" ">Select Ingredient</option>
          <option value="category1">Category 1</option>
          <option value="category2">Category 2</option>
          <option value="category3">Category 3</option>
          <option value="other">Other</option>
        </select>
      ) : (
        <input
          type="text"
          className=" px-4 py-2 border border-orange-700 text-orange-500 rounded-md "
          placeholder="Type Ingredient"
          required
        />
      )}
    </div>
  );
};

export default AddIngredient;
