// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Shield } from 'phosphor-react'
import Card from '../components/Card'
import DashHeader from '../components/Common/DashHeader'


const DashboardHome = () => {
    const cards = [
        {
            icon: <Shield />,
            color: 'Performance Metrics',
            text: 'Savings',
            amount: '1000'
        },
        {
            icon: <Shield />,
            color: 'peaGreen',
            text: 'Transactions',
            amount: '1000',
            to: '/dashboard/transactions'
        },
        {
            icon: <Shield />,
            color: 'blueBg',
            text: 'Performance Metrics',
            amount: '1000'
        },
        {
            icon: <Shield />,
            color: 'neutralWhite',
            text: 'Tax Information',
            amount: '1000'
        },
        {
            icon: <Shield />,
            color: 'neutralWhite',
            text: 'News and Updates',
            amount: '1000'
        },
        {
            icon: <Shield />,
            color: 'neutralWhite',
            text: 'User Tools',
            amount: '1000'
        },
    ]
    return (
        <main className='pt-20'>
            <DashHeader text='Financial Assets' />
            <section className='pt-5'>
                <div className="grid grid-3 gap-12 w-full">
                    {cards.map((card, index) => (
                        <Card key={index} icon={card.icon} color={card.color} text={card.text} amount={card.amount} to={card.to ?? ''} />
                    ))}
                </div>
            </section>
        </main>
    )
}

export default DashboardHome