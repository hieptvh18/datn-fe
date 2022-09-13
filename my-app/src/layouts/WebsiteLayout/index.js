import React from 'react'
import { Outlet } from 'react-router-dom'
import FooterIndex from '../../components/FooterIndex'
import HaederIndex from '../../components/HeaderIndex'

const WebsiteLayout = () => {
    return (
        <div>
            <header>
                <HaederIndex />
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <FooterIndex />
            </footer>
        </div>
    )
}

export default WebsiteLayout