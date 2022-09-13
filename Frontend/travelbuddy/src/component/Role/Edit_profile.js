import React from 'react'
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import './Style.css';
import axios from 'axios';
import react, { useState } from 'react';
import { useLocation } from 'react-router-dom';

function Edit_profile(props) { 

    const location=useLocation();
    console.log(location.state)
    let { name, email,password, contact_no,address } = location?.state || {};
    
        const [user, setUser] = useState({
            name: name,
            email: email,
            password: password,
            contact_no: contact_no,
            address:address
        });


    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
   

    const FormHandle = e => {
        e.preventDefault();
        console.log(JSON.stringify(user))
        addDataToServer(user)
    }

    const addDataToServer = (data) => {
        axios.post("http://localhost:8080/registeruser", data).then(
            (response) => {
                console.log(response);
                alert("User Updated Successfully");
            }, (error) => {
                console.log(error);
                alert("Failed to Update user !!!");
            }
        );
    }

    const footer = (
        <span>
            <Button type="submit" className='edit_profile-button' label="Update" />
            <Button type="reset" className='edit_profile-button' label="Clear" />
        </span>
    );


    return (
        <Card title="Edit Profile" subTitle="profile details" footer={footer}>
            <div className='profile-details'>
                Name: <input type="text" className="edit_profile_input" value={name} onChange={(e) => onInputChange(e)}></input>
                Password : <input type="password"  className="edit_profile_input" value={password} onChange={(e) => onInputChange(e)}></input>
                Email id : <input type="Email"  className="edit_profile_input" value={email} onChange={(e) => onInputChange(e)}></input>
                Contact : <input type="tel" value={contact_no} onChange={(e) => onInputChange(e)}></input>
                Address : <input type="text" value={address} onChange={(e) => onInputChange(e)}></input>
            </div>
        </Card>
    )
};


export default Edit_profile;