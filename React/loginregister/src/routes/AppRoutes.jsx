import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Register from '../pages/Register'
import Login from '../pages/Login'
import Layout from '../layout/Layout'

const AppRoutes = () => {
  return (
    <Routes>
        <Route element={<Layout/>}>
            <Route path="/" element={<Home/>}/>
        </Route>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
    </Routes>
  )
}

export default AppRoutes