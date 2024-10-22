
// src/App5.tsx

import axios, { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import Member from "./interface/Member";

function App5() {
    // Member interface  type 은  {} 로 만든 object 로 생각하고 사용하면 된다 
    const [data, setData] = useState<Member[]>([])

    const refresh = ()=>{
        axios.get("/members")
        .then(res=>{
            console.log(res.data)
            setData(res.data)
        })
    }
    
    useEffect(()=>{
        refresh()
    }, [])
    //입력한 이름과, 주소를 상태값으로 관리 
    const [state, setState] = useState<Member>({
        name:"", 
        addr:""
    })

    const handleChange = (e:any)=>{
        //change event 가 일어난 요소에 입력한 값을 state 값으로 반영한다
        setState({
            ...state,
            [e.target.name]:e.target.value
        })
    }
    // axios 요청 설정 
    const config:AxiosRequestConfig ={
        headers:{
            "Content-Type":"application/json"
        }
    }
    
    const handleAdd = ()=>{
        
        axios.post("/members", state, config)
        .then(res=>{
            //res.data 에는 현재 추가된 회원 정보가 번호를 포함해서 들어 있다.
            console.log(res.data)
            refresh()
        })
        .catch(error=>{
            console.log(error)
        })
    }

    return (
        <div className="container">
            <input onChange={handleChange} name="name" type="text" placeholder="이름..."/>
            <input onChange={handleChange} name="addr" type="text" placeholder="주소..."/>
            <button onClick={handleAdd}>추가</button>
            <table>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>이름</th>
                        <th>주소</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(item=><tr>
                            <td>{item.num}</td>
                            <td>{item.name}</td>
                            <td>{item.addr}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
}

export default App5;