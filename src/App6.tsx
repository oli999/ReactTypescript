/* 
    interface 에  PostDto  인터페이스를 정의하고 
    글목록 보기 , 글 추가하기 기능을 typescript 기반으로 만들어 보세요 
*/

import axios from "axios";
import { useEffect, useState } from "react";
import PostDto from "./interface/PostDto";

function App6() {

    //글목록을 상태값으로 관리
    const [posts , setPosts] = useState<PostDto[]>([])

    const refresh=()=>{
        axios.get("/v2/posts")
        .then(res=>{
            //응답된 데이터를 글목록에 넣어주기 
            setPosts(res.data as PostDto[])
        })
        .catch(error=>{
            console.log(error)
        })
    }
    useEffect(()=>{
        refresh()
    }, [])

    const [post, setPost] = useState<PostDto>({
        title:"",
        author:""
    })

    const handleChange = (e:any)=>{
        setPost({
            ...post,
            [e.target.name]:e.target.value
        })
    }

    const handleAdd = ()=>{
        axios.post("/v2/posts", post)
        .then(res=>{
            //res.data 는 추가된 글정보 (PostDto)
            // refresh() 또는 기존 배열에 아이템을 추가한 새로운 배열얻어 내서 ui 업데이트
            setPosts([...posts, res.data as PostDto]) 
        })
        .catch(error=>{
            console.log(error)
        })
    }

    return (
        <div>
            <h1>post 목록</h1>
            <input onChange={handleChange} type="text" name="title" placeholder="제목..."/>
            <input onChange={handleChange} type="text" name="author" placeholder="작성자..."/>
            <button onClick={handleAdd}>추가</button>
            <table>
                <thead>
                    <tr>
                        <th>아이디</th>
                        <th>제목</th>
                        <th>작성자</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        posts.map(item => <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.author}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
}

export default App6;