// eslint-disable-next-line no-unused-vars
import React from 'react'
import ScrollToTop from '../components/Common/ScrollToTop'
import { Outlet } from 'react-router-dom'

const LandingLayout = () => {
    return (
        <main className='relative'>
            <ScrollToTop>
                <Outlet />
            </ScrollToTop>
        </main>
    )
}

export default LandingLayout