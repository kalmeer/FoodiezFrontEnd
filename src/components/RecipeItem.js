import React from "react";
import { Link } from "react-router-dom";

const RecipeItem = ({ user, title, topic, _id }) => {
  return (
    <div className="bg-orange-800 rounded-md shadow-md p-4 mb-4 text-orange-100 min-w-[300px]">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>
      <p className="text-orange-400 mb-2">Created by: {user?.name}</p>
      <div className="flex flex-wrap">
        {topic?.map((topic) => (
          <span
            key={topic}
            className="inline-block bg-orange-600 text-orange-100 text-sm px-2 py-1 rounded-md mr-2 mb-2"
          >
            {topic}
          </span>
        ))}
      </div>
      <Link to={`/recipes/${_id}`}>
        <button className="px-3 py-2 bg-orange-500 text-orange-200 rounded-md hover:bg-orange-600 transition-colors">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default RecipeItem;
