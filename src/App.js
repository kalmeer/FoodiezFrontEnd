import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Recipes from "./pages/Recipes";
import Recipe from "./pages/Recipe";
import Users from "./pages/Users";
import { clear } from "@testing-library/user-event/dist/clear";
import { useState } from "react";
import UserContext from "./context/UserContext";
import { NotFound } from "./components/NotFound";

function App() {
  const [user, setUser] = useState(false);

  return (
    <UserContext.Provider value={[user, setUser]}>
      <div className="App font-mono ">
        <Navbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/recipes" Component={Recipes} />
          <Route path="/recipes/:recipeId" Component={Recipe} />
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register} />
          <Route path="/users" Component={Users} />
          <Route path="/*" Component={NotFound} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
