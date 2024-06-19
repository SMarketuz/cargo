
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/homepage'
import { Box } from '@chakra-ui/react'
import Contact from './pages/contact'
import AddProduct from './pages/AddProduct'
import PersonalPage from './pages/PersonalPage'
import Product from './pages/Product'
import Register from './pages/register'
import Login from './pages/login'
import Alert from './pages/Alert'

function App() {

  return (
    <>
     <Box w={'100%'}>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/AddProduct' element={<AddProduct />} />
        <Route path='/PersonalPage' element={<PersonalPage />} />
        <Route path='/Product' element={<Product />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/Alert' element={<Alert />} />
      </Routes>
     </Box>
    </>
  )
}

export default App
