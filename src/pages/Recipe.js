import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { getRecipe } from "../api/recipes";

const Recipe = () => {
  const { recipeId } = useParams();

  const {
    data: recipe,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["recipe", recipeId],
    queryFn: () => getRecipe(recipeId),
  });
  if (!recipe) return <div>Not found!</div>;
  const { title, user, ingredient, body } = recipe;

  console.log(recipe.image);

  return (
    <div className="bg-orange-900 min-h-screen flex items-center justify-center font-sans">
      <div className="max-w-md w-full px-6 py-8 bg-orange-800 rounded-md shadow-md">
        <div className="flex items-center mb-4">
          <img
            src={recipe?.image}
            alt="recipe"
            className="w-10 h-10 rounded-full mr-2"
          />
          <h2 className="text-2xl text-white font-semibold">{recipe.name}</h2>
        </div>
        <h3 className="text-xl text-white font-semibold mb-4">{title}</h3>
        <div className="mb-4">
          <h4 className="text-lg text-white font-medium mb-2">Ingredients:</h4>
          <ul className="list-disc list-inside text-white">
            {ingredient?.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-lg text-white font-medium mb-2">Body:</h4>
          <p className="text-white">{recipe.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
