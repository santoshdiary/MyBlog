import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth';
import { login, logout } from './store/authSlice';
import Header from './components/Header';
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom';

function App() {

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        }
        else {
          dispatch(logout())
        }
      })
      .finally(() => { setLoading(false) })// loading is over
  }, [])


  return !loading ? <div className='flex min-h-screen flex-col overflow-x-hidden bg-paper text-ink'>
    <Header/>
    <main className='flex-1 min-h-screen px-2 py-4 pt-20 sm:px-4 sm:pt-24 lg:px-6 lg:pt-28'>
        {/* <Outlet/> */} 
        <Outlet/>
    </main>
    <Footer/>
  </div> : (null);
}

export default App
