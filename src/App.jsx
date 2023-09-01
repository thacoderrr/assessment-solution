// import { useState, useEffect } from 'react';
import { createServer } from 'miragejs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import { useEffect, useState } from 'react';
import TransactionDetail from './components/TransactionDetail';
import Header from './components/Header';

createServer({
    routes() {
        this.get('/api/users', () => ({
            user: {
                name: 'John Doe',
                username: 'john-doe',
                password: '1234',
                date_of_birth: '12/11/1999',
                phoneNum: '09017827061',
            },
            transactions: [
                {
                    product: 'BlueSky Technologies Inc. Stocks',
                    amount_paid: '$6037.06',
                    date_of_payment: '08-06-2023',
                    id: 1,
                },
                {
                    product: 'Global Bonds Portfolio (USD)',
                    amount_paid: '$1305.52',
                    date_of_payment: '11-06-2023',
                    id: 2,
                },
                {
                    product: 'Vanguard Growth Fund - Class A (Mutual Fund)',
                    amount_paid: '$5993.41',
                    date_of_payment: '15-11-2022',
                    id: 3,
                },
                {
                    product: 'Downtown Real Estate REIT',
                    amount_paid: '$4082.41',
                    date_of_payment: '10-09-2022',
                    id: 4,
                },
                {
                    product: 'Tech Innovators ETF (Exchange-Traded Fund)',
                    amount_paid: '$1014.40',
                    date_of_payment: '27-07-2023',
                    id: 5,
                },
                {
                    product: 'Secure Savings Certificate (12-Month CD)',
                    amount_paid: '$2612.37',
                    date_of_payment: '08-04-2023',
                    id: 6,
                },
                {
                    product: 'US Treasury Bills - Series 2023',
                    amount_paid: '$5047.37',
                    date_of_payment: '23-10-2022',
                    id: 7,
                },
                {
                    product:
                        'Precious Metals Diversified Fund (Gold and Silver)',
                    amount_paid: '$1706.17',
                    date_of_payment: '01-11-2022',
                    id: 8,
                },
                {
                    product: 'National Infrastructure Bonds - Series 23',
                    amount_paid: '$7453.86',
                    date_of_payment: '02-06-2023',
                    id: 9,
                },
                {
                    product:
                        'DigitalAsset Capital: Bitcoin Fund (Cryptocurrency)',
                    amount_paid: '$2114.11',
                    date_of_payment: '26-05-2023',
                    id: 10,
                },
            ],
        }));
    },
});

function App() {
    let [user, setUser] = useState([]);
    let [trans, setTrans] = useState([]);

    useEffect(() => {
        fetch('/api/users')
            .then((response) => response.json())
            .then((json) => {
                setTrans(json.transactions);
                setUser(json.user);
            });
    }, []);

    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<Login user={user} />} />
                    <Route
                        path='/dashboard'
                        element={<Dashboard transactions={trans} user={user} />}
                    />
                    <Route
                        path='/transaction/:id'
                        element={<TransactionDetail transactions={trans} />}
                    />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
