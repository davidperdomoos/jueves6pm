let index = 0;

function moverCarrusel(direccion) {
  const slides = document.querySelector('.slides');
  const total = slides.children.length;

  index += direccion;
  if (index < 0) index = total - 1;
  if (index >= total) index = 0;

  slides.style.transform = `translateX(-${index * 100}%)`;
}
