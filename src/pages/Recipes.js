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
      {/* <div className="flex justify-center bg-orange-100 font-sans ">
        <select value={category} onChange={handleChange} className="category">
          <option value="">Select a category</option>
          <option value="category1">Category 1</option>
          <option value="category2">Category 2</option>
          <option value="category3">Category 3</option>
        </select>
      </div> */}

      <form>
        <div className="flex justify-center w-[50%]">
          {/* <label
            for="search-dropdown"
            class="mb-2 text-sm font-medium text-orange-900 sr-only dark:text-white"
          >
            Your Email
          </label> */}
          <button
            id="dropdown-button"
            data-dropdown-toggle="dropdown"
            class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-orange-900 bg-orange-100  border-orange-100 rounded-s-lg hover:bg-orange-200 focus:ring-4 focus:outline-none focus:ring-orange-100 dark:bg-orange-700 dark:hover:bg-orange-600 dark:focus:ring-orange-700 dark:text-white dark:border-orange-600"
            type="button"
          >
            All categories{" "}
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
          <div
            id="dropdown"
            class="z-10 hidden bg-white divide-y divide-orange-100 rounded-lg shadow w-44 dark:bg-orange-700"
          >
            <ul
              class="py-2 text-sm text-orange-700 dark:text-orange-200"
              aria-labelledby="dropdown-button"
            >
              <li>
                <button
                  type="button"
                  class="inline-flex w-full px-4 py-2 hover:bg-orange-100 dark:hover:bg-orange-600 dark:hover:text-white"
                >
                  Mockups
                </button>
              </li>
              <li>
                <button
                  type="button"
                  class="inline-flex w-full px-4 py-2 hover:bg-orange-100 dark:hover:bg-orange-600 dark:hover:text-white"
                >
                  Templates
                </button>
              </li>
              <li>
                <button
                  type="button"
                  class="inline-flex w-full px-4 py-2 hover:bg-orange-100 dark:hover:bg-orange-600 dark:hover:text-white"
                >
                  Design
                </button>
              </li>
              <li>
                <button
                  type="button"
                  class="inline-flex w-full px-4 py-2 hover:bg-orange-100 dark:hover:bg-orange-600 dark:hover:text-white"
                >
                  Logos
                </button>
              </li>
            </ul>
          </div>
          <div class="relative w-full">
            <input
              type="search"
              id="search-dropdown"
              class="block p-2.5 w-full z-20 text-sm text-orange-900 bg-orange-50 rounded-e-lg border-s-orange-50 border-s-2 border border-orange-100 focus:ring-orange-500 focus:border-orange-500 dark:bg-orange-700 dark:border-s-orange-700  dark:border-orange-600 dark:placeholder-orange-100 dark:text-white dark:focus:border-orange-500"
              placeholder="Search Mockups, Logos, Design Templates..."
              requiorange
            />
            <button
              type="submit"
              class="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-orange-700 rounded-e-lg border border-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-100 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
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
              <span class="sr-only">Search</span>
            </button>
          </div>
        </div>
      </form>

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
