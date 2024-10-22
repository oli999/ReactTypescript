import { useState } from "react";


function App2() {
    // 문자열을 여러개 담을 string[] type 을 상태값으로 관리 하겠다 
    const [msgs, setMsgs] = useState<string[]>([])
    // input 요소에 입력한 문자열을 상태값으로 관리
    const [msg, setMsg] = useState<string>("")

    const handleChange = (e:any)=>{
        setMsg(e.target.value)
    }

    const handleClick = ()=>{
        //input 요소에 입력한 문자열을 읽어와서 
        //msgs 에 반영(추가)
        setMsgs([...msgs, msg])
        setMsg("")
    }
    return (
        <div className="container">
            <input type="text" onChange={handleChange} value={msg}/>
            <button onClick={handleClick}>추가</button>
            <ul>
                {
                    msgs.map(item=><li>{item}</li>)
                }
            </ul>
        </div>
    );
}

export default App2;