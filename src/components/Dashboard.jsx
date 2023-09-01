import { Button, Container, Table } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const Dashboard = ({ transactions, user }) => {
    const navigate = useNavigate();

    return (
        <Container className='py-4'>
            <Button
                className='bg-white border-0 text-black'
                onClick={() => navigate(-1)}>
                {'<<'} Go Back
            </Button>
            <h2 className='mt-4'>Welcome, {user.name}!</h2>
            <p>Date of Birth: {user.date_of_birth}</p>
            <p>Telephone Number: {user.phoneNum}</p>
            <h3>Transaction History</h3>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Amount Paid</th>
                        <th>Date of Payment</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction) => (
                        <tr key={transaction.id}>
                            <td>{transaction.product}</td>
                            <td>{transaction.amount_paid}</td>
                            <td>{transaction.date_of_payment}</td>
                            <td>
                                <Link
                                    className='d-block mx-auto'
                                    to={`/transaction/${transaction.id}`}>
                                    <Button variant='primary'>
                                        View Details
                                    </Button>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

Dashboard.propTypes = {
    transactions: PropTypes.array,
    user: PropTypes.array,
};

export default Dashboard;
