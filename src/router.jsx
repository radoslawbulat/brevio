import { createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LawyerPage from './pages/LawyerPage'
import ServicePage from './pages/ServicePage'
import PaymentSuccess from './pages/PaymentSuccess'
import PaymentCancelled from './pages/PaymentCancelled'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/sukces',
    element: <PaymentSuccess />,
  },
  {
    path: '/anulowano',
    element: <PaymentCancelled />,
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
