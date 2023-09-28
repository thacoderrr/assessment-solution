// eslint-disable-next-line no-unused-vars
import React from 'react'
import DashHeader from '../components/Common/DashHeader'
import TableDisp, { TableData } from '../components/Table/TableDisp'
import { CaretLeft } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'
import { useQuery } from 'react-query'
import transactionSlice from '../store/trnxStore'
import LoadingSpinnerComponent from 'react-spinners-components'

const Transactions = () => {
    const navigate = useNavigate()
    const trx = transactionSlice(state => state.getAllTransaction)

    const { data, isLoading } = useQuery('getTransaction', () => trx(), {
        enabled: true
    })
    return (

        <main className='pt-20'>
            <div className=' flex items-center gap-2' onClick={() => navigate('/dashboard')} > <CaretLeft /> Go back</div>
            <DashHeader text='Transactions' />
            <section className='pt-5'>
                <TableDisp />

                <section className='py-2'>
                    {
                        isLoading && <LoadingSpinnerComponent
                            type={"Rolling"}
                            colors={["#001973", "#E0F2F9"]}
                            size={"100px"}
                        />
                    }

                    {
                        !isLoading && data && data?.map((data, index) => (
                            <TableData key={index} data={data} index={index} />
                        ))
                    }
                </section>
            </section>
        </main>
    )
}

export default Transactions

