import React from 'react';
import Brands from '../Brands/Brands';
import Feedback from '../Feedback/Feedback';
import Header from '../Header/Header';
import Services from '../Services/Services';
import WorkExample from '../WorkExample/WorkExample';
import Footer from './Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header/>
            <Brands/>
            <Services/>
            <WorkExample/>
            <Feedback/>
            <Footer/>
        </div>
    );
};

export default Home;