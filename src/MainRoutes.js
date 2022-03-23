import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddTodo from "./components/AddTodo/AddTodo";
import Home from "./components/Home/Home";
import TodoList from "./components/TodoList/TodoList";

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/add" element={<AddTodo />} />
        <Route exact path="/list" element={<TodoList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;
