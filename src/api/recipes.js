import instance from ".";

const getAllRecipes = async () => {
  const { data } = await instance.get("/api/recipes");
  return data;
};

const getRecipe = async (recipeId) => {
  const { data } = await instance.get(`/api/recipes/${recipeId}`);
  return data;
};

const createRecipe = async (recipeInfo) => {
  try {
    const formData = new FormData();

    // Append text data
    formData.append("name", recipeInfo.name);
    formData.append("description", recipeInfo.description);
    formData.append("instructions", recipeInfo.instructions);

    // Append image file
    if (recipeInfo.image) {
      formData.append("image", recipeInfo.image);
    }

    const { data } = await instance.post("/api/recipes", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return data;
  } catch (error) {
    throw error;
  }
};

const updateRecipe = async (recipeInfo) => {
  const { data } = await instance.put(
    `/api/recipes/${recipeInfo._id}`,
    recipeInfo
  );
  return data;
};

const deleteRecipe = async (recipeId) => {
  const { data } = await instance.delete(`/api/recipes/${recipeId}`);
  return data;
};

export { getAllRecipes, createRecipe, updateRecipe, deleteRecipe, getRecipe };
