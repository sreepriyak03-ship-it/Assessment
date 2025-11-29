import React from 'react'
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Home from './components/Home'

import AddProduct from './components/AddProduct'
const App = () => {
  return (
    <>
    <Router>
      <nav className='bg-amber-800'>

    
    <div>
      <ul className='flex gap-x-6 py-4'>
          <li>
            <Link to="/" className='text-white hover:text-gray-300'>Home</Link>
          </li>
          
          <li>
            <Link to="/addproduct" className='text-white hover:text-gray-300'>Add Product</Link>
          </li>
        </ul>

    </div>
    </nav>
    <Routes>
          <Route path='/' element={<Home/>}/>
          
          <Route path='/addproduct' element={<AddProduct/>}/>
       </Routes>
  
    </Router>

    </>
  )
}


export default App

