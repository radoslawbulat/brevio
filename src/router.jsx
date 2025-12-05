import { createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LawyerPage from './pages/LawyerPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/:lawyerSlug',
    element: <LawyerPage />,
  },
])
