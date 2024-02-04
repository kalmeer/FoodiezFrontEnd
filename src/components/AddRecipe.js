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

  const handleIngredientChange = (e, index) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients[index] = e.target.value;
    setIngredients(updatedIngredients);
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
                className=" px-4 py-2 border-none text-2xl  rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Recipe Title"
                required
              />
              <br />
              <textarea
                id="body"
                value={body}
                onChange={handleBodyChange}
                className=" px-4 py-2 border-b border-orange-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                rows={6}
                required
                placeholder="This place is for image"
              />
              <textarea
                id="body"
                value={body}
                onChange={handleBodyChange}
                className=" px-4 py-2 border-b border-orange-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                rows={5}
                required
                placeholder="Description"
              />
            </div>
            <div>
              <header className="text-2xl text-orange-200 font-bold mb-2  border-orange-200">
                Instructions
              </header>
              <input
                type="text"
                id="instructions"
                value={instructions}
                onChange={handleBodyChange1}
                className=" flex-col text-start px-4 py-2 border-none border-orange-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Instructions"
                required
              />
            </div>

            <div className="mb-4">
              <header className="text-2xl text-orange-200 font-bold mb-2 ">
                Ingredients
              </header>
              <br />
              {ingredients.map((index) => (
                <div
                  key={index}
                  className="flex items-center mb-2 text-orange-700"
                >
                  <AddIngredient categoryStatus={categoryStatus} />
                  <button
                    type="button"
                    onClick={() => handleRemoveIngredient(index)}
                    className="ml-2 px-2 py-1 bg-orange-100 text-orange-500 rounded-md hover:bg-red-600 transition-colors"
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

            <div>
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
