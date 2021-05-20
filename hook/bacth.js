import React, { useState } from "react";

const bacth = () => {
  const [count, setCount] = useState(0);

  // 상태값 변경 함수는 비동기이면서 배치로 처리되기 때문에
  // clickHandler 함수에 count는 1만 증가된다.
  const clickHandler = () => {
    setCount(count + 1);
    setCount(count + 1);
    // setCount((v) => v + 1);
    // setCount((v) => v + 1);
  };

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={clickHandler}>증가</button>
    </div>
  );
};

export default bacth;
