import React, { useState } from 'react'
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { useNavigate, useLocation } from 'react-router-dom';
import './Style.css';
import ViewProperties from './ViewProperties';
import axios from 'axios';

import AdminNavbar from './AdminNavbar';

function Customer(props) {

    const [viewProperties, setViewProperties] = useState(false);
    const [properties, setProperties] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();
    let { name, email, contact_no, address } = location.state || {};

    const handleProfile = () => {
        navigate(`/edit_profile`, { state: location.state });
    }

    const handleProperties = () => {
        
        axios.get("http://localhost:8080/getallproperty").then(
            (response) => {                   
                setViewProperties(true)
             
             setProperties(response?.data?.result || [])
            }
        );
            

    }

    

    const footer = (
        <span>
            <Button className='profile-button' label="Edit Profile" onClick={handleProfile} />
            <Button className='profile-button' label="View Properties" onClick={handleProperties} />

        </span>
    );


    console.log(location)
    return (

        <>
            <AdminNavbar/>
            {viewProperties ? <ViewProperties result={properties} />
                : <Card title="Customer" subTitle="profile details" footer={footer}>
                    <div className='profile-details'>
                        <div> Name :  {name}</div>
                        <div> Email id : {email}</div>
                        <div> Contact : {contact_no} </div>
                        <div> Address : {address}</div>
                    </div>
                </Card>
            }
        </>
    )
};

Customer.defaultProps = {
    data: {
        name: 'abc',
        email: 'abc@xyz.com',
        contact: '1234'
    }
}

export default Customer;