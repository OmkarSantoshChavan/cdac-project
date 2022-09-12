import React, { useState } from 'react'
import axios from 'axios';

function Registeruser() {
    const [user, setUser] = useState({
           
        name: '',
        email: '',
        password:'',
        contact_no:'',
        address: '',
        aadhar_card:'',
        role:''
    });
    
    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    const { name, email,password,contact_no, address,aadhar_card,role } = user;
    
    const FormHandle = e => {
        e.preventDefault();
        console.log(JSON.stringify(user))
        addDataToServer(user)
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
    return (
        <div>
            <div className="container">
                <div className="w-75 mx-auto shadow p-5 mt-2 bg-light">
                    <div class="jumbotron">
                        <h1 class="display-4 text-center">Register User!</h1>
                        <div>
                            <form onSubmit={e => FormHandle(e)}>

                                <div class="form-group">
                                    <label for="name"> Name</label>
                                    <input type="text" class="form-control" name="name"  placeholder="Enter name" value={name} onChange={(e) => onInputChange(e)} />
                                </div>

                                <div class="form-group">
                                    <label for="email">Email</label>
                                    <input type="email" class="form-control" name="email"  placeholder="abc@gmail.com" value={email} onChange={(e) => onInputChange(e)} />
                                </div>

                                <div class="form-group">
                                    <label for="Password">Password</label>
                                    <input type="password" class="form-control" name="password"  placeholder=" " value={password} onChange={(e) => onInputChange(e)} />
                                </div>

                                <div class="form-group">
                                    <label for="contact_no">Contact no</label>
                                    <input type="text" class="form-control" name="contact_no"  placeholder=" " value={contact_no} onChange={(e) => onInputChange(e)} />
                                </div>

                                <div class="form-group">
                                    <label for="address">Address</label>
                                    <input type="text" class="form-control" name="address"  placeholder="Enter address" value={address} onChange={(e) => onInputChange(e)} />
                                </div>
                                
                                <div class="form-group">
                                    <label for="aadhar_card">Aadhar_card</label>
                                    <input type="text" class="form-control" name="aadhar_card"  placeholder="xxxxxxxxxxxx" value={aadhar_card} onChange={(e) => onInputChange(e)} />
                                </div>
                                
                                <div class="form-group">
                                    <label for="role">Role</label>
                                    <input type="text" class="form-control" name="role"  placeholder="owner/customer" value={role} onChange={(e) => onInputChange(e)} />
                                </div>
                                
                            
                                <div className="container text-center">
                                    <button type="submit" class="btn btn-outline-secondary my-2 text-center mr-2">Register</button>
                                
                               <button type="clear" class="btn btn-outline-secondary my-2 text-center mr-2">Clear<a href="/Registeruser.js"></a></button> 

                                    
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Registeruser;