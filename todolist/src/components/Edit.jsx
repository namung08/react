import './css/Edit.css'
import {useContext, useEffect, useRef, useState} from "react";
import {TodoDispatcherContext} from "../App.jsx";

const Edit = () => {
    const {onCreate} = useContext(TodoDispatcherContext)
    // input 박스에 onChange이벤트,
    // 이벤트가 발생할 때 마다 입력된 content값을
    // useState 훅 값을 가지고 있는 처리
    const [content, setContent] = useState("");

    // 어떠한 것을 지칭할 때 또한 사용
    const contentRef = useRef();
    const buttonRef = useRef();

    const onChangeContent = (e) => {
        setContent(e.target.value);
    }

    const onSubmit = () => {
        if (content == "") {
            alert("할 일을 입력해 주세요");
            // document.getElementById("todo").focus();
            contentRef.current.focus();
            return false;
        }
        onCreate(content)
        setContent("")
    }

    const enterEvent = (e) => {
        if (e.keyCode == 13) { // enter
            onSubmit();
        }
    }

    return (
        <div className="Editor">
            {/*리엑트에서 제공함. 인풋 박스의 상태 값들을 가져올 수 있음*/}
            <input type="text" id="todo" ref={contentRef} value={content} onChange={onChangeContent} placeholder=" 새로운 todolist..."
                onKeyDown={enterEvent}
            />
            <button ref={buttonRef} onClick={onSubmit}>추가</button>
        </div>
    )
}

export default Edit;