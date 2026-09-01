import { useMemo, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(5);

  const doubledNumber = useMemo(() => {
    console.log("Calculating...");
    return number * 2;
  }, [number]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <h2>Doubled Number: {doubledNumber}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>

      <button onClick={() => setNumber(number + 1)}>
        Increase Number
      </button>
    </div>
  );
}

export default App;