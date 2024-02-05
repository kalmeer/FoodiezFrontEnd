// AddRecipe.js

import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { createRecipe } from "../api/recipes";
import AddIngredient from "./AddIngredient";
import UserContext from "../context/UserContext";

const AddRecipe = ({ show, onClose, onSave }) => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [body, setBody] = useState("");
  const [instructions, setinstructions] = useState("");
  const queryClient = useQueryClient();
  const [category, setCategory] = useState(true);
  const [image, setImage] = useState(null);
  const [user, setUser] = useContext(UserContext);

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
    setBody("");
    setIngredients([]);
    setImage(null);
    setinstructions("");
  };

  if (!show) {
    return null;
  }
  return (
    <div className="  flex items-center justify-center  h-[70%]">
      {/* form*/}
      <form
        onSubmit={handleFormSubmit}
        className=" flex justify-center bg-orange-500 items-center rounded-md  shadow-md  p-6 overflow-scroll w-[90%] h-[100%] "
      >
        <div className=" grid grid-cols-10 gap-4 bg-orange-400 w-[100%] h-[100%]">
          <div className=" flex flex-col col-span-3 bg-orange-500 items-center justify-around h-full ">
            <input
              type="text"
              id="name"
              value={title}
              onChange={handleTitleChange}
              className=" border-none bg-orange-100 flex placeholder-orange-300 w-[90%] h-[17%] text-2xl  rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Recipe Title"
              required
            />
            <br />
            <div className="bg-orange-800  w-[80%] h-[10%]">
              <label
                className="flex justify-center items-center rounded-lg font-medium bg-orange-400 text-orange-900 "
                for="file_input"
              >
                Upload Image
              </label>
              <input
                type="file"
                className=" hidden rounded-sm	"
                onChange={handleImageChange}
                name="image"
                placeholder="image"
                id="file-input"
              />
            </div>
            <br />
            <textarea
              id="body"
              value={body}
              onChange={handleBodyChange}
              className=" w-[80%]  bg-orange-200 placeholder-orange-300 text-orange-800 placeholder:italic  px-4 py-2 border-b border-orange-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              rows={5}
              required
              placeholder="Type Description"
            />
          </div>

          <div className="col-span-2 flex flex-col justify-between">
            <header className=" h-[10%] text-2xl text-orange-100 font-bold space-x-2 ">
              Ingredients
            </header>
            <div className=" h-[90%] flex bg-orange-100 flex-col  justify-between ">
              <div className="flex-col justify-between text-orange-700 ">
                <div className="flex flex-row">
                  <AddIngredient /> {"*"}
                </div>
                <div className="flex flex-row">
                  <AddIngredient /> {"*"}
                </div>
                <div className="flex flex-row">
                  <AddIngredient /> {"*"}
                </div>

                {ingredients.map((index) => (
                  <div
                    key={index}
                    className="flex items-center  text-orange-700 "
                  >
                    <AddIngredient categoryStatus={categoryStatus} />
                    <button
                      type="button"
                      onClick={() => handleRemoveIngredient(index)}
                      className=" bg-red-600 text-orange-100 rounded-md hover:bg-red-700 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                        />
                      </svg>
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
          </div>
          <div className=" col-span-5 flex flex-col justify-between ">
            <header className="text-2xl text-orange-100 font-bold mb-2 border-orange-200">
              Instructions
            </header>

            <textarea
              type="text"
              id="instructions"
              rows={10}
              value={instructions}
              onChange={handleBodyChange1}
              className=" flex-col text-start px-4 py-2 text-orange-800  placeholder:italic border-none bg-orange-100 placeholder-orange-300 border-orange-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Type Instructions"
              required
            />
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
        </div>
      </form>
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
