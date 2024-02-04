// AddRecipe.js

import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { createRecipe } from "../api/recipes";
import AddIngredient from "./AddIngredient";

const AddRecipe = ({ show, onClose, onSave }) => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [body, setBody] = useState("");
  const [instructions, setinstructions] = useState("");
  const queryClient = useQueryClient();
  const [category, setCategory] = useState(true);
  const [image, setImage] = useState(null);

  const categoryStatus = (value) => {
    if (value === false) {
      setCategory(false);
    }
  };

  const { mutate: addRecipe } = useMutation({
    mutationFn: (recipeData) => createRecipe(recipeData),
    onSuccess: () => {
      queryClient.invalidateQueries(["recipes"]);
      onClose();
    },
  });

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    console.log(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };

  const handleBodyChange1 = (e) => {
    setinstructions(e.target.value);
  };
  const handleAddIngredient = () => {
    setIngredients([...ingredients, ""]);
    if (category === false) setCategory(true);
  };

  const handleRemoveIngredient = (index) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients.splice(index, 1);
    setIngredients(updatedIngredients);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addRecipe({
      name: title,
      description: body,
      instructions: instructions, //
      image: "", //
    });
    setTitle("");
    setIngredients([]);
    setBody("");
    setinstructions("");
  };

  if (!show) {
    return null;
  }
  return (
    <div className="fixed inset-0 bg-orange-900 bg-opacity-50 flex items-center justify-center  ">
      <div className="bg-orange-500  rounded-md shadow-md  p-6 overflow-scroll max-h-[100%] recipe-container">
        {/* form*/}
        <form onSubmit={handleFormSubmit} className="flex">
          <div className="grid divide-orange-400 grid-cols-3 divide-x-2">
            <div className="mb-4">
              <input
                type="text"
                id="name"
                value={title}
                onChange={handleTitleChange}
                className=" px-4 py-2 border-none bg-orange-100 placeholder-orange-300 text-2xl  rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="Recipe Title"
                required
              />
              <br />
              <label
                for="file-input"
                className=" bg-orange-300 font-semibold  text-orange-600 w-[50%] hover:bg-orange-400 hover:text-orange-700 px-10 py-10 text-2xl"
              >
                Upload Image
              </label>
              <input
                type="file"
                onChange={handleImageChange}
                name="image"
                placeholder="image"
                id="file-input"
              />
              <br />
              <textarea
                id="body"
                value={body}
                onChange={handleBodyChange}
                className=" bg-orange-100 placeholder-orange-300 text-orange-800 placeholder:italic w-[98%] px-4 py-2 border-b border-orange-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                rows={5}
                required
                placeholder="Type Description"
              />
            </div>
            <div className=" col-span-1 ">
              <header className="text-2xl text-orange-100 font-bold mb-2 border-orange-200">
                Instructions
              </header>
              <input
                type="text"
                id="instructions"
                value={instructions}
                onChange={handleBodyChange1}
                className=" flex-col text-start px-4 py-2 text-orange-800  placeholder:italic border-none bg-orange-100 placeholder-orange-300 border-orange-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Type Instructions"
                required
              />
            </div>

            <div className="mb-4 space-y-2">
              <header className="text-2xl text-orange-100 font-bold mb-2 ">
                Ingredients
              </header>

              <AddIngredient />
              <AddIngredient />
              <AddIngredient />

              {ingredients.map((index) => (
                <div
                  key={index}
                  className="flex items-center mb-2 text-orange-700"
                >
                  <AddIngredient categoryStatus={categoryStatus} />
                  <button
                    type="button"
                    onClick={() => handleRemoveIngredient(index)}
                    className="ml-2 px-2 py-1 bg-red-600 text-orange-100 rounded-md hover:bg-red-700 transition-colors"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={handleAddIngredient}
                className="px-2 py-1 bg-orange-800 text-orange-100 rounded-md hover:bg-orange-600 transition-colors"
              >
                Add Ingredient
              </button>
            </div>
          </div>
          <div className=" flex relative  bottom-0  ">
            <button
              type="submit"
              className="px-4 py-2 bg-orange-100 text-orange-500 rounded-md hover:bg-orange-800 hover:text-orange-100 transition-colors"
            >
              Save
            </button>
            <button
              type="button"
              onClick={onClose}
              className="ml-2 px-4 py-2 bg-red-600 text-orange-100 rounded-md hover:bg-red-700 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRecipe;

{
  /* <label
              htmlFor="name"
              className="block text-orange-100 text-sm font-medium mb-2"
            >
              Name
            </label> */
}

{
  /* <label
              htmlFor="ingredients"
              className="block text-orange-100 text-sm font-medium mb-2"
            >
              Ingredients
            </label> */
}

{
  /* <label
                htmlFor="body"
                className="block text-orange-100 text-sm font-medium mb-2"
              >
                Description
              </label> */
}

{
  /* {category ? (
                  <AddIngredient categoryStatus={categoryStatus} />
                ) : (
                  <input
                    type="text"
                    value={ingredient}
                    onChange={(e) => handleIngredientChange(e, index)}
                    className="w-full px-4 py-2 border border-orange-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Type Ingredient"
                    required
                  />
                )} */
}

// const handleIngredientChange = (e, index) => {
//   const updatedIngredients = [...ingredients];
//   updatedIngredients[index] = e.target.value;
//   setIngredients(updatedIngredients);
// };
