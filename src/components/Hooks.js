import React, { useState } from "react";

const Hooks = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Managing with hooks</h1>
      <h1>{count}</h1>
      <button onClick={() => setCount(count)}>set</button>
    </div>
  );
};

export default Hooks;
