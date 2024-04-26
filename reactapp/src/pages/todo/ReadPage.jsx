import React from 'react';
import {createSearchParams, useNavigate, useParams, useSearchParams} from "react-router-dom";

const ReadPage = () => {
    const {tno} = useParams()
    const navigator = useNavigate()
    const [queryParams] = useSearchParams()
    // 페이징 처리
    const page = queryParams.get('page') ? parseInt(queryParams.get('page')) : 1;
    const size = queryParams.get('size') ? parseInt(queryParams.get('size')) : 10;

    const quertyStr = createSearchParams({page:page, size:size}).toString();

    // console.log(obj)
    const moveToModify = () => {
        // /todo/modify/tno
        navigator(
            {
                pathname:`/todo/modify/${tno}`,
                // URL 뒤에 위치한 파라미터 값을 넘겨주기 위해 사용
                search:quertyStr
            }
        )
    }

    return (
        <div className="text-3xl font-extrabold">
            <h1>Todo Read Page Component</h1>
            <div>
                <button onClick={()=> {moveToModify(tno)}}>Test Modify</button>
            </div>
        </div>
    );
};

export default ReadPage;