import React, { useEffect, useState } from 'react'
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { useNavigate,useLocation } from 'react-router-dom';
import './Style.css';
import ViewUsers from '../ViewUsers';
import axios from 'axios';

function Admin(props) {

    const navigate = useNavigate();
    const location = useLocation();
    const [userList,setUserList]=useState([]);
    const [showViewUsers,setShowViewUsers]=useState(false);
    let { name, email, contact_no,address } = location.state || {};
    
    const handleProfile = () => {
        navigate(`/edit_profile`,{state:location.state});
    }

    const handleShowUsers = () => {
       setShowViewUsers(!showViewUsers);
    }

    const footer = (
        <span>
            <Button className='profile-button' label="Edit Profile" onClick={handleProfile} />
            <Button className='profile-button' label={showViewUsers?"Go to Profile":"View Users"} onClick={handleShowUsers}/>
            <Button className='profile-button' label="View Properties" />

        </span>
    );
    
    useEffect(()=>{
        axios.get("http://localhost:8080/fetchallusers").then(
            (response) => {   
                setUserList(response?.data?.result);
            })
    },[])
   
    console.log(location)
    return (
        <Card title="Admin" subTitle={showViewUsers?"User Details":"profile details"} footer={footer}>
            {showViewUsers?<ViewUsers userData={userList}/> : <div className='profile-details'>
                <div> Name :  {name}</div>
                <div> Email id : {email}</div>
                <div> Contact : {contact_no} </div>
                <div> Address : {address}</div>
            </div>}
        </Card>
    )
};

Admin.defaultProps = {
    data: {
        name: 'abc',
        email: 'abc@xyz.com',
        contact: '1234'
    }
}

export default Admin;