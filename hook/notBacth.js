import React, { useEffect, useState } from "react";

const notBacth = () => {
  const [count, setCount] = useState(0);

  const clickHandler = () => {
    setCount(count + 1);
    setCount(count + 1);
    // setCount((v) => v + 1);
    // setCount((v) => v + 1);
  };

  // 이벤트 핸들러를 등록해서 사용하는 경우에는
  // 리액트 내부에서 관리가 되지 않기 때문에 배치로 처리가 되지 않는다.
  useEffect(() => {
    window.addEventListener("click", clickHandler);
    return () => window.removeEventListener("click", clickHandler);
  });

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={clickHandler}>증가</button>
    </div>
  );
};

export default notBacth;
