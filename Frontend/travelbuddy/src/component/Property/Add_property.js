import React, { useState } from 'react'
import axios from 'axios';
import './Style.css';
import { Card } from 'primereact/card';
import {Button} from 'primereact/button';
import { InputTextarea } from 'primereact/inputtextarea';
import { useNavigate } from "react-router-dom";

function Add_property() {
    const propertydetail={
        address: '',
        pincode: '',
        rent: '',
        description: ''
    }
    const [property, setProperty] = useState(propertydetail);

    const navigate = useNavigate();

    const onInputChange = (e) => {
        setProperty({ ...property, [e.target.name]: e.target.value })
    }
    const { address, pincode, rent, description } = propertydetail;

    const addDataToServer = (data) => {
 /*changes*/      axios.post("http://localhost:8080/add_property", data).then(
            (response) => {
                console.log(response);
                alert("Property Added Successfully");
            }, (error) => {
                console.log(error);
                alert("Failed to add property !!!");
            }
        );
    }


    const header = (<h1 class="display-4 text-center">Add Property</h1>);

    const footer = (<div className="container text-center">
        <Button type="submit" className='register-button' onClick={onInputChange}>Add Property</Button>

        <Button type="button" className="clear-button" onClick={() => { setProperty(propertydetail) }}>Clear</Button>

    </div>)
    return (
        <div className='register-bg'>
        <Card className="container" header={header}  footer={footer}>
            <div className="w-75 mx-auto shadow p-5 mt-2 bg-light">
                <div class="jumbotron">
                    <div>
                        <form  style={{textAlign: 'justify'}}>

                            <div class="form-group" style={{ margin: '10px' }}>
                                <label for="address" style={{ margin: '29px' }}>Address</label>
                                <input type="text" class="form-control" name="name" placeholder="Address" value={address} onChange={(e) => onInputChange(e)} />
                            </div>

                            <div class="form-group" style={{ margin: '10px' }}>
                                <label for="pincode" style={{ margin: '29px' }}>Pincode</label>
                                <input type="number" class="form-control" name="pincode" value={pincode} onChange={(e) => onInputChange(e)} />
                            </div>

                            <div class="form-group" style={{ margin: '10px' }}>
                                <label for="rent" style={{ margin: '41px' }}>Rent</label>
                                <input type="number" class="form-control" name="rent" value={rent} onChange={(e) => onInputChange(e)} />
                            </div>

                            <div class="form-group" style={{ margin: '10px' }}>
                                <label for="description" style={{ margin: '11px' }}>Description</label>
                                {/*<input type="text" class="form-control" name="description" placeholder=" " value={description} onChange={(e) => onInputChange(e)} />*/}
                                <InputTextarea value={description} onChange={(e) => onInputChange(e)} rows={5} cols={30} />
                            </div>  
                        </form>
                    </div>
                </div>
            </div>
        </Card>
        </div>
    )
}
export default Add_property;