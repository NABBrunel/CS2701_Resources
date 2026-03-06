import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RegistrationControlled from './components/RegistrationControlled'
import Help from './components/Help'
import Login from './components/Login'
import Layout from './components/Layout'
import Home from './components/Home'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
           <Route path={'/'} index element={<Home/>}></Route>
          <Route path={'/login'} element={<Login/>}></Route>
           <Route path={'/register'} element={<RegistrationControlled/>}></Route>
          <Route path={'/help'} element={<Help/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
