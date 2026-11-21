// Replace <a> with <Link> when React Router is enabled
export default function Menu() {
  return (
    <nav>
      <ul className='navlist'>
        <li><a href="/">Home</a></li>
        <li><a href="/register">Register</a></li>
        <li><a href="/login">Login</a></li>
        <li><a href="/help">Help</a></li>
      </ul>
    </nav>
  )
}
