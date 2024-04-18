import { useState } from 'react'
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Main2 from "./components/Main2.jsx";
import Button from "./components/Button.jsx";
import Footer from "./components/Footer.jsx";
import Button1 from "./components/Button1.jsx";
function App() {
    const ButtonProps = {
        text : "메일",
        color : "red",
        a : 1,
        b : 2,
        c : 3
    }
    return (
        <>
            {/*<Header/>*/}
            {/*<h1>안녕 리엑트!!!</h1>*/}
            {/*<Main/>*/}
            {/*<Main2/>*/}
            {/*<Footer/>*/}
            {/*text={"메일"} color={"red"}*/}
            {/*a={1} b={2} c={3}*/}
            {/*
                ...ButtonProps : 스프레드 연산자
                -> ButtonProps 의 내용을 펼처서 전달
            */}
            <Button {...ButtonProps}/>
            <Button text={"카페"}/>
            <Button text={"블로그"}/>
            <Button1 {...ButtonProps}>
                {/*<div>자식요소</div>*/}
                <Header/>
            </Button1>
        </>
    )
}

export default App
