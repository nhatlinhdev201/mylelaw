import { useLocation, useRoutes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/Home/HomePage'
import MainLayout from './pages/MainLayout'
import { useEffect } from 'react'
import Blogs from './pages/Blog/Blogs'
import AboutMe from './pages/AboutMe/AboutMe'
import Services from './pages/services/Services'
import InfoUser from './pages/InfoUser/InfoUser'
import Contact from './pages/Contact/Contact'

function App() {
  const location = useLocation()
  useEffect(() => {
    console.log('location', location)
  }, [location])

  const elements = useRoutes([
    {
      path: '/',
      element : <HomePage/>
    },
    {
      path: '/blogs',
      element : <Blogs/>
    },
    {
      path: '/aboutme',
      element : <AboutMe/>
    },
    {
      path: '/services',
      element : <Services/>
    },
    {
      path: '/infouser',
      element : <InfoUser/>
    },
    {
      path: '/contact',
      element : <Contact/>
    }
  ])
  return (
    <div>
      <MainLayout>
        {elements}
      </MainLayout>
    </div>
  )
}

export default App
