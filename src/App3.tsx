import { useRef } from "react";


function App3() {
    //버튼을 눌렀을때 p 요소의 innerText 로 "버튼을 눌렀네요?" 라고 출력하려고 한다.
    const handleClick=()=>{
        if(ref.current){
            ref.current.innerText = "버튼을 눌렀네요?"
        }
    }
    //p요소의 참조값을 활용하기 위한  useRef( )
    const ref = useRef<HTMLParagraphElement>(null)
   
    return (
        <div className="container">
            <button onClick={handleClick}>눌러보셈</button>
            <p ref={ref}></p>
        </div>
    );
}

export default App3;