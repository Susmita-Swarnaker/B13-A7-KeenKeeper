import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'  
import { createBrowserRouter, RouterProvider } from 'react-router'
import Mainlayout from './Layout/Mainlayout.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'
import Homepage from './pages/homepages/Homepage.jsx'
import Timeline from './pages/timeline/Timeline.jsx'
import Stats from './pages/stats/Stats.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element :<Mainlayout/>,
    children:[
      {
        path:"/home",
        Component : Homepage,
      },
      {
        path:"/timeline",
       Component:Timeline,
      },
      {
        path:'/stats',
       Component: Stats
      

      }

    ]
  },
 
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
