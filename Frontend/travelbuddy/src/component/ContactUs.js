import React from 'react';
import Navbar from '../Navbar';
import Homepage from './Homepage';

function ContactUs(props) {
    return (
        <> 
        <Navbar/>         
            <div className="styleObj1" style={{ paddingTop:"200px", height:'85vh' , fontSize:"28px",background:"rgba(0,0,0,.5)"}} >
                <p className="text-white styleObj2">Contact Us </p>
                </div>
            </>
    );
}
export default ContactUs;