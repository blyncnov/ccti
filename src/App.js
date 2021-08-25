import React from "react";
import Content from "./components/Content";
import Header from "./components/Header";
import Instructors from "./components/Instructors";
import Ongoing from "./components/Ongoing";

const App = () => {
  return (
    <>
      <Header />
      <Content />
      <Ongoing />
      <Instructors />
    </>
  );
};

export default App;
