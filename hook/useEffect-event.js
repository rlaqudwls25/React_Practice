import React, { useState, useEffect } from "react";

const widthPrinter = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    // 다음 부수 효과 함수가 호출되기 직전에 호출된다.
    // unmount 되기 직전에 마지막으로 호출된다.
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);
  // 빈 배열을 없애주면 width값이 바뀔 때마다 계속 useEffect의 부수 효과가 발생된다.
  return <div>{`width is ${width}`}</div>;
};

export default widthPrinter;
