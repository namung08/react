import axios from "axios";

export const API_SERVER_HOST = "http://localhost:9091"
const prefix = `${API_SERVER_HOST}/api/todo`;

export const getOne = async(tno) => {
    const res = await axios.get(`${prefix}/${tno}`);
    return res.data;
}
// apii/todo/list/?page=3&size=10
// param 값을 객체 스타일로 받는다.
export const getList = async(pageParam) => {
    const {page, size} = pageParam;
    // params로 넘기면 ? key=value%key=value 형식으로 작성이 된다.
    const res = await axios.get(`${prefix}/list`,{params:{page,size}})
    return res.data;
}