import React, { useReducer } from "react";
import axios from "axios";

export const todoContext = React.createContext();

const INIT_STATE = {
  todos: [],
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_TODOS_DATA":
      return { ...state, todos: action.payload };

    default:
      return state;
  }
};

const TodoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getTodosData = async () => {
    let { data } = await axios("http://localhost:8000/todos");
    dispatch({
      type: "GET_TODOS_DATA",
      payload: data,
    });
  };
  const addTask = (newTask) => {
    axios.post("http://localhost:8000/todos", newTask);
    getTodosData();
  };

  const changeStatus = async (id) => {
    let { data } = await axios(`http://localhost:8000/todos/${id}`);

    await axios.patch(`http://localhost:8000/todos/${id}`, {
      status: !data.status,
    });
    getTodosData();
  };
  return (
    <todoContext.Provider
      value={{
        todos: state.todos,
        addTask,
        getTodosData,
        changeStatus,
      }}
    >
      {children}
    </todoContext.Provider>
  );
};

export default TodoContextProvider;
