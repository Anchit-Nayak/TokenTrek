import React from 'react'
import logo from '/home/anchit/Documents/CryptoTracker/CryptoTracker/src/assets/bitcoin-btc-logo.png';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-800 h-14 flex items-center text-white">
       <div className='wrapper-container w-full flex items-center gap-1 cursor-pointer' onClick={() => navigate('/')}>
           <img src={logo} className="w-6 h-6"></img>
           <p className="font-semibold"><span className="text-yellow-500">T</span>oken<span className="text-yellow-500">T</span>rek</p>
       </div>
    </div>
  )
}

export default Navbar



