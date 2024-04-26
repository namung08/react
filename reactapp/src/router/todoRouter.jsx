import {lazy, Suspense} from "react";
import {Navigate} from "react-router-dom";

const Loading = <div className={'bg-purple-500'}>Loading</div>
const TodoList = lazy(()=>import("../pages/todo/ListPage"));
const ReadPage = lazy(() => import("../pages/todo/ReadPage.jsx"))
const AddPage = lazy(()=>import("../pages/todo/AddPage.jsx"))
const ModifyPage = lazy(()=>import("../pages/todo/ModifyPage.jsx"))

const todoRouter = () => {
    return [
        {
            path : 'list',  // todo/list
            element : <Suspense  fallback={Loading}><TodoList/></Suspense>
        },{
            path : '',  // todo/ 요청이 오면 todo/list로 redirecting
            element : <Navigate replace={true} to={'list'}></Navigate>
        },{
            path : 'read/:tno',  // todo/list
            element : <Suspense  fallback={Loading}><ReadPage/></Suspense>
        },{
            path: 'add',
            element: <Suspense fallback={Loading}><AddPage/></Suspense>
        },{
            path: 'modify/:tno',
            element: <Suspense fallback={Loading}><ModifyPage/></Suspense>
        }
    ]
}

export default todoRouter