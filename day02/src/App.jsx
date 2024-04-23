import { useState } from "react"
import Bulb from "./components/Bulb.jsx";
import Counter from "./components/Counter.jsx";

function App() {
    //const state = useState(0);
    return (
        <>
            <Bulb/>
            <Counter/>
        </>
    )
}

export default App
