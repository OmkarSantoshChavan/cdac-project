import React from 'react';
import Homepage from './Homepage';

function AboutUs(props) {
    return (
        <Homepage>          
            <div className="styleObj1" style={{ paddingTop:"200px",fontSize:"28px",background:"rgba(0,0,0,.5)"}} >
                <p className="text-white styleObj2">TravelBuddy providing range of choice for hotels,villas,resorts.<br/>
                Our core value differentiator is the most trusted user experience, be it in terms of quickest booking.<br/><br/>
                our customers enjoy standardised stay experience at certified hotel properties.<br/></p>
                </div>
            </Homepage>
    );
}
export default AboutUs;