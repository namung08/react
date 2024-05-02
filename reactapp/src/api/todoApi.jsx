import axios from "axios";

// 경로를 작성
export const API_SERVER_HOST = 'http://localhost:9091';
// export const API_SERVER_HOST = 'http://ec2-3-36-114-184.ap-northeast-2.compute.amazonaws.com:9090';
const prefix = `${API_SERVER_HOST}/api/todo`;

// 비동기 통신
// /api/todo/{tno}
export const getOne = async(tno) =>{
    const res = await axios.get(`${prefix}/${tno}`);
    return res.data;
}

// /api/todo/list?page=3&size=10
// param 값을 객체 스타일로 받는다.
export const getList = async(pageParam) =>{
    const {page, size} = pageParam;

    // params로 넘기면 ? key=value&key=value 형식으로 작성이 된다.
    const res 
    = await axios.get(`${prefix}/list`,{params:{page, size}});
    // = await axios.get(`${prefix}/list`,{params:{...pageParam}});
    return res.data;
}

// 등록
export const postAdd = async(todoObj)=>{
    const res = await axios.post(`${prefix}/`, todoObj);
    return res.data;
}

// 삭제
export const deleteOne = async (tno) =>{
    const res = await axios.delete(`${prefix}/${tno}`);
    return res.data;
}

// 수정
export const putOne = async (todo) =>{
    const res = await axios.put(`${prefix}/${todo.tno}`, todo);
    return res.data;
}