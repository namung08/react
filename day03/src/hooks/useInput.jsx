// import {useState} from "react";
//
//
// // 접두사로 use라는 명칭만 붙여주면
// // react 내부에서 커스텀 hook 이라고 이해한다.
// function useInput(){
//     const [input, setInput] = useState();
//     const onChange =(e) => {
//         setInput(e.target.value);
//     }
//     return [input, onChange];
//     // 배열로 input, onChange를 return
// }
//
// export default useInput();