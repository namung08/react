import './Main.css'
const Main2 = () => {
    const user = {
        name : "홍길동",
        isLogin : false
    };

    // return (
    //     <>
    //         {user.isLogin ? (<div>로그아웃</div>) : (<div>로그인</div>)}
    //     </>
    // );

    if(user.isLogin) {
        return <div style={{
            backgroundColor : "lightgray",
            borderBottom: "5px solid skyblue"
        }}>로그아웃</div>;
    } else {
        return <div className="logout">로그인</div>;
    }
}

export default Main2;