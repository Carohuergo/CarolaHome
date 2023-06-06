import { useState } from "react";
import { Button, Form } from "react-bootstrap";



export const CheckOutForm = ({ onConfirm }) => {

    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [confirmarEmail, setConfirmarEmail] = useState('');
    const [error, setError] = useState('');

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleChangeConfirmarEmail = (e) => {
        setConfirmarEmail(e.target.value);
    };


    const handleConfirm = (event) => {
        event.preventDefault()

        if (email !== confirmarEmail) {
            setError('Los correos electrónicos no coinciden');
        } else {
            // Continuar con el envío del formulario o realizar las acciones necesarias
            setError('');

            const userData = {
                name, phone, email
            }
            onConfirm(userData)
        }
    }

        return (
            <div style={{ width: "80%", marginLeft: 30, marginBottom: 20 }}>
                <h1 style={{ textAlign: "center", fontFamily: "Rubik', sans-serif", fontWeight: "300" }}>Check Out Form</h1>
                <Form onSubmit={handleConfirm}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Nombre y Apellido</Form.Label>
                        <Form.Control type="text" value={name} onChange={({ target }) => setName(target.value)} placeholder="Ingrese sus datos aqui" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" value={email} onChange={handleChangeEmail} placeholder="Ingrese su Email" required/>
                        <Form.Label>Confirmar Email</Form.Label>
                        <Form.Control type="email" value={confirmarEmail} onChange={handleChangeConfirmarEmail} placeholder="Ingrese su Email"required/>
                        {error && <p style={{color:"red"}}>{error}</p>}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPhone">
                        <Form.Label>Telefono de contacto</Form.Label>
                        <Form.Control type="phone" value={phone} onChange={({ target }) => setPhone(target.value)} placeholder="Ingrese su telefono aqui" required/>
                    </Form.Group>
                    {/* <Form.Select aria-label="Default select example" value={payment} onChange={({ target }) => setPayment(target.value)} style={{ marginBottom: 10 }}>
                    <option>Metodo de pago</option>
                    <option value="1">Efectivo</option>
                    <option value="2">Transferencia</option>
                    <option value="3">Mercado Pago</option>
                </Form.Select> */}
                    <Button variant="outline-dark" type="submit">Enviar</Button>
                </Form>
            </div>
        )
    }