import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  console.log("this home")
  return (
    // <div className='relative top-[10%]'>

    <div className='relative'>
      <div className='flex flex-col align-middle justify-end'>
        <Link className='text-blue-950 text-[220%] relative top-[20vh] text-center' to='/about'>ConnectifyHub</Link>
      <lord-icon
    src="https://cdn.lordicon.com/ieoqzwng.json"
    trigger="loop"
    delay="2000"
    colors="primary:#110a5c"
    style={{ height: '55vh', width: '100vw' }}>
</lord-icon>
</div>
<div className='relative bottom-[3rem]'>
<div className='text-[200%] text-center capitalize text-blue-950 sm:text-[500%]'>welcome to ConnectifyHub</div>
<div  className='text-[135%] text-center capitalize text-blue-950 sm:text-[220%]'>communication meets efficiency%</div>
</div>
    </div>
    // </div>
  )
}

export default Home