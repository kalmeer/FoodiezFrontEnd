import React, { useState } from "react";

const AddIngredient = () => {
  const [category, setCategory] = useState("");
  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  return (
    <div>
      <select value={category} onChange={handleChange} className="category">
        <option value="">Select a category</option>
        <option value="category1">Category 1</option>
        <option value="category2">Category 2</option>
        <option value="category3">Category 3</option>
      </select>
    </div>
  );
};

export default AddIngredient;
