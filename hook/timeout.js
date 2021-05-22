import React, { useState, useEffect } from "react";

const foo = () => {
  const [varA, setVarA] = useVarA();
  const [varB, setVarB] = useVarB();

  //   useEffect(() => {
  //     console.log("render useEffect 1", varA);
  //     const timeoutA = setTimeout(() => {
  //       setVarA(varA + 1);
  //     }, 5000);

  //     return () => {
  //       console.log("clear 1", varA);
  //       clearTimeout(timeoutA);
  //     };
  //   }, [varA]);

  //   useEffect(() => {
  //     console.log("render useEffect 2", varB);
  //     const timeoutB = setTimeout(() => {
  //       setVarB(varB + 1);
  //     }, 5000);
  //     return () => {
  //       console.log("clear 2", varB);
  //       clearTimeout(timeoutB);
  //     };
  //   }, [varB]);

  return (
    <div>
      <h2>{`varA : ${varA}  varB : ${varB}`}</h2>
    </div>
  );
};

const useVarA = () => {
  const [varA, setVarA] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => setVarA(varA + 1), 1000);

    return () => clearTimeout(timeout);
  }, [varA]);

  return [varA, setVarA];
};

const useVarA = () => {
  const [varB, setVarB] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => setVarB(varB + 1), 1000);

    return () => clearTimeout(timeout);
  }, [varB]);

  return [varB, setVarB];
};

export default foo;
