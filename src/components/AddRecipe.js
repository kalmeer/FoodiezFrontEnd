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

  const { mutate: addRecipe } = useMutation({
    mutationFn: (recipeData) => createRecipe(recipeData),
    onSuccess: () => {
      queryClient.invalidateQueries(["recipes"]);
      onClose();
    },
  });

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
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
      instructions: instructions, // Update with your logic
      image: "", // Update with your logic
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
    <div className="fixed inset-0 bg-orange-900 bg-opacity-75 flex items-center justify-center z-10 recipe-container">
      <div className="bg-orange-500 rounded-md shadow-md w-full max-w-md p-6 overflow-scroll max-h-[70%]">
        <h2 className="text-3xl text-white font-semibold mb-6">Add Recipe</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-white text-sm font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={title}
              onChange={handleTitleChange}
              className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="ingredients"
              className="block text-white text-sm font-medium mb-2"
            >
              Ingredients
            </label>
            {ingredients.map((ingredient, index) => (
              <div key={index} className="flex items-center mb-2">
                <input
                  type="text"
                  value={ingredient}
                  onChange={(e) => handleIngredientChange(e, index)}
                  className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
                <AddIngredient />
                <button
                  type="button"
                  onClick={() => handleRemoveIngredient(index)}
                  className="ml-2 px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddIngredient}
              className="px-2 py-1 bg-orange-800 text-white rounded-md hover:bg-orange-600 transition-colors"
            >
              Add Ingredient
            </button>
          </div>
          <div className="mb-6">
            <label
              htmlFor="body1"
              className="block text-white text-sm font-medium mb-2"
            >
              Body
            </label>
            <input onChange={handleBodyChange1}></input>
          </div>
          <div className="mb-6">
            <label
              htmlFor="body"
              className="block text-white text-sm font-medium mb-2"
            >
              Body
            </label>
            <textarea
              id="body"
              value={body}
              onChange={handleBodyChange}
              className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              rows={4}
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-4 py-2 bg-orange-800 text-white rounded-md hover:bg-orange-600 transition-colors"
            >
              Save
            </button>
            <button
              type="button"
              onClick={onClose}
              className="ml-2 px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-800 transition-colors"
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
