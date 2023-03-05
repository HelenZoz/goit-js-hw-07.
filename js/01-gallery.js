import { galleryItems } from './gallery-items.js';
// Change code below this line
0
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

  if (e.target.NodeName === 'IMG') {
   return;
  };
 
  const modal = basicLightbox.create(`
    <img
      src="${e.target.dataset.source}"/>
`, {
    onShow: modal => {
      document.addEventListener('keydown', handleEsc);
    },
    onClose: modal => {
      document.removeEventListener('keydown', handleEsc);
    }
  });

  function handleEsc(e) {
    if (e.key === 'Escape') {
      modal.close(() => console.log('lightbox close'))
    }
  }

  console.log(modal.show());
}