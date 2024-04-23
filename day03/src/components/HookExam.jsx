// import useInput from "../hooks/useInput.jsx";
//
// // 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
// //const state = useState()
//
//
// // 접두사로 use라는 명칭만 붙여주면
// // react 내부에서 커스텀 hook 이라고 이해한다.
// // function useInput(){
// //     const [input, setInput] = useState();
// //     const onChange =(e) => {
// //         setInput(e.target.value);
// //     }
// //     return [input, onChange];
// //     // 배열로 input, onChange를 return
// // }
//
// const HookExam = () => {
//     // const state = useState();
//     // 조건부, 반복문 에서는 호출 불가하다.
//     // if(true) {
//     //     const state = useState();
//     // }
//
//     const [input, onChange] = useInput();
//     const [input2, onChange2] = useInput();
//
//     return (
//         <div>
//             <input value={input} onChange={onChange}/>
//         </div>
//     );
// };
//
// export default HookExam;
//
//
