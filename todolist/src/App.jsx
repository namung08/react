import {createContext, useCallback, useMemo, useReducer, useRef, useState} from 'react'
import Header from "./components/Header.jsx";
import Edit from "./components/Edit.jsx";
import List from "./components/List.jsx";
import './App.css'

// 임시 data
const mockData = [
    {
        id : 0, // db에서 pk
        isDone: false, // 선택을 위한 체크박스 값
        content : "React 공부하기",
        date    : new Date().getTime(), // 현재 시각
    },{
        id : 1, // db에서 pk
        isDone: false, // 선택을 위한 체크박스 값
        content : "json",
        date    : new Date().getTime(),

    },{
        id : 2, // db에서 pk
        isDone: false, // 선택을 위한 체크박스 값
        content : "AWS",
        date    : new Date().getTime(),
    },
]

function reducer(state, action) {
    switch (action.type) {
        case "CREATE":
            return [action.data, ...state];
        case "UPDATE" :
            return state.map(todo =>
             todo.id === action.id ? {...todo, isDone: !todo.isDone} : todo);
        case "DELETE" :
            return state.filter((todo)=>todo.id != action.id)
        default:
            return state;
    }
}

// export const TodoContext = createContext()
// console.log(TodoContext)

export const TodoStateContext = createContext()
export const TodoDispatcherContext = createContext()

function App() {
    // const [todos, setTodos] = useState(mockData);
    const [todos, dispatch] = useReducer(reducer, mockData);
    const idRef = useRef(3)

    // const onCreate = (content) => {
    //     // const newTodo = {
    //     //     id:idRef.current++,
    //     //     isDone : false,
    //     //     content : content,
    //     //     date : new Date().getTime(),
    //     // }
    //
    //     // 스프레드 연산자로 기존의 todos 데이터와
    //     // 완전 동일한 데이터를 넣어주고, 우리가 추가하려는
    //     // newTodo 데이터도 넣어준다.
    //     // setTodos([newTodo, ...todos]);
    //
    //     dispatch({
    //         type : "CREATE",
    //         data : {
    //             id:idRef.current++,
    //             isDone : false,
    //             content : content,
    //             date : new Date().getTime(),
    //         }
    //     })
    // }

    const onCreate = useCallback((content) => {
        dispatch({
            type : "CREATE",
            data : {
                id:idRef.current++,
                isDone : false,
                content : content,
                date : new Date().getTime(),
            }
        })
    },[])

    // function onUpdate(targetId) {
    //     // todos state 의 값들 중에서 targetId와 일치하는
    //     // id를 갖는 todo 아이템의 isDone 변경
    //     // todos 배열에서 targetId와 일치하는
    //     // id를 갖는 요소의 isDone 데이터만 토글로 바꾼 배열
    //     // setTodos(
    //     //     todos.map((todo) => {
    //     //             // if(todo.id == targetId) {
    //     //             //     return{
    //     //             //         ...todo,
    //     //             //         isDone: todo.isDone
    //     //             //     }
    //     //             // }
    //     //         // 삼항 연사자로 표현
    //     //             todo.id == targetId ? {...todo, isDone: !todo.isDone} : todo
    //     //             return todo
    //     //         }
    //     //     ));
    //     // setTodos(todos.map(todo =>
    //     //     todo.id === targetId ? {...todo, isDone: !todo.isDone} : todo
    //     // ));
    //
    //     dispatch({
    //         type : "UPDATE",
    //         id : targetId
    //     })
    // }
    const onUpdate = useCallback((targetId) => {
        dispatch({
            type : "UPDATE",
            id : targetId
        })
    },[])

    // function onDelete(targetId) {
    //     // todos 배열에서 targetId와 일치하는 id를 갖는
    //     // 요소만 삭제한 새로운 배열
    //     // 즉, 삭제 대상이 아닌 영역(targetId)와 일치하지 않은 대상)만 필터링
    //     // setTodos(todos.filter((todo)=>todo.id != targetId))
    //     dispatch({
    //         type:"DELETE",
    //         id : targetId
    //     });
    // }

    // 1 param : 최적화 하고싶은 대상 함수, 그 함수를 그대로 return
    // 2 param : deps, deps가 변경되었을 때만 함수 실행

    const onDelete = useCallback((targetId) => {
        dispatch({
                    type:"DELETE",
                    id : targetId
                });
    },[])

    // 빈 배열을 deps로 보내서,
    // 최초에 랜더링 되는 것 말고는 다시 재생성 되지 않도록 한다.
    const memoizedDispatch = useMemo(() => {
        return {onDelete,onUpdate,onCreate}
    },[])

    return (
        <div className="App">
            <div>
                <Header/>
                {/*<TodoContext.Provider value={{onCreate,onDelete,onUpdate,todos}}>*/}
                <TodoStateContext.Provider value={todos}>
                    <TodoDispatcherContext.Provider value={memoizedDispatch}>
                        <Edit/>
                        <List/>
                    </TodoDispatcherContext.Provider>
                </TodoStateContext.Provider>
                {/*</TodoContext.Provider>*/}
            </div>
        </div>
    )
}

export default App
