import { useState } from 'react'
import Header from "./components/Header.jsx";
import Edit from "./components/Edit.jsx";
import List from "./components/List.jsx";

function App() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <Header/>
            <Edit/>
            <List/>
        </div>
    )
}

export default App
