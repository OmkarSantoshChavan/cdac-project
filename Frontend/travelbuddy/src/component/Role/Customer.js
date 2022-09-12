import React from 'react'
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import './Style.css';

function Customer(props) {

    let { data } = props;

    const footer = (
        <span>
            <Button className='profile-button' label="Edit Profile" />
            <Button className='profile-button' label="View Property" />
        </span>
    );

    let { name, email, contact } = data;

    return (
        <Card title="Cutomer" subTitle="profile details" footer={footer}>
            <div className='profile-details'>
                <div> Name :  {name}</div>
                <div> Email id : {email}</div>
                <div> Contact : {contact} </div>
            </div>
        </Card>
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