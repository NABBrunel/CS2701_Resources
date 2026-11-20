import Header from './components/Header'
import Sidebar from './components/Sidebar'
import RegistrationForm from './components/RegistrationForm'

export default function App() {
  return (
    <div>
      <Header img={{ src: '/SharingFood.jpg', alt: 'Sharing food banner' }} />
      <div className="container">
        <Sidebar />
        <main className="mainContent">
          <RegistrationForm />
        </main>
      </div>
    </div>
  )
}
