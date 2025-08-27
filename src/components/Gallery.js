import React from "react";

function Gallery() {
  const images = [
    { src: "/images/gallery1.jpg", url: "/services#software" },
    { src: "/images/gallery2.jpg", url: "/services#web" },
    { src: "/images/gallery3.jpg", url: "/services#consulting" },
    { src: "/images/gallery4.jpg", url: "/services#cloud" }
  ];

  return (
    <section id="gallery">
      <h2>Galeri</h2>
      <div className="gallery-grid">
        {images.map((img, idx) => (
          <a key={idx} href={img.url}>
            <img src={img.src} alt={`Galeri ${idx + 1}`} />
          </a>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
