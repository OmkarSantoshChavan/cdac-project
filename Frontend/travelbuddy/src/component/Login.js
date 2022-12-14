import React, { useState } from 'react'
import axios from 'axios';
import { Card } from 'primereact/card';
import { useNavigate } from "react-router-dom";
import { Button } from 'primereact/button';


function LoginPage() {
    const [customer, setCustomer] = useState({

        email: '',
        password: ''
    });

    const navigate = useNavigate();


    const onInputChange = e => {
        setCustomer({ ...customer, [e.target.name]: e.target.value })
    }
    const { email, password } = customer;


    const FormHandle = e => {
        e.preventDefault();
        addDataToServer(customer)
    }

    const addDataToServer = (data) => {
        axios.post("http://localhost:8080/login", data).then(
            (response) => {
                console.log(response.data);
                if(response.data.role === "admin")
                {
                    localStorage.setItem("loggedinuser",JSON.stringify(response.data));
                    navigate('/admin');
                }
                else if(response.data.role === "owner")
                {
                    localStorage.setItem("loggedinuser",JSON.stringify(response.data));
                    navigate('/owner');
                }
                else if(response.data.role === "customer")
                {
                    localStorage.setItem("loggedinuser",JSON.stringify(response.data));
                    navigate('/customer');
                }

                //alert(" login Successfully");
            }, (error) => {
                console.log(error);
                alert("Invalid credentials !!!");
            }
        );
    }

    const containerStyle = {
        textAlign: 'justify',
    }


    const footer = (<div className="container text-center">
        <Button type="submit" className='login-button' onClick={FormHandle}>Login</Button>

        <Button type="button" className="register-button" onClick={() => { navigate("/Registeruser"); }}> Register</Button>


    </div>)


    const header = (<h1 class="display-4 text-center">Login Page</h1>);
    
        
    
    return (
        <Card header={header} footer={footer}>
            <div className="container">
                <div className="w-75 mx-auto shadow p-5 mt-2 bg-light">
                    <div class="jumbotron">
                        <div style={containerStyle}>
                            <form onSubmit={e => FormHandle(e)}>

                                <div class="form-group" style={{ margin: '10px' }}>
                                    <label for="exampleInputemail" style={{ margin: '29px' }}>Email</label>
                                    <input type="text" class="form-control" name="email" placeholder="email Here" value={email} onChange={(e) => onInputChange(e)} />
                                </div>

                                <div class="form-group" style={{ margin: '10px' }}>
                                    <label for="exampleInputPassword1" style={{ margin: '15px' }}>Password</label>
                                    <input type="password" class="form-control" name="password" placeholder="Enter Here" value={password} onChange={(e) => onInputChange(e)} />
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    )
}
export default LoginPage;