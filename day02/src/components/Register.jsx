import {useEffect, useState, useRef} from "react";

/*회원가입 폼
1. 이름
2. 생년월일
3. 국적
4. 자기소개*/

const Register = () => {
    // const[name, setName] = useState("이름");
    // const[birth, setBirth] = useState("");
    // const[country, setCountry] = useState("");
    // const[bio,setBio] = useState("");

    const [input,setInput] = useState({
       name : "",
       birth : "",
       country : "",
       bio : "",
    });

    const refObj = useRef(0);
    console.log(refObj.current)
    const onChange = (e) => {
        console.log(input);
        console.log(e.target.value,e.target.name)
        setInput({
            ...input,
            [e.target.name] : e.target.value,
        })
        refObj.current++;
        console.log(refObj.current)
    }

    // const onchangeName = (e) => {
    //     setInput({
    //         ...input,
    //         name : e.target.value
    //     })
    // }
    // const onChangeBirth = (e) => {
    //     setInput({
    //         ...input,
    //         birth: e.target.value
    //     })
    // }
    // const onChangeCountry = (e) => {
    //     setInput({
    //         ...input,
    //         country: e.target.value
    //     })
    // }
    // const onChangeBio = (e) => {
    //     setInput({
    //         ...input,
    //         bio: e.target.value
    //     })
    // }

    // const onchangeName = (e) =>{
    //     setName(e.target.value);
    // }
    // const onChangeBirth = (e) =>{
    //     setBirth(e.target.value)
    // }
    // const onChangeCountry = (e) => {
    //     setCountry(e.target.value)
    // }
    // const onChangeBio = (e) => {
    //     setBio(e.target.value)
    // }

    return(
        <div>
            <div>
            <input onChange={onChange} name="name" placeholder="자네의 이름은 무엇인가"/><br/>
                {name}
            </div>
            {/*{name}<br/>*/}
            <div>
            <input type="date" name="birth" onChange={onChange} value={input.birth}/><br/>
            </div>
            <div>
            {input.birth}<br/>
            </div>
            <div>
            <select name="country" value={input.country} onChange={onChange}>
                <option value=""></option>
                <option value="KR">한국</option>
                <option value="US">미국</option>
                <option value="UK">영국</option>
            </select>
            </div>
            {input.country}
            <div>
                <textarea name="bio" value={input.bio} onChange={onChange}></textarea>
                <br/>
                {input.bio}
            </div>

            {/*<button*/}
            {/*    onClick={() => {*/}
            {/*        refObj.current++;*/}
            {/*        console.log(refObj.current)*/}
            {/*    }}*/}
            {/*>ref+1</button>*/}
        {/* 회원가입에 변경이 일어날 때마다
            1씩 증가하는 값을 console.log로 ㅜㅊㄹ력
          */}
        </div>
    );
}

export default Register;