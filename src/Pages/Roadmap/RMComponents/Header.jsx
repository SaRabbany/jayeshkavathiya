import React from 'react';
import { Link } from 'react-router-dom';
import '../Allcss/Header.css';

const Header = () => {
    return (
        <div className='roadmap_header'>
            <div className='container'>
                <div className='roadmapInner' data-aos="fade-down">
                    <Link className='roadmapLink' to={"/"}>Back</Link>
                
                    <h1 className='roadmapTitle' data-aos="fade-down">Roadmap <br /> <span className="small">Pride in each stage</span></h1>

                    <div className='roadmapLogo_wrapper'>
                        <div className='roadmapLogo' data-aos="fade-down"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;