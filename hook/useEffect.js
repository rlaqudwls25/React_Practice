import React, { useState, useEffect } from "react";

const useEffect = () => {
  const [count, setCount] = useState(0);

  // 1. Click
  // 2. 컴포넌트 다시 렌더링
  // 3. useEffect에 부수 효과가 실행된다.
  useEffect(() => {
    document.title = `업데이트 횟수 : ${count}`;
  });
  return <button onClick={() => setCount(count + 1)}>증가</button>;
};

export default useEffect;
