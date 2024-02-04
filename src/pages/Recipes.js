import React, { useState } from "react";
import RecipeItem from "../components/RecipeItem";
import { getAllRecipes } from "../api/recipes";
import { useQuery } from "@tanstack/react-query";
import AddRecipe from "../components/AddRecipe";

const Recipes = () => {
  const {
    data: recipes,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["recipes"],
    queryFn: getAllRecipes,
  });
  const [category, setCategory] = useState("");
  const [show, setShow] = useState(false);
  const onClose = () => setShow(false);
  const onOpen = () => setShow(true);

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const recipeList = recipes?.map((recipe) => (
    <RecipeItem key={recipe._id} {...recipe} />
  ));
  return (
    <div className="p-5 min-h-screen bg-orange-100 font-sans">
      <div className=" bg-orange-100 font-sans ">
        <select value={category} onChange={handleChange} className="category">
          <option value="">Select a category</option>
          <option value="category1">Category 1</option>
          <option value="category2">Category 2</option>
          <option value="category3">Category 3</option>
        </select>
      </div>
      <br />
      {/* Add recipe button */}
      <div className="mb-5">
        <button
          onClick={onOpen}
          className="px-4 py-2 bg-orange-500 text-orange-100 rounded-md hover:bg-orange-600 transition-colors font-sans"
        >
          Add Recipe
        </button>
      </div>
      {/* Recipe list */}
      <div className="flex flex-wrap gap-3 font-sans">{recipeList}</div>

      {/* Add recipe modal */}
      <AddRecipe show={show} onClose={onClose} onSave={() => {}} />
    </div>
  );
};

export default Recipes;
