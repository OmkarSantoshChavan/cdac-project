import React from "react";
import { Button } from 'primereact/button';
import { Link, unstable_HistoryRouter } from "react-router-dom";
import { useHistory } from 'react-router-dom'

function Homepage(){
    
    const handleLogin=()=>{
        useHistory
    }
    
    return <><div>
        <h1>Welcome to Homepage</h1>
    </div>
    <div>
    {/* <Link to="/login"><Button label="Login" /></Link> */}
    <Button label="Login" onClick={handleLogin}/>
    <Button label="Register" />
    </div>
    </>
}
export default Homepage;