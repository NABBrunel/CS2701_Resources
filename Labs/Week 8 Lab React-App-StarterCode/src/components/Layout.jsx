import Menu from './Menu'
import Sidebar from './Sidebar'

export default function Layout({ children }) {
  return (
    <>
      <header></header>
      <Menu />
      <div className="container">
        <Sidebar />
        <main className="mainContent">
          {children}
        </main>
      </div>
    </>
  )
}
