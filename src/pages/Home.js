import React from "react";

const Home = () => {
  return (
    <div className="bg-orange-100 min-h-screen flex items-center justify-center font-sans home-container  ">
      <div className="bg-orange-200 bg-opacity-70 hover:bg-opacity-80  p-4 rounded-2xl max-w-5xl text-center">
        <h1 className="text-6xl text-orange-700 font-bold mb-8 mt-3 ">
          Welcome To Foodiez
        </h1>
        <p className="text-2xl text-orange-900 font-semibold leading-relaxed ml-5 mr-5 mb-3 ">
          Your go-to destination for all things delicious! Whether you're a
          cooking enthusiast or just looking for some tasty inspiration, we've
          got you covered. Explore a variety of recipes, connect with fellow
          foodies, and make your kitchen the heart of flavor. Let's make every
          meal a memorable moment together. Dive in and enjoy the world of
          Foodiez!
        </p>
      </div>
    </div>
  );
};

export default Home;
