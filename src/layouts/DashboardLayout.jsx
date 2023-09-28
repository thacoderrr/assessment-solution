// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'
import SideBar from '../components/SIdebar/Sidebar'
import ScrollToTop from '../components/Common/ScrollToTop'
import { Outlet, useNavigate } from 'react-router-dom'
import userSlice from '../store/userStore'

const DashboardLayout = () => {
    const isLoggedIn = userSlice(state => state.isLoggedIn);
    const navigate = useNavigate()

    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/login')
        }
    }, [])
    return (
        <main className='relative w-full'>
            <SideBar />
            <ScrollToTop>
                <div className='px-32'>

                    <Outlet />
                </div>
            </ScrollToTop>
        </main>
    )
}

export default DashboardLayout