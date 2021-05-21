import React, { useEffect, useRef } from "react";

const foo2 = () => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <InputAndSave inputRef={inputRef} />
      <button onClick={() => inputRef.current.focus()}>텍스트로 이동</button>
    </div>
  );
};

// 함수형 컴포넌트에서는 ref 속성값을 입력할 수는 없다.
// 그렇기 때문에 inputRef라는 속성이름으로 받아서 사용할 수 있다.
const InputAndSave = ({ inputRef }) => {
  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
};

export default foo2;
