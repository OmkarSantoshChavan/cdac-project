import React from 'react'
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import './Style.css';
import axios from 'axios';
import react, { useState } from 'react';


function Edit_profile(props) { 
        const [user, setUser] = useState({
            name: '',
            email: '',
            password: '',
            contact_no: ''
        });


    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    const { name, password , email , contact } = user;

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
                Name: <input type="text" className="edit_profile_input" onChange={(e) => onInputChange(e)}></input>
                Password : <input type="password"  className="edit_profile_input" onChange={(e) => onInputChange(e)}></input>
                Email id : <input type="Email"  className="edit_profile_input" onChange={(e) => onInputChange(e)}></input>
                Contact : <input type="value" ></input>

            </div>
        </Card>
    )
};


export default Edit_profile;