import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

const CityInput=(props)=>{
    const [error,setError]=useState("");
    const handleInputChange=(event)=>{
        props.setCity(event.target.value);

    }
    const handleSubmit=()=>{
        if(!props.city){
            setError("city is empty");
        }
        else{
            setError("");
            props.fetchCityData();
        }
    }
    return(
        <Form className="m-5">
            <Form.Group controlId="formCity">
                <Form.Label>CityInput</Form.Label>
                <Form.Control type="text" placeholder="Enter City" onChange={handleInputChange}/>
            </Form.Group>
            <p className="text-danger">{error}</p>
            <Button variant="primary" onClick={handleSubmit}>
                Submit
            </Button>
        </Form>
    )
}
export default CityInput;