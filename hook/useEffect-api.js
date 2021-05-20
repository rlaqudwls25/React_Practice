import React, { useState, useEffect } from "react";

//상위 컴포넌트
// const App = () => {
//     const [userId, setUserId] = useState(0);
//     return (
//       <>
//         <Profile userId={userId} />
//         <button onClick={() => setUserId(userId + 1)}>변겅</button>
//       </>
//     );
//   };

//하위 컴포넌트
const Profile = ({ userId }) => {
  const [user, setUser] = useState(null);

  // 의존성 배열안에 userId가 들어있으면 userId값이 변경 될 때 useEffect안에 부수 효과가 동작한다.
  // 만약에 의존성 배열이 비어있으면 부수 효과 함수는 마운트 된 이후에 한 번만 호출된다.
  // 의존성 배열에는 컴포넌트의 상태값이나 속성값 또는 Profile컴포넌트 내부에서 정의된
  // 지역 변수나 지역 함수 같은 것들을 넣어 줄 수가 있다.

  // func1 함수는 Profile컴포넌트가 렌더링 될 때 마다 새로 생성이 된다.
  // 그래서 의존성 배열의 값이 항상 변경되기 때문에 너무 잦은 렌더링이 일어나고 있다
  // 이럴 경우에는 useCallback hook을 사용해서 메모제이션 기능을 이용해야한다.
  // const func1 = () => {
  //   console.log(userId);
  // };
  useEffect(() => {
    // func1();
    getUserApi(userId).then((data) => setUser(data));
  }, [userId /*func1*/]);
  return (
    <div>
      {!user && <p>사용자 정보를 가져오는 중... </p>}
      {user && (
        <>
          <p>{`name is ${user.name}`}</p>
          <p>{`age is ${user.age}`}</p>
        </>
      )}
    </div>
  );
};

const USER1 = { name: "mike", age: 23 };
const USER2 = { name: "jane", age: 31 };

//getUserApi는 외부에 있는 함수이다.
const getUserApi = (userId) => {
  return new Promise((res) => {
    setTimeout(() => {
      res(userId % 2 ? USER1 : USER2);
    }, 1000);
  });
};

export default Profile;
