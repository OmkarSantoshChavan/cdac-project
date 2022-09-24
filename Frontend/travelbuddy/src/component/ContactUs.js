import React from 'react';
import Navbar from '../Navbar';
import 'primeicons/primeicons.css';

function ContactUs(props) {
    return (
        <> 
        <Navbar/>         
            <div className="styleObj1" style={{ paddingTop:"200px", height:'85vh' , fontSize:"28px",background:"rgba(0,0,0,.5)"}} >
                <i className='pi pi-map-marker' style={{'fontSize': '2em',  color: 'white'}}/>
                <p className="text-white styleObj2"> Our Company Address </p>
                <p className="text-white styleObj2"> Shanti Nagar Canada Corner </p>
                <p className="text-white styleObj2"> P.O Kannad, Pin Code: 431103 </p>
                </div>
            </>
    );
}
export default ContactUs;