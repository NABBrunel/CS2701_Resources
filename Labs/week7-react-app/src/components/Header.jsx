// Without img, the default avoids a crash and a broken image (destructuring undefined would throw).
export default function Header({ img = { src: '/SharingFood.jpg', alt: 'Header image' } }) {
  return (
    <header>
      <img src={img.src} alt={img.alt ?? ''} />
    </header>
  )
}
