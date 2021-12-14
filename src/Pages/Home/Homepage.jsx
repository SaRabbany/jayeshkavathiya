import React from 'react';
import Footer from '../../Components/Footer/Footer';
import FAQ from './FAQ';
import GoatBarn from './GoatBarn';
import GoatTeam from './GoatTeam';
import Header from './Header';

const Homepage = () => {
    return (
        <main id='homepage'>
            <Header/>
            <GoatBarn/>
            <FAQ/>
            <GoatTeam/>
            <Footer/>
        </main>
    );
};

export default Homepage;