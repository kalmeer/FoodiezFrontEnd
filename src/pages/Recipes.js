import React, { useContext, useEffect, useState } from "react";
import RecipeItem from "../components/RecipeItem";
import { getAllRecipes } from "../api/recipes";
import { useQuery } from "@tanstack/react-query";
import AddRecipe from "../components/AddRecipe";
import UserContext from "../context/UserContext";

const Recipes = () => {
  const {
    data: recipes,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["recipes"],
    queryFn: getAllRecipes,
  });
  const [user, setUser] = useContext(UserContext);
  const [showCategories, setShowCategories] = useState(true);
  const [showAddRecipe, setShowAddRecipe] = useState(true);
  const [getCategories, setGetCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [show, setShow] = useState(false);
  const onClose = () => setShow(false);
  const onOpen = () => setShow(true);

  const handleChange = (event) => {
    setCategory(event.target.value);
    console.log(event.target.value);
  };
  useEffect(() => {
    if (recipes) {
      const ccategories = recipes.map((recipe) => recipe.category);
      setGetCategories(ccategories);
    }
  }, [recipes]);

  const recipeList = recipes?.map((recipe) => (
    <RecipeItem key={recipe._id} {...recipe} />
  ));
  return (
    <div className="p-5 min-h-screen bg-orange-100 font-sans home-container">
      <form>
        <div className="flex items-centerjustify-center w-[50%]">
          <button
            id="dropdown-button"
            data-dropdown-toggle="dropdown"
            class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-orange-400 bg-orange-500  border-orange-500 rounded-s-lg hover:bg-orange-200 focus:ring-4 focus:outline-none focus:ring-orange-500 dark:bg-orange-500 dark:hover:bg-orange-500 dark:focus:ring-orange-500 dark:text-orange-100 dark:border-orange-500"
            type="button"
          >
            Serach categories
            <svg
              class="w-2.5 h-2.5 ms-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          {/* )} */}
          <div
            id="dropdown"
            class="z-10 hidden bg-orange-100 divide-y divide-orange-100 rounded-lg shadow w-44 dark:bg-orange-100"
          ></div>
          <div class="relative w-full">
            <input
              type="search"
              id="search-dropdown"
              onChange={handleChange}
              class="block p-2.5 w-full z-20 text-sm text-orange-800 bg-orange-100 rounded-e-lg border-s-orange-50 border-s-2 border border-orange-500 focus:ring-orange-500 focus:border-orange-500 dark:bg-orange-300 dark:border-s-orange-500  dark:border-orange-500 dark:placeholder-orange-600  dark:text-white dark:focus:border-orange-500"
              placeholder="Type Recipe or Category"
              requiorange
            />
            <button
              type="submit"
              class="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-orange-100 bg-orange-100 rounded-e-lg border border-orange-500 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-100 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
            >
              <svg
                class="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </form>

      <br />
      {/* Add recipe button */}
      <div className="mb-5">
        {user && (
          <button
            onClick={() => {
              onOpen();
              setShowAddRecipe(false);
            }}
            // setShowCategories(false);
            //</div>}}
            className="px-4 py-2 bg-orange-500 text-orange-100 rounded-md hover:bg-orange-600 transition-colors font-sans"
          >
            Add Recipe
          </button>
        )}
      </div>

      {/* Recipe list */}
      <div className="flex flex-wrap gap-3 font-sans">{recipeList}</div>

      {/* Add recipe modal */}
      <AddRecipe show={show} onClose={onClose} onSave={() => {}} />
    </div>
  );
};

export default Recipes;
