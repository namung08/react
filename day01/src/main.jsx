// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
        <App/>,
        <Main/>,
        <Footer/>
    )
