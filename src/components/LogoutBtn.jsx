import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth' //apwirte
import { logout } from '../store/authSlice'  // for store updatation
import { useNavigate } from 'react-router-dom'

function LogoutBtn() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logoutHandler = async () => {
        try {
            await authService.logOut()
            dispatch(logout())
            
        } catch (error) {
            console.error('Logout failed:', error)
            dispatch(logout())
        } finally {
            navigate('/')
        }
    }

    return (
       <button
  onClick={logoutHandler}
  className="
    rounded-lg
    bg-red-500
    px-5
    py-2.5
    text-sm
    font-medium
    text-white
    shadow-sm
    transition-all
    duration-200
    hover:bg-red-600
    hover:shadow-md
    active:scale-95
    focus:outline-none
    focus:ring-2
    focus:ring-red-300
  "
>
  Logout
</button>
    )
}

export default LogoutBtn
