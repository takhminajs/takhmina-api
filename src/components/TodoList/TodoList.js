import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { todoContext } from "../../contexts/TodoContext";
import "../../index.css";

const TodoList = () => {
  const { todos, getTodosData, changeStatus } = useContext(todoContext);
  useEffect(() => {
    getTodosData();
  }, []);

  return (
    <ul>
      {todos.map((item) => (
        <li key={item.id} className={item.status ? "completed" : ""}>
          <input
            type="checkbox"
            checked={item.status}
            onChange={() => changeStatus(item.id)}
          />
          {item.task}
          <button>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
