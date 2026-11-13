import Header from './components/Header.jsx';
import Sidebar from './components/Sidebar.jsx';
import RegistrationForm from './components/RegistrationForm.jsx';
import './App.css';

export default function App() {
  return (
    <div>
      <Header />

      <main>
        <Sidebar />

        <section>
          <RegistrationForm />
        </section>
      </main>
    </div>
  );
}