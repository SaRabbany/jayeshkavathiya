import React from 'react';
import Footer from '../../Components/Footer/Footer';
import RhinoDetails from './RhinoDetails';
import RhinoFactsHeader from './RhinoFactsHeader';

const RhinoFacts = () => {
    return (
        <main id='rhino-facts-page'>
            <RhinoFactsHeader/>
            <RhinoDetails/>
            <RhinoDetails imageOrder={2}/>
            <RhinoDetails/>
            <Footer/>
        </main>
    );
};

export default RhinoFacts;