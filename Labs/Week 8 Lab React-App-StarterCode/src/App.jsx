import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Registration from './components/Registration'
import Layout from './components/Layout'

function Home() {
  return <h1>Home Page</h1>
}

function Login() {
  return <h1>Login Page</h1>
}

function Help() {
  return <h1>Help Page</h1>
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/register" element={<Layout><Registration /></Layout>} />
        <Route path="/login" element={<Layout><Login /></Layout>} />
        <Route path="/help" element={<Layout><Help /></Layout>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App