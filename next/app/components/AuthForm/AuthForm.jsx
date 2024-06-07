import React from 'react'
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

export const AuthForm = () => {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Логин</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    Введите логин
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Пароль</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="запомнить" />
            </Form.Group>
            <Button variant="primary" type="submit">
                войти
            </Button>
        </Form>
    )
}
