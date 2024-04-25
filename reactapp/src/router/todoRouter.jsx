import {lazy, Suspense} from "react";
import {Navigate} from "react-router-dom";

const Loading = <div className={'bg-purple-500'}>Loading</div>
const TodoList = lazy(()=>import("../pages/todo/ListPage"));

const todoRouter = () => {
    return [
        {
            path : 'list',  // todo/list
            element : <Suspense><TodoList fallback={Loading}></TodoList></Suspense>
        },{
            path : '',  // todo/ 요청이 오면 todo/list로 redirecting
            element : <Navigate replace={true} to={'list'}></Navigate>
        }
    ]
}

export default todoRouter