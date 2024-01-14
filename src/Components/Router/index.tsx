import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from '../../pages/Home'
import Flights from '../../pages/Flights/Flights'
import Booking from '../../pages/Booking/Booking'
import Layout from '../Layout'

const Router = () => {
   const BrowserRoutes = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'booking',
                element: <Booking />
            },
            {
                path: 'flights',
                element: <Flights />
            }
        ]
    }
   ])
    
    return (
        <RouterProvider router={BrowserRoutes} />
    )
}

export default Router
