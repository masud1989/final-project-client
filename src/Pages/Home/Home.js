import React from 'react';
import Footer from '../Shared/Footer';
import AppointmentPart from './AppointmentPart';
import Banar from './Banar';
import Contact from './Contact';
import DownBanar from './DownBanar';
import Info from './Info';
import Reviews from './Reviews';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Banar></Banar>
            <Info></Info>
            <Services></Services>
            <DownBanar></DownBanar>
            <AppointmentPart></AppointmentPart>
            <Reviews></Reviews>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;