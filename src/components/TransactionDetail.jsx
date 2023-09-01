// src/components/TransactionDetail.js
import { Container, Card, Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

const TransactionDetail = ({ transactions }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const transaction = transactions.find((txn) => txn.id === parseInt(id, 10));

    if (!transaction) {
        return <p className='text-center my-5'>Loading...</p>;
    }

    return (
        <Container className='py-4'>
            <Button
                className='bg-white border-0 text-black'
                onClick={() => navigate(-1)}>
                {'<<'} Go Back
            </Button>
            <h2 className='mt-5'>Transaction Detail</h2>
            <Card>
                <Card.Body>
                    <Card.Title>{transaction.product}</Card.Title>
                    <Card.Text>
                        Amount Paid: {transaction.amount_paid}
                    </Card.Text>
                    <Card.Text>
                        Date of Payment: {transaction.date_of_payment}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
};

TransactionDetail.propTypes = {
    transactions: PropTypes.array,
};

export default TransactionDetail;
