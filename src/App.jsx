import React from "react";
import Navbar from "./Component/Navbar/Navbar";
import CategoriesBar from "./Component/CategoriesBar";
import Dashboard from "./Dashboard";

const App = () => {
  return (
    <div>
      <main>
        {/* this is a main nav bar  */}

        <Navbar />
        <CategoriesBar />

        {/*  this is middle part  */}

        <Dashboard />

        {/*  this is the last part */}

        <footer></footer>
      </main>
    </div>
  );
};

export default App;