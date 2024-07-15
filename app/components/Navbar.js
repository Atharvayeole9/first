import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-black text-white flex'>
        <div className='logo'>Dtunes</div>
      <ul className='flex justify-between'>
        <li>DTunes</li>
        <li>Music</li>
        <li>Podcast</li>
        <li>Language</li>
        <li>Profile</li>
      </ul>
    </nav>
  )
}

export default Navbar
