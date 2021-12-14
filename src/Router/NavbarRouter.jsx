import React, { useEffect } from 'react';
import { Outlet,Routes, Route,useLocation } from 'react-router-dom';
import Homepage from '../Pages/Home/Homepage';
import RhinoFacts from '../Pages/RhinoFacts/RhinoFacts';
import RoadMapPage from '../Pages/Roadmap/RoadmapPage';

const NavbarRouter = () => {
    const {pathname} = useLocation()
    useEffect(()=> {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })

    },[pathname])
    
    return (
        <Routes>
            <Route path="/" element={<NavbarPages/>}>
                <Route index element={<Homepage/>}/>
                <Route path="/road-map" element={<RoadMapPage/>}/>
                <Route path="rhino-facts" element={<RhinoFacts/>}/>
            </Route>
            
        </Routes>
    );
};


const NavbarPages = () => {
    return <Outlet/>
}


export default NavbarRouter;