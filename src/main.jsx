import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from '../pages/Home.jsx'
import AboutPage from '../pages/About.jsx'
import SkillsPage from '../pages/Skills'
import ContactPage from '../pages/Contact'
import ErrorPage from '../pages/Error'


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/about',
    element: <AboutPage/>,
  },
  {
    path: '/skills',
    element: <SkillsPage/>,
  },
  {
    path: '/contact',
    element: <ContactPage/>,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
