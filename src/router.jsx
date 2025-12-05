import { createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LawyerPage from './pages/LawyerPage'
import ServicePage from './pages/ServicePage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/:lawyerSlug',
    element: <LawyerPage />,
  },
  {
    path: '/:lawyerSlug/uslugi/:serviceId',
    element: <ServicePage />,
  },
])
