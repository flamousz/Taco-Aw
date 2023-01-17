import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const MainLayout = () => {
    return (
        //fragment
        <>
            <Navbar />
            <Outlet />
        </>
    )
}


export default MainLayout