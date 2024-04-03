import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../state/store";
import {
  decrement,
  decrementByAmount,
  increment,
  incrementAsync,
} from "../state/counter/slice";

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);

  // working with async action
  const dispatch = useDispatch<AppDispatch>();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleIncrementByAmount = () => {
    dispatch(incrementAsync(5));
  };

  const handleDecrementByAmount = () => {
    dispatch(decrementByAmount(5));
  };

  return (
    <div>
      <h2>{count}</h2>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleIncrement}>Increment</button>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button onClick={handleDecrementByAmount}>Reduce 5</button>
        <button onClick={handleIncrementByAmount}>Add (Pending) 5</button>
      </div>
    </div>
  );
}
