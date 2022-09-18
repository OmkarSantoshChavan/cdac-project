import React, { useState } from 'react'
import { RadioButton } from 'primereact/radiobutton';
import axios from 'axios';
import './Style.css';
import { useNavigate } from "react-router-dom";
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import { InputText } from 'primereact/inputtext';
import { useFormik } from 'formik';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import { classNames } from 'primereact/utils';

function Register() {
    const [showMessage, setShowMessage] = useState(false);
    const [formData, setFormData] = useState({});

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            contact_no: '',
            address: '',
            aadhar_card: '',
            owner:false,
            customer:false
        },
        validate: (data) => {
            let errors = {};

            if (!data.name) {
                errors.name = 'Name is required.';
            }

            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
                errors.rent = 'Email Valid Email.';
            }

            if (!data.password) {
                errors.password = 'Password is required.';
            }

            if (!/^[6-9]\d{9}$/i.test(data.contact_no)) {
                errors.contact_no = 'Enter valid Contact Number.';
            }

            if (!data.address) {
                errors.address = 'Address is required.';
            }

            if (!/^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$/i.test(data.aadhar_card)) {
                errors.aadhar_card = 'Enter valid Aadhar Number.';
            }

            return errors;
        },
        onSubmit: (data) => {
            setFormData(data);
            
            setShowMessage(true);
            let {name,email,password,contact_no,address,aadhar_card,owner,customer}=data; 
            
            //addDataToServer(data);
            console.log(data);
            formik.resetForm();
        }
    });

    const [user, setUser] = useState(formik);

    const navigate = useNavigate();

    const [roleName, setRoleName] = useState('');

    const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);
    const getFormErrorMessage = (name) => {
        return isFormFieldValid(name) && <small className="p-error">{formik.errors[name]}</small>;
    };

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
        

    </div>)
    console.log(roleName, "role")
    return (
        <div className="flex align-items-center justify-content-center">
        <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
        <div className="text-center mb-5">
            <img src={Image} alt="hyper" height={50} className="mb-3" />
            <div className="text-900 text-3xl font-medium mb-3">Welcome Back</div>
        </div>
        
        <div className="field">
            <span className="p-float-label">
                <InputText id="name"  autoFocus className={classNames({ 'p-invalid': isFormFieldValid('name') })} value={formik.values.name} onChange={formik.handleChange} />
                <label htmlFor="name" className={classNames({ 'p-error': isFormFieldValid('name') })}>Name*</label>
            </span>
            {getFormErrorMessage('name')}
        </div>
        <div className="field">
            <span className="p-float-label p-input-icon-right">
                <i className="pi pi-envelope" />
                <InputText id="email" className={classNames({ 'p-invalid': isFormFieldValid('email') })} value={formik.values.email} onChange={formik.handleChange}/>
                <label htmlFor="email" className={classNames({ 'p-error': isFormFieldValid('email') })}>Email*</label>
            </span>
            {getFormErrorMessage('email')}
        </div>                  
        <div className="field">
            <span className="p-float-label">
                <Password id="password" toggleMask className={classNames({ 'p-invalid': isFormFieldValid('password') })} value={formik.values.password} onChange={formik.handleChange} />
                <label htmlFor="password" className={classNames({ 'p-error': isFormFieldValid('password') })}>Password*</label>
            </span>
            {getFormErrorMessage('password')}
        </div>
        <div className="field">
            <span className="p-float-label p-input-icon-right">
                    
                <InputText id="contact_no" name="contact_no" value={formik.values.contact_no} onChange={formik.handleChange} className={classNames({ 'p-invalid': isFormFieldValid('contact_no') })}  />
                <label htmlFor="contact_no" className={classNames({ 'p-error': isFormFieldValid('contact_no') })}>Contact Number*</label>
            </span>
            {getFormErrorMessage('contact_no')}
        </div>
        <div className="field">
            <span className="p-float-label">
                <InputText id="address" value={formik.values.address} onChange={formik.handleChange} autoFocus className={classNames({ 'p-invalid': isFormFieldValid('address') })} />
                <label htmlFor="address" className={classNames({ 'p-error': isFormFieldValid('address') })}>Address*</label>
            </span>
            {getFormErrorMessage('address')}
        </div>
        <div className="field">
            <span className="p-float-label p-input-icon-right">
                <InputText id="aadhar_card" name="aadhar_card" value={formik.values.aadhar_card} onChange={formik.handleChange} className={classNames({ 'p-invalid': isFormFieldValid('aadhar_card') })} />
                <label htmlFor="aadhar_card" className={classNames({ 'p-error': isFormFieldValid('aadhar_card') })}>Aadhar Number*</label>
            </span>
            {getFormErrorMessage('aadhar_card')}
        </div>
        <div class="form-group role-input-box" style={{ margin: '10px' }}>
            <label htmlFor="role" style={{ margin: '10px' }}>Role :</label>
            <div className="field-radiobutton" style={{ margin: '10px' }}>
                <RadioButton
                    inputId="role1"
                    name="owner"
                    //value={formik.values.o} onChange={formik.handleChange}
                    checked={formik.values.owner} onChange={formik.handleChange}
                />
                <label htmlFor="role1">Owner</label>
            </div>
            <div className="field-radiobutton" style={{ margin: '10px' }}>
                <RadioButton
                    inputId="role2"
                    name="customer"
                    //value={formik.values.address} 
                    checked={formik.values.customer} onChange={formik.handleChange}
                    //onChange={(e) => { handleRadioChange(e) }}
                    //checked={roleName === 'customer'}
                />
                <label htmlFor="role2">Customer</label>
            </div>
            <div div className="field">
            <Button type="submit" className='register-button' onClick={FormHandle}>Register</Button>
            <Button type="button" className="clear-button" onClick={() => { setUser(formik); setRoleName(""); }}> Clear</Button>
            </div>
        </div>
    </div>
</div>
    )
}
export default Register;