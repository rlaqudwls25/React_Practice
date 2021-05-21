// import React, { useState, useEffect } from "react";

// const WidthPrinter = () => {
//   const [width, setWidth] = useState(window.innerWidth);
//   //   const onResize = () => setWidth(window.innerWidth);
//   const onResize = () => {
//     setWidth(window.innerWidth);
//   };
//   useEffect(() => {
//     window.addEventListener("resize", onResize);
//     console.log("useEffect 1");
//     // 다음 부수 효과 함수가 호출되기 직전에 호출된다.
//     // unmount 되기 직전에 마지막으로 호출된다.
//     return () => {
//       window.removeEventListener("resize", onResize);
//       console.log("useEffect 2");
//     };
//   }, []);
//   return <div>{`width is ${width}`}</div>;
// };

// export default WidthPrinter;
