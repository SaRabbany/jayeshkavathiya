import React from 'react';
import Header from './RMComponents/Header';
import Roadmap2 from './RMComponents/Roadmap2';
import WaveOne from './RMComponents/WaveOne';
import WaveThree from './RMComponents/WaveThree';
import WaveFour from "./RMComponents/WaveFour";
import WaveTwo from './RMComponents/WaveTwo';
import './RoadmapPage.css';

const RoadMapPage = () => {
    return (
        <div className='roadMap_area'>
            <Header />
            <WaveOne />
            <WaveTwo />
            <WaveThree />
            <WaveFour/>
            <Roadmap2 />
        </div>
    );
};

export default RoadMapPage;