
import SimpleLightBox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// import getImagesByQuery from "./pixabay-api"


// createGallery(images)

export function createGallery(arr) {
        const galleryMarcup =  arr.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => { return `<li class="gallery-item">
      <a class="gallery-link" href="${largeImageURL}">
          <img class="gallery-image" src="${webformatURL}" alt="${tags}"/>
    <ul class="description">
    <li class="descr-item"><p class="descr-item-title">Likes</p><p class="descr-item-value">${likes}</p></li>
    <li class="descr-item"><p class="descr-item-title">Views</p><p class="descr-item-value">${views}</p></li>
    <li class="descr-item"><p class="descr-item-title">Comments</p><p class="descr-item-value">${comments}</p></li>
    <li class="descr-item"><p class="descr-item-title">Downloads</p><p class="descr-item-value">${downloads}</p></li>
    </ul></a>
    </li>
    `}).join("");
    clearGallery(galleryMarcup)
};

export function clearGallery(clearString = "") {
    const gallery = document.querySelector(".gallery");
gallery.innerHTML = clearString;
if (clearString) {
    runLightbox();
}
};

function runLightbox() {
    const newGallery = new SimpleLightBox('.gallery a', {
        captionData: 'alt',
        captionDelay: 250,
        overlayOpacity: 0.8,
    });
    newGallery.refresh();
};

  export function newLoader(style) {
    const loader = document.querySelector(".loader");
    loader.style.displey = style; 
  }