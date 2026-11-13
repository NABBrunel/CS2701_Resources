// src/components/Header.jsx
export default function Header({
  img = { src: "/image.jpg", alt: "Header image" }
}) {
  return (
    <header
      style={{
        textAlign: "center",
        margin: "auto",
        width: "100%",
        backgroundRepeat: "repeat-x",
        backgroundSize: "auto 100%",
      }}
    >
      <img
        src={img.src}
        alt={img.alt}
        style={{
          height: "200px",
          width: "100%",
          objectFit: "contain",
          objectPosition: "center",
        }}
      />
    </header>
  );
}
