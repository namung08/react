import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import todoRouter from "./todoRouter.jsx";
// import About from "../pages/About";
// import MainPage from "../pages/MainPage";

const Loading = <div className={'bg-purple-500'}>Loading</div>
const Main = lazy(()=>import("../pages/MainPage"));     // import를 천천히 처리
const About = lazy(()=>import("../pages/About"));
const TodoIndex = lazy(()=>import("../pages/todo/IndexPage"));
const TodoList = lazy(()=>import("../pages/todo/ListPage"));

const root = createBrowserRouter([
    {
        path    : '',
        element : <Suspense fallback={Loading}><Main/></Suspense>

    },
    {
        path : '/about',
        element : <Suspense fallback={Loading}><About/></Suspense>
    },
    {
        path : '/todo',
        element : <Suspense fallback={Loading}><TodoIndex/></Suspense>,
        children : todoRouter(),
    },

]);

export default root;