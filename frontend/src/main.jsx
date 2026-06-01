import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import Home from './components/home/Home.jsx'
import Introduction from './components/introduction/Introduction.jsx'
import Admission from './components/admission/Admission.jsx'
import Gallery from './components/gallery/Gallery.jsx'
import Notices from './components/notices/Notices.jsx'



const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: '/home-introduction',
        element: <Introduction />
      },
      {
        path: '/home-admission',
        element: <Admission />
      },
      {
        path: '/home-notices',
        element: <Notices />
      },
      {
        path: '/home-gallery',
        element: <Gallery />
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
