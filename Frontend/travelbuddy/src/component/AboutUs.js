import React from 'react';
import Navbar from '../Navbar';
import Homepage from './Homepage';

function AboutUs(props) {

    const aboutStyle = {
        paddingTop: '109px',
        fontSize: '28px',
        background: 'rgba(0, 0, 0, 0.5)',
        width: '100%',
        height: '100%',
    }

    return (
        <> 
        <Navbar/>         
            <div className="styleObj1" style={aboutStyle } >
                <p className="text-white styleObj2">TravelBuddy providing range<br/> of choice for hotels,villas,resorts.<br/>
                Our core value differentiator is the most trusted <br/> user experience, be it in terms of quickest booking.<br/>
                our customers enjoy standardised stay <br/> experience at certified hotel properties.<br/></p>
                </div>
            </>
    );
}
export default AboutUs;