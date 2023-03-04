import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

galleryEl.insertAdjacentHTML('beforeend', createCardsGallery(galleryItems));
galleryEl.addEventListener("click", handleClickOnCards);

function createCardsGallery(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
`;
    }).join('');
};

function handleClickOnCards(e) {
  e.preventDefault();

  const modal = basicLightbox.create(`
   <div class="modal">
    <img
      class="gallery__image"
      src="${e.target.dataset.source}"/>
   </div>
`)
  console.log(modal.show());

  if (modal.show()) {
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
       modal.close(() => console.log('lightbox close'))
    }
    });
  }
  
  if (e.target.NodeName === 'IMG') {
    return modal;
  } else {
    return;
  }
}
