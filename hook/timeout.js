import React from "react";

const foo = () => {
  const [varA, setVarA] = useState(0);
  const [varB, setVarB] = useState(0);

  //   useEffect(() => {
  //     const timeoutA = setTimeout(() => {
  //       setVarA(varA + 1);
  //     }, 1000);
  //     const timeoutB = setTimeout(() => {
  //       setVarB(varB + 2);
  //     }, 1000);

  //     return () => {
  //       console.log("render");
  //       clearTimeout(timeoutA);
  //       clearTimeout(timeoutB);
  //     };
  //   }, [varA, varB]);

  useEffect(() => {
    console.log("render useEffect 1", varA);
    const timeoutA = setTimeout(() => {
      setVarA(varA + 1);
    }, 5000);

    return () => {
      console.log("clear 1", varA);
      clearTimeout(timeoutA);
    };
  }, [varA]);

  useEffect(() => {
    console.log("render useEffect 2", varB);
    const timeoutB = setTimeout(() => {
      setVarB(varB + 1);
    }, 5000);
    return () => {
      console.log("clear 2", varB);
      clearTimeout(timeoutB);
    };
  }, [varB]);

  return (
    <div>
      <h2>{`varA : ${varA}  varB : ${varB}`}</h2>
    </div>
  );
};

export default foo;
