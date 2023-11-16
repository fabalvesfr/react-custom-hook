import { useCounter } from "./useCounter";
import "./App.css";

function App() {
  const { count, increase, decrease, setToZero } = useCounter();
  return (
    <div className="App">
      <h2>{count}</h2>
      <button onClick={increase}>INCREASE</button>
      <button onClick={decrease}>DECREASE</button>
      <button onClick={setToZero}>SET TO ZERO</button>
    </div>
  );
}

export default App;
