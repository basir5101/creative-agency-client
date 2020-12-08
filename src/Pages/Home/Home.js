import React from 'react';
import Brands from '../../Components/Brands/Brands';
import Feedback from '../../Components/Feedback/Feedback';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Services from '../../Components/Services/Services';
import WorkDone from '../../Components/WorkDone/WorkDone';


const Home = () => {
    return (
        <div>
            <Header />
            <Brands />
            <Services />
            <WorkDone />
            <Feedback />
            <Footer />
        </div>
    );
};

export default Home;