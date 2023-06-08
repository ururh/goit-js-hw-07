import { galleryItems } from './gallery-items.js';
// Change code below this line
const li = galleryItems.map(({preview, original, description}) => `
<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`).join("")

const ul = document.querySelector('.gallery')
ul.insertAdjacentHTML("afterbegin", li)


new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
    animationSpeed: 400,
    navText: ['←', '→']
    });
