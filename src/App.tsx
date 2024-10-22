import { useState } from "react";


function App() {
  
  const myName:string = "김구라"
  // number Type 을 상태값으로 관리 하기 
  const [count, setCount] = useState<number>(0)

  const handleClick = ()=>{
    setCount(count+1)
  }
  //이벤트 객체를 전달 받는 함수 
  const handleClick2 = (e:any)=>{
    e.target.innerText = "clicked!"
  }

  return (
    <div className="container">
      <p>내이름은 : <strong>{myName}</strong></p>
      <button onClick={handleClick}>{count}</button>
      <button onClick={handleClick2}>눌러보셈</button>
    </div>
  );
}

export default App;
