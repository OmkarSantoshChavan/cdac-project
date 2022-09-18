import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import { useNavigate,useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { Dialog } from 'primereact/dialog';
import { classNames } from 'primereact/utils';
import './Style.css';
import { Card } from 'primereact/card';
import axios from 'axios';

const Add_property = () => {
   
    const [showMessage, setShowMessage] = useState(false);
    const [formData, setFormData] = useState({});
    const location = useLocation();
    const navigate = useNavigate();
    let { userid } = location.state ||{};
    useEffect(() => {
       
    }, []); 

    const formik = useFormik({
        initialValues: {
            address: '',
            rent: '',
            desc: '',
            pincode: '',
            area_name:'',
            city: '',
            furnished: false,
            parking: false,
            security_guard: false,
            lift: false,
            cctv: false
        },
        validate: (data) => {
            let errors = {};

            if (!data.address) {
                errors.address = 'Address is required.';
            }

            if (!/[+-]?([0-9]*[.])?[0-9]+/i.test(data.rent)) {
                errors.rent = 'Enter Valid Rent amount.';
            }

            if (!data.desc) {
                errors.desc = 'Description is required.';
            }

            if (!/^[1-9][0-9]{5}$/i.test(data.pincode)) {
                errors.pincode = 'Enter valid Pincode.';
            }

            if (!data.area_name) {
                errors.area_name = 'Area name is required.';
            }

            if (!data.city) {
                errors.city = 'City is required.';
            }

            return errors;
        },
        onSubmit: (data) => {
            setFormData(data);
            
            setShowMessage(true);
            let {pincode,rent,cctv,furnished,lift,security_guard,parking}=data; 
            let param = {
                ...data,
                pincode : parseInt(pincode),
                rent : parseInt(rent),
                cctv : cctv ? 'yes' : 'no',
                furnished : furnished ? 'yes' : 'no',
                lift : lift ? 'yes' : 'no',
                parking : parking ? 'yes' : 'no',
                security_guard : security_guard ? 'yes' : 'no'
            };
            axios.post(`http://localhost:8080/addproperty/${userid}`, param).then(
            (response) => {
                console.log(response.data);
                navigate("/owner",{state:location.state})
            }, (error) => {
                console.log(error);
                alert("Invalid credentials !!!");
            }
        );
            formik.resetForm();
        }
    });

    const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);
    const getFormErrorMessage = (name) => {
        return isFormFieldValid(name) && <small className="p-error">{formik.errors[name]}</small>;
    };

    const dialogFooter = <div className="flex justify-content-center"><Button label="OK" className="p-button-text" autoFocus onClick={() => setShowMessage(false)} /></div>;

    return (
        <Card>
        <div className="form-demo">
            <Dialog visible={showMessage} onHide={() => setShowMessage(false)} position="top" footer={dialogFooter} showHeader={false} breakpoints={{ '960px': '80vw' }} style={{ width: '30vw' }}>
                <div className="flex align-items-center flex-column pt-6 px-3">
                    <i className="pi pi-check-circle" style={{ fontSize: '5rem', color: 'var(--green-500)' }}></i>
                    <h5>Registration Successful!</h5>
                    <p style={{ lineHeight: 1.5, textIndent: '1rem' }}>
                        Your property is added Successfully 
                    </p>
                </div>
            </Dialog>
            <div className="flex justify-content-center">
                <div className="card">
                    <h5 className="text-center">Add Property</h5>
                    <form onSubmit={formik.handleSubmit} className="p-fluid">
                        <div className="field">
                            <span className="p-float-label">
                                <InputText id="address" name="address" value={formik.values.address} onChange={formik.handleChange} autoFocus className={classNames({ 'p-invalid': isFormFieldValid('address') })} />
                                <label htmlFor="address" className={classNames({ 'p-error': isFormFieldValid('address') })}>House/Flat no. and name*</label>
                            </span>
                            {getFormErrorMessage('address')}
                        </div>
                        <div className="field">
                            <span className="p-float-label p-input-icon-right">
                                <InputText id="rent" name="rent" value={formik.values.rent} onChange={formik.handleChange} className={classNames({ 'p-invalid': isFormFieldValid('rent') })} />
                                <label htmlFor="rent" className={classNames({ 'p-error': isFormFieldValid('rent') })}>Rent*</label>
                            </span>
                            {getFormErrorMessage('rent')}
                        </div>
                        <div className="field">
                        <span className="p-float-label p-input-icon-right">
                                <InputText id="desc" name="desc" value={formik.values.desc} onChange={formik.handleChange} className={classNames({ 'p-invalid': isFormFieldValid('desc') })} />
                                <label htmlFor="desc" className={classNames({ 'p-error': isFormFieldValid('desc') })}>Description*</label>
                            </span>
                            {getFormErrorMessage('desc')}
                        </div>
                        <div className="field">
                        <span className="p-float-label p-input-icon-right">
                                <InputText id="pincode" name="pincode" value={formik.values.pincode} onChange={formik.handleChange} className={classNames({ 'p-invalid': isFormFieldValid('pincode') })} />
                                <label htmlFor="pincode" className={classNames({ 'p-error': isFormFieldValid('pincode') })}>Pincode*</label>
                            </span>
                            {getFormErrorMessage('pincode')}
                        </div>
                        <div className="field">
                        <span className="p-float-label p-input-icon-right">
                                <InputText id="area_name" name="area_name" value={formik.values.area_name} onChange={formik.handleChange} className={classNames({ 'p-invalid': isFormFieldValid('area_name') })} />
                                <label htmlFor="area_name" className={classNames({ 'p-error': isFormFieldValid('area_name') })}>Area Name*</label>
                            </span>
                            {getFormErrorMessage('area_name')}
                        </div>
                        <div className="field">
                        <span className="p-float-label p-input-icon-right">                               
                                <InputText id="city" name="city" value={formik.values.city} onChange={formik.handleChange} className={classNames({ 'p-invalid': isFormFieldValid('city') })} />
                                <label htmlFor="city" className={classNames({ 'p-error': isFormFieldValid('city') })}>City*</label>
                            </span>
                            {getFormErrorMessage('city')}
                        </div>
                        <div className="field-checkbox">
                            <Checkbox inputId="furnished" name="furnished" checked={formik.values.furnished} onChange={formik.handleChange} />
                            <label htmlFor="furnished">Furnished</label>
                            <Checkbox inputId="parking" name="parking" checked={formik.values.parking} onChange={formik.handleChange}  />
                            <label htmlFor="parking" >Parking</label>
                            <Checkbox inputId="security_guard" name="security_guard" checked={formik.values.security_guard} onChange={formik.handleChange}  />
                            <label htmlFor="security_guard" >Security Guard</label>
                            <Checkbox inputId="lift" name="lift" checked={formik.values.lift} onChange={formik.handleChange} />
                            <label htmlFor="lift" >Lift</label>
                            <Checkbox inputId="cctv" name="cctv" checked={formik.values.cctv} onChange={formik.handleChange} />
                            <label htmlFor="cctv" >CCTV</label>
                        </div>
                        <Button type="submit" label="Add Property" className="mt-2" />
                    </form>
                </div>
            </div>
        </div>
        </Card>
    );
}
                
export default Add_property;