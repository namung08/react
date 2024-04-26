import React from 'react';
import {useSearchParams} from "react-router-dom";

const ListPage = () => {
    // getter, setter 사용가능
    const [queryParams] = useSearchParams()
    // console.log(queryParams.get('page'))
    // console.log(queryParams.get('size'))
    // 페이징 처리
    const page = queryParams.get('page') ? parseInt(queryParams.get('page')) : 1;
    const size = queryParams.get('size') ? parseInt(queryParams.get('size')) : 1;

    return (
        <div className="p-4 w-full bg-orange-200 ">
            <div className="text-3xl font-extrabold">
                Todo List Page Component ==== {page} ==== {size}
            </div>
        </div>
    );
};

export default ListPage;