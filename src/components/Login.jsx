import { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const Login = ({ user }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (username === user.username && password === user.password) {
            navigate('/dashboard');
        } else {
            alert('Invalid username or password');
        }
    };

    return (
        <Container className='mx-auto py-5'>
            <h2>Login</h2>
            <Form onSubmit={handleLogin}>
                <Form.Group controlId='username'>
                    <Form.Label>Username:</Form.Label>
                    <Form.Control
                        type='text'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId='password'>
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button className='mt-3' variant='primary' type='submit'>
                    Login
                </Button>
            </Form>
        </Container>
    );
};

Login.propTypes = {
    user: PropTypes.array,
};

export default Login;
