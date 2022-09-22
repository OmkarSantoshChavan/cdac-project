import React from 'react'
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import './Style.css';
import axios from 'axios';
import react, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AdminNavbar from '../../component/Role/AdminNavbar'

function Edit_profile(props) { 

    const navigate = useNavigate();

    const location=useLocation();
    console.log(location.state)
    let { userid,name, email,password, contact_no,address,aadhar_card,role } = location?.state || {};
    
        const [user, setUser] = useState({
            userid:userid,
            name: name,
            email: email,
            password: password,
            contact_no: contact_no,
            address:address,
            aadhar_card:aadhar_card,
            role:role
        });


    const onInputChange = (e) => {
        console.log(e.target);
        debugger;
        setUser({ ...user, [e.target.name]: e.target.value })
        console.log(user);
    }
   
    const FormHandle = e => {
        e.preventDefault();
        console.log(JSON.stringify(user))
        addDataToServer(user)
    }
    const addDataToServer = (data) => {
        axios.put(`http://localhost:8080/updateprofile/${userid}`,data).then(
            (response) => {
                console.log(response);
                alert("User Updated Successfully");
                navigate(`/login`,{state:location.state});
            }, (error) => {
                console.log(error);
                alert("Failed to Update user !!!");
            }
        );
    }

    const footer = (
        <span>
            <Button type="submit" className='edit_profile-button' label="Update" onClick={FormHandle}/>
            <Button type="reset" className='edit_profile-button' label="Clear" />
        </span>
    );


    return (
        <>
        <AdminNavbar/>
        <Card title="Edit Profile" subTitle="profile details" footer={footer}>
            <div className='profile-details'>
                Name: <input type="text" name="name" className="edit_profile_input" value={user.name} onChange={(e) => onInputChange(e)}></input>
                Password : <input type="password" name="password" className="edit_profile_input" value={user.password} onChange={(e) => onInputChange(e)}></input>
                Email id : <input type="Email" name="email" className="edit_profile_input" value={user.email} onChange={(e) => onInputChange(e)}></input>
                Contact : <input type="tel" name="contact_no" value={user.contact_no} onChange={(e) => onInputChange(e)}></input>
                Address : <input type="text" name="address" value={user.address} onChange={(e) => onInputChange(e)}></input>
            </div>
        </Card>
        </>
    )
};


export default Edit_profile;