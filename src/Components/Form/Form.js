import React from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function CustomForm(){
    const [form] = React.useState({
        email: '',
        password: '',
        edad: 0
    })

    function grabar(event){
        console.log(event)
        sentForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    function enviarDatos(event){
        event.preventDefault() //Evita enviar el form sin que nosotros querramos
        alert(JSON.stringify(form))
    }

    return(
        <Form onSubmit={enviarDatos}>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>    
            <Form.Control onChange={(event) => { grabar(event) }} type='email' name='email'placeholder=""
            </Form.Group>
            </Form>
    )
}