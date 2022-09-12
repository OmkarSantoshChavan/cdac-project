import React, { useState } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";
import Registeruser from './Registeruser';
import { useNavigate } from "react-router-dom";

function LoginPage() {
    const [customer, setCustomer] = useState({
    
        email: '',
        password:''
    });

    const navigate = useNavigate();
      

    
    const onInputChange = e => {
        setCustomer({ ...customer, [e.target.name]: e.target.value })
    }
    const { email,password } = customer;

    

    const FormHandle = e => {
        e.preventDefault();
        addDataToServer(customer)
    }
    const addDataToServer = (data) => {
        axios.post("http://localhost:8080/login", data).then(
            (response) => {
                console.log(response);
                alert(" login Successfull");
            }, (error) => {
                console.log(error);
                alert("Invali credentials !!!");
            }
        );
    }
    return (
        <div>
            <div className="container">
                <div className="w-75 mx-auto shadow p-5 mt-2 bg-light">
                    <div class="jumbotron">
                        <h1 class="display-4 text-center">Login Page</h1>
                        <div>
                            <form onSubmit={e => FormHandle(e)}>
                               
                                <div class="form-group">
                                    <label for="exampleInputemail">Email</label>
                                    <input type="text" class="form-control" name="email"  placeholder="Enter Here" value={email} onChange={(e) => onInputChange(e)} />
                                </div>
                               
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input type="password" class="form-control" name="password"  placeholder="Enter Here" value={password} onChange={(e) => onInputChange(e)} />
                                </div>
                                <div className="container text-center">
                                    <button type="submit" class="btn btn-outline-secondary my-2 text-center mr-2">Login</button>
                                
                                    <button type="button" className="btn btn-primary" onClick={() => {navigate("/Registeruser");}}> Register</button>
                               
                                    
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LoginPage;