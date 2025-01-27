import { useDispatch, useSelector } from "react-redux";
import { addition, subtraction } from "../redux/counterSlice";
const Counter = () => {
  let count = useSelector((state) => {
    return state.count;
  });
  let dispatch = useDispatch();

  let increment = () => {
    dispatch(addition());
  };

  let decrement = () => {
    dispatch(subtraction());
  };

  return (
    <div>
      <h1>Counter App</h1>
      <h3>Count - {count}</h3>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
