import "primeicons/primeicons.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import axios from 'axios';
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { Dialog } from "primereact/dialog";
import { Card } from "primereact/card";
import  Image  from './TravelBuddy.png';
import "./Style.css";
import Homepage from "./Homepage";

export const BookProperty = (props) => {
  let { defaultPmode,defaultPtype } = props;

  const [pmode, setPmode] = useState(defaultPmode);
  const [ptype, setPtype] = useState(defaultPtype);
  const [showMessage, setShowMessage] = useState(false);
  const [formData, setFormData] = useState({});

  const formik = useFormik({
    initialValues: {
      pid: "",
      booking_date: "",
      from_date: "",
      till_date: "",
      total_amt: "",
      amount: "",
      pmode: null,
      ptype: null
    },
   
    onSubmit: (data) => {
        
      setFormData(data);
      axios.post("http://localhost:8080/bookproperty", data).then(
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
  

  const header = (<>
      <img src={Image} alt="hyper" height={80} style={{width:"20%"}} className="mb-3" />
    <h1 className="p-text-center">Book Property</h1>
  </>);

  return (
    <Homepage>
      <Card className="form-demo" header={header} >
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
            <h5>Booking Successful!</h5>
            <p style={{ lineHeight: 1.5, textIndent: "1rem" }}>
              Your booking is successfull with name:<b>{formData.name}</b> ;
            </p>
          </div>
        </Dialog>

        <div className="p-d-flex p-jc-center" style={{marginTop: "-66px"}}>
          <div className="card">
            <form onSubmit={formik.handleSubmit} className="p-fluid">
              <div className="p-field">
                <span className="p-float-label">
                  <InputText
                    id="pid"
                    name="pid"
                    value={formik.values.pid}
                    onChange={formik.handleChange}
                    autoFocus
                    
                  />
                  <label
                    htmlFor="pid"
                    
                  >
                    pid*
                  </label>
                </span>
                
              </div>
              <div className="p-field">
                <span className="p-float-label p-input-icon-right">
                  
                  <InputText
                    id="booking_date"
                    name="booking_date"
                    value={formik.values.booking_date}
                    onChange={formik.handleChange}
                    
                  />
                  <label
                    htmlFor="booking_date"
                   
                  >
                    Booking Date*
                  </label>
                </span>
                
              </div>

              <div className="p-field">
                <span className="p-float-label p-input-icon-right">
                  <InputText
                    id="from_date"
                    name="from_date"
                    value={formik.values.contact_no}
                    onChange={formik.handleChange}
                    
                  />
                  <label
                    htmlFor="from_date"
                   
                  >
                    From Date*
                  </label>
                </span>
               
              </div>

              <div className="p-field">
                <span className="p-float-label p-input-icon-right">
                  <InputText
                    id="till_date"
                    name="till_date"
                    value={formik.values.address}
                    onChange={formik.handleChange}
                    
                  />
                  <label
                    htmlFor="till_date"
                    
                  >
                    Till Date*
                  </label>
                </span>
               
              </div>

              <div className="p-field">
                <span className="p-float-label p-input-icon-right">
                  <InputText
                    id="total_amt"
                    name="total_amt"
                    value={formik.values.total_amt}
                    onChange={formik.handleChange}
                    
                  />
                  <label
                    htmlFor="total_amt"
                   
                  >
                    Total Amount*
                  </label>
                </span>
               
              </div>

              <div className="p-field">
                <span className="p-float-label">
                  <InputText
                    id="amount"
                    name="amount"
                    value={formik.values.amount}
                    onChange={formik.handleChange}
                    toggleMask
                    
                    
                  />
                  <label
                    htmlFor="amount"
                    
                  >
                    Amount*
                  </label>
                </span>
               
              </div>
              <div className="p-field">
                <span className="p-float-label">
                  <Dropdown
                   
                    id="pmode"
                    name="pmode"
                    value={formik.values.pmode}
                    onChange={formik.handleChange}
                    options={defaultPmode}
                  />
                  <label htmlFor="country">Payment mode</label>
                </span>
               
              </div>
              <div className="p-field">
                <span className="p-float-label">
                  <Dropdown
                   
                    id="ptype"
                    name="ptype"
                    value={formik.values.ptype}
                    onChange={formik.handleChange}
                    options={defaultPtype}
                  />
                  <label htmlFor="country">Payment Type</label>
                </span>
                
              </div>


              <Button type="submit" label="Submit" className="p-mt-2" />
            </form>
          </div>
        </div>
      </Card>
    </Homepage>
  );
};

BookProperty.defaultProps = {
    defaultPmode: [
      {
        value: "cash",
        label: "Cash",
      },
      {
        value: "upi",
        label: "UPI",
      },
    ],
    defaultPtype: [
        {
            value:"advance",
            label:"Booking Amount"
        },
        {
            value:"full",
            label:"Full Payment"
        }
    ]
  };
export default BookProperty;
