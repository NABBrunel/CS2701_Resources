import './App.css'
import Registration from './components/Registration'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <>
    <header></header>
    <div className="container">
    <Sidebar/>
    <main className="mainContent">
    <Registration/>
    </main>
    </div>
    </>
  )
}

export default App
