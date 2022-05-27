import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

export default function Signup() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const {user, signUp} = UserAuth()
    const Navigate = useNavigate()
    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
            await signUp(email, password, username)
            Navigate('/')
        } catch (error) {
            alert(error)
        }
    }
  return (
    <div className='w-full h-screen flex items-center'>
      <img className='hidden sm:block absolute w-full h-full object-cover ' src="https://assets.nflxext.com/ffe/siteui/vlv3/970e664f-2df4-47ce-b4fa-446082f5abc1/1a40ef0e-0488-4258-8ea1-da0527eb2b01/NG-en-20220523-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="" />
      <div className='bg-black/60 fixed top-0 left-0 w-full h-screen '></div>
      <div className='fixed w-full px-4  z-50'>
          <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white rounded-md'>
              <div className='max-w-[320px] mx-auto py-16'>
                  <p className='text-3xl font-bold'>Sign Up</p>
                  <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                      <input onChange={(e) => setUsername(e.target.value)} className=' p-3 my-2 bg-gray-500 rounded' type="text" placeholder='First Name' />
                      <input onChange={(e) => setEmail(e.target.value)} className=' p-3 my-2 bg-gray-500 rounded' type="email"  placeholder='Email'autoComplete='email' />
                      <input onChange={(e) => setPassword(e.target.value)} className=' p-3 my-2 bg-gray-500 rounded' type="password" placeholder='Password' autoComplete='current-password'/>
                      <button className=' bg-red-600 rounded py-3 my-6 font-bold '>Sign Up</button>
                      <div className=' flex justify-between items-center text-gray-600 text-md'>
                          <p><input type="checkbox" className='mr-2' />Remember me</p>
                          <p className=' cursor-pointer'>Need Help?</p>
                      </div>
                      <p className=' my-4 text-gray-600'>Already suscribed to Netflix? <Link className='ml-1 font-bold text-white' to='/login'> Sign in.</Link></p>
                  </form>
              </div>
          </div>
      </div>
    </div>
  );
}
