document.addEventListener("DOMContentLoaded", function () {
  let imagenes = [
    { img: "./assets/img/depto/frente.jpeg" },
    { img: "./assets/img/depto/frente1.jpeg" },
    { img: "./assets/img/depto/living.jpeg" },
    { img: "./assets/img/depto/living1.jpeg" },
    { img: "./assets/img/depto/comedor.jpeg" },
    { img: "./assets/img/depto/comedor1.jpeg" },
    { img: "./assets/img/depto/comedor2.jpeg" },
    { img: "./assets/img/depto/comedor3.jpeg" },
    { img: "./assets/img/depto/habitacion.jpeg" },
    { img: "./assets/img/depto/habitacion1.jpeg" },
    { img: "./assets/img/depto/habitacion2.jpeg" },
    { img: "./assets/img/depto/habitacion3.jpeg" },
    { img: "./assets/img/depto/habitacion4.jpeg" },
    { img: "./assets/img/depto/habitacion5.jpeg" },
    { img: "./assets/img/depto/baño.jpeg" },
    { img: "./assets/img/depto/cochera.jpeg" },
  ];

  let contador = 0;
  const contenedor = document.querySelector(".slideshow");
  const overlay = document.querySelector(".overlay");
  const galeria_imagenes = document.querySelectorAll(".galeria img");
  const img_slideshow = document.querySelector(".slideshow img");

  contenedor.addEventListener("click", function (event) {
    let atras = contenedor.querySelector(".atras"),
      adelante = contenedor.querySelector(".adelante"),
      img = contenedor.querySelector("img"),
      tgt = event.target;

    if (tgt == atras) {
      if (contador > 0) {
        img.src = imagenes[contador - 1].img;
        contador--;
      } else {
        img.src = imagenes[imagenes.length - 1].img;
        contador = imagenes.length - 1;
      }
    } else if (tgt == adelante) {
      if (contador < imagenes.length - 1) {
        img.src = imagenes[contador + 1].img;
        contador++;
      } else {
        img.src = imagenes[0].img;
        contador = 0;
      }
    }
  });

  Array.from(galeria_imagenes).forEach((img) => {
    img.addEventListener("click", (event) => {
      const imagen_seleccionada = +event.target.dataset.imgMostrar;
      img_slideshow.src = imagenes[imagen_seleccionada].img;
      contador = imagen_seleccionada;
      overlay.style.opacity = 1;
      overlay.style.visibility = "visible";
    });
  });

  document.querySelector(".btn_cerrar").addEventListener("click", () => {
    overlay.style.opacity = 0;
    overlay.style.visibility = "hidden";
  });
});
