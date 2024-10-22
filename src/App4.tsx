import Member from "./interface/Member";


function App4() {
    // m1 을 Member interface type 으로 만들기 
    const m1:Member = {
        num:1,
        name:"김구라",
        addr:"노량진"
    }
    // readonly 는 변경 불가
    //m1.num=2

    return (
       <div className="container">
            <p> interface 사용해 보기</p>
            <p>{`번호 :${m1.num} 이름:${m1.name} 주소:${m1.addr}`}</p>
       </div>
    );
}

export default App4;