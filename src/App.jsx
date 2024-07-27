import './App.css'
import Navbar from "./components/navbar.jsx"
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Home from './components/home.jsx'
import About from './components/about.jsx'
import Contact from './components/contact.jsx'
import Footer from './components/footer.jsx'


function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <><Navbar/><Home/><Footer/></>
    },
    {
      path:'/about',
      element: <><Navbar/><About/><Footer/></>
    },
    {
      path:'/contact',
      element: <><Navbar/><Contact/><Footer/></>
    }

  ])

  return (
    <>
    <div className='w-[100vw] h-[100vh] m-0 p-0'>
    {/* <About/> */}
    <RouterProvider router={router}/>
    </div>
    </>

  )
}

export default App

