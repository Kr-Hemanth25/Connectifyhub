import React from 'react'
import { Link } from 'react-router-dom';
import hamburger from '../assets/hamburger.svg'
import cancel from '../assets/cancel.svg'
import { useState } from 'react';
import './navbar.css'

const navbar = () => {
    let [click,unclick]=useState(false);
    let a=() => {
         unclick(!click);
        console.log(click);
        if (!click) {
          document.body.style.overflow = 'hidden';
      } else {
          document.body.style.overflow = 'unset';
      }
      };
      
      
    return(
        <>
        <header>
        <nav className='w-[100%] h-[10%] fixed flex flex-row gap-[0%] items-center text-center text-white justify-center p-[1%] bg-blue-950  z-10 sm:gap-[30%]'>
            <Link className='sm:text-[200%] text-center absolute min-w-fit sm:relative  text-[230%] sm:pt-[0%] sm:left-[10%] sm:min-w-0 flex justify-center ' to='/about' >ConnectifyHub</Link>
            <ul className='flex gap-[10%] text-[150%] inline-list p-[0.5%] mr-[10%] invisible sm:visible'>
                <Link className='hover:border-b-[3px]' to='/'>Home</Link>
                <Link className='hover:border-b-[2px]' to='/contact'>YourBook</Link>
                <Link className='hover:border-b-[2px]' to='/about'>About</Link>
                {/* <a href='/'><li>Home</li></a>
                <a href='./contact'><li>Contact</li></a>
                <a href='./about'><li>About</li></a> */}
            
            
            </ul>
            <button onClick={()=>{a()}} id='button' className="visible h-[4%] w-[10%]  fixed left-[90%] sm:invisible">
  <img src={(!click)?hamburger:cancel} id='image' alt="hamburger" />
</button>
        </nav>
        </header>
         {(click )&& <div className='bg-blue-950 h-screen w-screen'>
          <div></div>
          <ul className='flex flex-col text-white relative top-[15%] text-[3rem] text-center items-center gap-[2rem]'>
          <Link className='hover:border-b-[3px]' to='/' onClick={()=>{a()}}>Home</Link>
                <Link className='hover:border-b-[2px]' to='/contact' onClick={()=>{a()}}>YourBook</Link>
                <Link className='hover:(border-b-[2px]' to='/about' onClick={()=>{a()}}>About</Link>
            
          </ul>
          </div>
           }
         </>
    
    )
}

export default navbar
