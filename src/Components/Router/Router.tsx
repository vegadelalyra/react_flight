import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../../pages/Home/Home'
import Flights from '../../pages/Flights/Flights'
import Booking from '../../pages/Booking/Booking'
import Layout from '../Layout/Layout'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route path='/' element={<Home />} />
                    <Route path='/flights' element={<Flights />} />
                    <Route path='/booking' element={<Booking />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router
