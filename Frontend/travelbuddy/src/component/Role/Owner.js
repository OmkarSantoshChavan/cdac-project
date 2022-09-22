import React from 'react'
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { useNavigate,useLocation } from 'react-router-dom';
import './Style.css';

import AdminNavbar from './AdminNavbar';

function Owner(props) {

    const navigate = useNavigate();
    const location = useLocation();
    let { name, email, contact_no,address } = location.state ||{};
    
    const handleProfile = () => {
        navigate(`/edit_profile`,{state:location.state});
    }
    const addProperty = () => {
        navigate(`/add_property`,{state:location.state});
    }

    const footer = (
        <span>
            <Button className='profile-button' label="Edit Profile" onClick={handleProfile} />
            <Button className='profile-button' label="Add Property" onClick={addProperty}/>
            <Button className='profile-button' label="Edit Property" />

        </span>
    );

   
    console.log(location)
    return (
        <>
        <AdminNavbar/>
        <Card title="Owner" subTitle="profile details" footer={footer}>
            <div className='profile-details'>
                <div> Name :  {name}</div>
                <div> Email id : {email}</div>
                <div> Contact : {contact_no} </div>
                <div> Address : {address}</div>
            </div>
        </Card>
        </>
    )
};

Owner.defaultProps = {
    data: {
        name: 'abc',
        email: 'abc@xyz.com',
        contact: '1234'
    }
}

export default Owner;