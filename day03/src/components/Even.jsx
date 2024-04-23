import {useEffect} from "react";

const Even = () => {
    useEffect(() => {
        // 콜백 함수 안에서 return 으로 새로운 함수를
        // return 하면, useEffect의 콜백함수가
        // return 해주는 함수를 클린업, 정리함수라고 판단한다.
        // useEffect가 끝날때 실행된다.
        return () => {
            console.log("unMount")
        }
    }, []);

    return (
        <div>짝수입니다.</div>
    )
}

export default Even;