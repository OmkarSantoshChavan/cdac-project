import "primeicons/primeicons.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import axios from 'axios';
import React, { useState } from "react";
import { useFormik } from "formik";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Password } from "primereact/password";
import { Dialog } from "primereact/dialog";
import { Divider } from "primereact/divider";
import { classNames } from "primereact/utils";
import { Card } from "primereact/card";
import Image from '../Images/TravelBuddy.png';
import ".././Style.css";
import Navbar from "../../Navbar";

export const Edit_profile = (props) => {

    const [showMessage, setShowMessage] = useState(false);
    const [formData, setFormData] = useState({});

    let { name, email, password, address, contact_no } = location?.state || {};

    const formik = useFormik({
        initialValues: {
            name: name,
            email: email,
            password: password,
            address: address,
            contact_no: contact_no,
        },
        validate: (data) => {
            let errors = {};

            if (!data.name) {
                errors.name = "Name is required.";
            }

            if (!data.email) {
                errors.email = "Email is required.";
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)
            ) {
                errors.email = "Invalid email address. E.g. example@email.com";
            }

            if (!data.password) {
                errors.password = "Password is required.";
            }

            if (!data.address) {
                errors.address = "Address is required.";
            }

            if (!/^[6-9]\d{9}$/i.test(data.contact_no)) {
                errors.contact_no = "Contact No. is required.";
            }

            return errors;
        },
        onSubmit: (data) => {

            setFormData(data);
            axios.post("http://localhost:8080/registeruser", data).then(
                (response) => {
                    console.log(response);
                }, (error) => {
                    console.log(error);
                }
            );
            setShowMessage(true);

            formik.resetForm();
        },
    });


    const isFormFieldValid = (name) =>
        !!(formik.touched[name] && formik.errors[name]);
    const getFormErrorMessage = (name) => {
        return (
            isFormFieldValid(name) && (
                <small className="p-error">{formik.errors[name]}</small>
            )
        );
    };

    const dialogFooter = (
        <div className="p-d-flex p-jc-center">
            <Button
                label="OK"
                className="p-button-text"
                autoFocus
                onClick={() => setShowMessage(false)}
            />
        </div>
    );
    const passwordHeader = <h6>Pick a password</h6>;
    const passwordFooter = (
        <React.Fragment>
            <Divider />
            <p className="p-mt-2">Suggestions</p>
            <ul className="p-pl-2 p-ml-2 p-mt-0" style={{ lineHeight: "1.5" }}>
                <li>At least one lowercase</li>
                <li>At least one uppercase</li>
                <li>At least one numeric</li>
                <li>Minimum 8 characters</li>
            </ul>
        </React.Fragment>
    );

    const header = (<>
        <img src={Image} alt="hyper" height={80} style={{ width: "20%" }} className="mb-3" />
        <h3 className="p-text-center">Edit Profile</h3>
    </>);

    const editStyle = {
        width: '50%',
        margin: '2% 25%',
        overflow: 'auto',
        height: '448px',
    }

    return (
        <>
            <Navbar />
            <Card className="form-demo" header={header} style={editStyle} >
                <Dialog
                    visible={showMessage}
                    onHide={() => setShowMessage(false)}
                    position="top"
                    footer={dialogFooter}
                    showHeader={false}
                    breakpoints={{ "960px": "80vw" }}
                    style={{ width: "30vw" }}
                >
                    <div className="p-d-flex p-ai-center p-dir-col p-pt-6 p-px-3">
                        <i
                            className="pi pi-check-circle"
                            style={{ fontSize: "5rem", color: "var(--green-500)" }}
                        ></i>
                        <h5>Edit Profile Successful!</h5>
                        <p style={{ lineHeight: 1.5, textIndent: "1rem" }}>
                            Your account is edited under name <b>{formData.name}</b> ;
                        </p>
                    </div>
                </Dialog>

                <div className="p-d-flex p-jc-center" style={{ marginTop: "-66px" }}>
                    <div className="card">
                        <form onSubmit={formik.handleSubmit} className="p-fluid">
                            <div className="p-field">
                                <span className="p-float-label">
                                    <InputText
                                        id="name"
                                        name="name"
                                        value={formik.values.name}
                                        onChange={formik.handleChange}
                                        autoFocus
                                        className={classNames({
                                            "p-invalid": isFormFieldValid("name"),
                                        })}
                                    />
                                    <label
                                        htmlFor="name"
                                        className={classNames({
                                            "p-error": isFormFieldValid("name"),
                                        })}
                                    >
                                        Name*
                                    </label>
                                </span>
                                {getFormErrorMessage("name")}
                            </div>
                            <div className="p-field">
                                <span className="p-float-label p-input-icon-right">
                                    <i className="pi pi-envelope" />
                                    <InputText
                                        id="email"
                                        name="email"
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        className={classNames({
                                            "p-invalid": isFormFieldValid("email"),
                                        })}
                                    />
                                    <label
                                        htmlFor="email"
                                        className={classNames({
                                            "p-error": isFormFieldValid("email"),
                                        })}
                                    >
                                        Email*
                                    </label>
                                </span>
                                {getFormErrorMessage("email")}
                            </div>

                            <div className="p-field">
                                <span className="p-float-label p-input-icon-right">
                                    <InputText
                                        id="contact_no"
                                        name="contact_no"
                                        value={formik.values.contact_no}
                                        onChange={formik.handleChange}
                                        className={classNames({
                                            "p-invalid": isFormFieldValid("contact_no"),
                                        })}
                                    />
                                    <label
                                        htmlFor="contact_no"
                                        className={classNames({
                                            "p-error": isFormFieldValid("contact_no"),
                                        })}
                                    >
                                        Contact No*
                                    </label>
                                </span>
                                {getFormErrorMessage("contact_no")}
                            </div>

                            <div className="p-field">
                                <span className="p-float-label p-input-icon-right">
                                    <InputText
                                        id="address"
                                        name="address"
                                        value={formik.values.address}
                                        onChange={formik.handleChange}
                                        className={classNames({
                                            "p-invalid": isFormFieldValid("address"),
                                        })}
                                    />
                                    <label
                                        htmlFor="address"
                                        className={classNames({
                                            "p-error": isFormFieldValid("address"),
                                        })}
                                    >
                                        Address*
                                    </label>
                                </span>
                                {getFormErrorMessage("address")}
                            </div>

                            <div className="p-field">
                                <span className="p-float-label">
                                    <Password
                                        id="password"
                                        name="password"
                                        value={formik.values.password}
                                        onChange={formik.handleChange}
                                        toggleMask
                                        className={classNames({
                                            "p-invalid": isFormFieldValid("password"),
                                        })}
                                        header={passwordHeader}
                                        footer={passwordFooter}
                                    />
                                    <label
                                        htmlFor="password"
                                        className={classNames({
                                            "p-error": isFormFieldValid("password"),
                                        })}
                                    >
                                        Password*
                                    </label>
                                </span>
                                {getFormErrorMessage("password")}
                            </div>


                            <Button type="submit" label="Submit" className="p-mt-2" />
                        </form>
                    </div>
                </div>
            </Card>
        </>
    );
};

Edit_profile.defaultProps = {
    defaultRoles: [
        {
            value: "customer",
            label: "Customer",
        },
        {
            value: "owner",
            label: "Owner",
        },
    ],
};

export default Edit_profile;
