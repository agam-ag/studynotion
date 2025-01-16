import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({children,active,linkto}) => {
  return (
    <Link to={linkto}>

        <div className={`text-center text-[13px] px-6 py-3 rounded-md font-semibold
        ${active? "bg-yellow-50 rounded-lg shadow-[2px_2px] shadow-yellow-5 font-inter text-black":"bg-richblack-800 shadow-[2px_2px_rgba(255,255,255,0.51)] font-inter rounded-lg" } hover:scale-95 
        transition-all duration-200`}>
            {children}
        </div>

    </Link>
  )
}

export default Button