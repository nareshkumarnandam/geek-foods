import React from 'react'
import '../../src/App.css';
import './NavBar.css'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='nav'>
        <div className='logo'>
            <img src='https://flowbite.com/docs/images/logo.svg'></img>
            <span>GeekFoods</span>
        </div>
        <ul style={{fontSize: "1rem"}}>
            <Link className='home' to='/' ><li className='home'>Home</li></Link>
            <Link className='quote' to='/quotes'><li>Quote</li></Link>
            <Link className='restaurants' to='/restaurants'><li>Restaurants</li></Link>
            <li>Food</li>
            <li>Contact</li>
        </ul>
        <div>
            <button className='getStartedBtn'>Get Started</button>
        </div>
    </nav>
  )
}

export default NavBar