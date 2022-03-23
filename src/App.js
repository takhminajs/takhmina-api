import TodoContextProvider from "./contexts/TodoContext";
import MainRoutes from "./MainRoutes";
function App() {
  return (
    <div className="App">
      <TodoContextProvider>
        <MainRoutes />
      </TodoContextProvider>
    </div>
  );
}

export default App;
