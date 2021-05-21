import React, { useEffect } from "react";

const foo = () => {
  const inputRef = useRef();

  useEffect(() => {
    // current = 실제 돔 요소를 가리킨다.
    // 따라서 실제 돔에 있는 이 focus 함수를 실행시킬 수 있다.
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button>저장</button>
    </div>
  );
};

export default foo;
