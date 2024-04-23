import { useState, useEffect, useRef } from 'react'
import Viewer from "./components/Viewer.jsx";
import Controller from "./components/Controller.jsx";
import './App.css'
import Even from "./components/Even.jsx";

function App() {
    // Controller는 count와 setCount가 둘다 필요.
    // 각각 넘겨줄 수도 있지만, event 핸들러를 만들어서
    // 그 자체를 넘겨줄 수 도 있다.
    const [count, setCount] = useState(0);
    const [input, setInput] = useState("");

    // 아직 mount 되지 않았다. -> false
    const isMount = useRef(false);

    const onClickButton = (value) => {
        setCount(count + value); // 비동기
        // console.log(count);
    }

    // 첫 번째 인수 : 콜백함수
    // 두 번째 인수 : 배열
    // 배열에 들어가 있는 값이 바뀌면
    // sideEffect로 첫 번째 전달한 콜백 함수를 실행
    // useEffect(() => {
    //     // count : 100
    //     // ``(백틱) + 연산자를 사용하지 않고 쉽게 문자열을 작성할 때 사용
    //     console.log(`count, input : ${count} / ${input}`)
    //     },[count,input]);

    // 마운트 : 탄생
    useEffect(() => {
        console.log(`mount`)
    }, []);

    // 2. 업데이트 : 변화, 리렌더링
    // deps 생략 : 콜백 함수는 리렌더링 될 때 마다 실행된다.
    useEffect(() => {
        if (!isMount.current) {
            isMount.current = true;
            return; // 강제 종료, 즉 최초의 1번은 update 실행되지 않는 로직
        }
        console.log(`update`)
    });

    return (
        <div className="App">
            <h1>Simple Counter</h1>
            <section>
                <input type="text" value={input} onChange={(e) => {
                    setInput(e.target.value);
                }}/>
            </section>
            <section>
                <Viewer count={count}/>
                {count % 2 == 0 ? <Even/> : null}
            </section>
            <section>
                <Controller onClickButton={onClickButton}/>
            </section>
        </div>
    );
}

export default App;
