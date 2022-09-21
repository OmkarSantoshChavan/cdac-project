import React, { useState } from 'react'
import axios from 'axios';
import { InputText } from 'primereact/inputtext';
import { useNavigate } from "react-router-dom";
import { Button } from 'primereact/button';
import  Image  from './TravelBuddy.png';
import Homepage from './Homepage';

function LoginForm() {
    const [customer, setCustomer] = useState({

        email: '',
        password: ''
    });

    var emailreg = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    const navigate = useNavigate();

    const onInputChange = e => {
        setCustomer({ ...customer, [e.target.name]: e.target.value })
    }
    const { email, password } = customer;

    const FormHandle = e => {
        e.preventDefault();
        if(!emailreg.test(email))
        alert("Invalid Email");
        else
        addDataToServer(customer)
    }

    const addDataToServer = (data) => {
        axios.post("http://localhost:8080/login", data).then(
            (response) => {
                localStorage.setItem('userid', response?.data?.userid);
                if(response.data.role === "admin")
                {
                    localStorage.setItem("loggedinuser",JSON.stringify(response.data));
                    navigate('/admin',{state:response.data});
                }
                else if(response.data.role === "owner")
                {
                    localStorage.setItem("loggedinuser",JSON.stringify(response.data));
                    navigate('/owner',{state:response.data});
                }
                else if(response.data.role === "customer")
                {
                    localStorage.setItem("loggedinuser",JSON.stringify(response.data));
                    navigate('/customer',{state:response.data});
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

    return (
        <Homepage>
        <div className="flex align-items-center justify-content-center">
        <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
        <div className="text-center mb-5">
            <img src={Image} alt="hyper" height={80} className="mb-3" />
            <div className="text-900 text-3xl font-medium mb-3">Welcome Back</div>
        </div>

        <div>
            <label htmlFor="email" className="block text-900 font-medium mb-2">Email</label>
            <InputText id="email" name="email" type="text" className="w-full mb-3" value={email} onChange={(e) => onInputChange(e)}/>

            <label htmlFor="password" className="block text-900 font-medium mb-2">Password</label>
            <InputText id="password" name="password" type="password" className="w-full mb-3" value={password} onChange={(e) => onInputChange(e)} required />

            <Button type='submit' label="Sign In" icon="pi pi-user" className="w-full" onClick={FormHandle} />
            <span className="text-600 font-medium line-height-3">Don't have an account?</span>
            <a className="font-medium no-underline ml-2 text-blue-500 cursor-pointer" onClick={() => { navigate("/Register"); }}>Register Here</a>
        </div>
    </div>
</div>

</Homepage>
    )
}
export default LoginForm;