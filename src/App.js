import React, { useState } from "react";
import WidthPrinter from "./WidthPrinter";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      {count === 0 && <WidthPrinter />}
      <button onClick={() => setCount(count + 1)}>증가</button>
    </div>
  );
};

export default App;
