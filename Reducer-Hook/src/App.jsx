import { useReducer, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  let reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + 1 };
      case "DECREMENT":
        return { count: state.count - 1 };
      case "RESET":
        return { count: 0 };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <>
      <h1>Use Reducer Hook</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>Increase</button>
        <p>{count}</p>
      </div>
      <div className="card">
        <button onClick={() => dispatch({ type: "INCREMENT" })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>
          Decrement
        </button>
        <p>{state.count}</p>
        <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      </div>
    </>
  );
}

export default App;
