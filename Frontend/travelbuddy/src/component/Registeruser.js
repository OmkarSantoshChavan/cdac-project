import React, { useState } from 'react'
import { RadioButton } from 'primereact/radiobutton';
import axios from 'axios';
import './Style.css';
import { Card } from 'primereact/card';
import {Button} from 'primereact/button';
import { useNavigate } from "react-router-dom";

function Registeruser() {
    const userdetail={
        name: '',
        email: '',
        password: '',
        contact_no: '',
        address: '',
        aadhar_card: ''
    }
    const [user, setUser] = useState(userdetail);

    const navigate = useNavigate();

    const [roleName, setRoleName] = useState('');


    const handleRadioChange = (e) => {
        setRoleName(e.value);
    }

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    const { name, email, password, contact_no, address, aadhar_card } = user;

    const FormHandle = e => {
        e.preventDefault();

        addDataToServer({...user,role:roleName})
    }

    const addDataToServer = (data) => {
        axios.post("http://localhost:8080/registeruser", data).then(
            (response) => {
                console.log(response);
                alert("User Added Successfully");
            }, (error) => {
                console.log(error);
                alert("Failed to add user !!!");
            }
        );
    }


    const header = (<h1 class="display-4 text-center">Register User!</h1>);

    const footer = (<div className="container text-center">
        <Button type="submit" className='register-button' onClick={FormHandle}>Register</Button>

        <Button type="button" className="clear-button" onClick={() => { setUser(userdetail); setRoleName(""); }}> Clear</Button>

    </div>)
    console.log(roleName, "role")
    return (

        <div className='register-bg'>
        <Card className="container" header={header}  footer={footer}>
            <div className="w-75 mx-auto shadow p-5 mt-2 bg-light">
                <div class="jumbotron">
                    <div>
                        <form  style={{textAlign: 'justify'}}>

                            <div class="form-group" style={{ margin: '10px' }}>
                                <label for="name" style={{ margin: '29px' }}> Name</label>
                                <input type="text" class="form-control" name="name" placeholder="Enter name" value={name} onChange={(e) => onInputChange(e)} />
                            </div>

                            <div class="form-group" style={{ margin: '10px' }}>
                                <label for="email" style={{ margin: '31px' }}>Email</label>
                                <input type="email" class="form-control" name="email" placeholder="abc@gmail.com" value={email} onChange={(e) => onInputChange(e)} />
                            </div>

                            <div class="form-group" style={{ margin: '10px' }}>
                                <label for="Password" style={{ margin: '17px' }}>Password</label>
                                <input type="password" class="form-control" name="password" placeholder=" " value={password} onChange={(e) => onInputChange(e)} />
                            </div>

                            <div class="form-group" style={{ margin: '10px' }}>
                                <label for="contact_no" style={{ margin: '11px' }}>Contact no</label>
                                <input type="text" class="form-control" name="contact_no" placeholder=" " value={contact_no} onChange={(e) => onInputChange(e)} />
                            </div>

                            <div class="form-group" style={{ margin: '10px' }}>
                                <label for="address" style={{ margin: '21px' }}>Address</label>
                                <input type="text" class="form-control" name="address" placeholder="Enter address" value={address} onChange={(e) => onInputChange(e)} />
                            </div>

                            <div class="form-group" style={{ margin: '10px' }}>
                                <label for="aadhar_card" style={{ margin: '5px' }}>Aadhar_card</label>
                                <input type="text" class="form-control" name="aadhar_card" placeholder="xxxxxxxxxxxx" value={aadhar_card} onChange={(e) => onInputChange(e)} />
                            </div>

                            <div class="form-group role-input-box" style={{ margin: '10px' }}>
                                <label htmlFor="role" style={{ margin: '10px' }}>Role :</label>
                                <div className="field-radiobutton" style={{ margin: '10px' }}>
                                    <RadioButton
                                        inputId="role1"
                                        name="owner"
                                        value="owner"
                                        onChange={(e) => { handleRadioChange(e) }}
                                        checked={roleName === 'owner'}
                                    />
                                    <label htmlFor="role1">Owner</label>
                                </div>
                                <div className="field-radiobutton" style={{ margin: '10px' }}>
                                    <RadioButton
                                        inputId="role2"
                                        name="customer"
                                        value="customer"
                                        onChange={(e) => { handleRadioChange(e) }}
                                        checked={roleName === 'customer'}
                                    />
                                    <label htmlFor="role2">Customer</label>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </Card>
        </div>
    )
}
export default Registeruser;