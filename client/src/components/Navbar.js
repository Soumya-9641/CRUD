import React from 'react'
import logo from "../logo192.png"
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
        <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a href='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img src={logo} className='w-[50px] h-[50px]' alt="" />
      <span className="ml-3 text-xl">MERN app</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <a href='/tasks/list' className="mr-5 hover:text-gray-900">List Of Task</a>
      <a href='/tasks/create' className="mr-5 hover:text-gray-900">Create Task</a>
        
    </nav>
   
  </div>
</header>
    </div>
  )
}

export default Navbar