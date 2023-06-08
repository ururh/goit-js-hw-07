import { galleryItems } from './gallery-items.js';

// Change code below this line
const li = galleryItems.map(({preview, original, description}) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`).join("")

const ul = document.querySelector('.gallery')
ul.insertAdjacentHTML("afterbegin", li)

ul.addEventListener('click', onClick)

function onClick(e) {
  e.preventDefault();
  if (e.target === e.currentTarget) return

  const currentImg = e.target.dataset.source;
  const instance = basicLightbox.create(`
    <img src="${currentImg}"/>
  `);
  instance.show();

  document.addEventListener('keydown', onKeyPress);

  function onKeyPress(e) {
    if (e.code === 'Escape') {
      instance.close();
    }
  }
}




