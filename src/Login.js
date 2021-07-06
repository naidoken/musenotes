import React from 'react'
import { Button, Container, Form } from 'react-bootstrap';
import { useState, useEffect } from 'react';

export default function Login() {
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [isChecked, setIsChecked] = useState(false);

    function validateForm() {
        return mail.length > 0 && password.length > 0
    }
    function handleSubmit(event) {
        event.preventDefault()
        console.log(mail, password, isChecked)
    }

    return (
        <Container className='d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control autoFocus type="email" value={mail} placeholder="Enter email" onChange={e => { setMail(e.target.value) }} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={password} placeholder="Password" onChange={e => { setPassword(e.target.value) }} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" onChange={e => { setIsChecked(!isChecked) }} />
                </Form.Group>
                <Button block size="lg" type='submit' disabled={!validateForm()}>
                    Submit
                </Button>
            </Form>
        </Container>
    )
}
