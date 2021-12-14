import React, {useEffect} from 'react';
import { BrowserRouter } from "react-router-dom";
import NavbarRouter from "./Router/NavbarRouter";
import "./Styles/style.css"
import AOS from 'aos'
import 'aos/dist/aos.css'
import "animate.css"

function App() {
    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    }, [])

    return (
        <>
            <BrowserRouter>
                <NavbarRouter />
            </BrowserRouter>
        </>
    );
}

export default App;
