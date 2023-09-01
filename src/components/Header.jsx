import { Container, Image, Navbar } from 'react-bootstrap';
import Logo from '../assets/sanlam-logo-vector.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar className='bg-dark py-4'>
            <Container className='justify-content-center'>
                <Navbar.Brand
                    as={Link}
                    to='/'
                    className='d-flex justify-content-center'>
                    <Image
                        className='mx-auto'
                        src={Logo}
                        style={{ width: '20%' }}
                    />
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
};

export default Header;
