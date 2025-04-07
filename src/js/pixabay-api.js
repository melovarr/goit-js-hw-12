import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import axios from "axios";
import { createGallery, newLoader } from "./render-functions";
const API_KEY = "49624425-89d18311d8423019c2709bd63";

const nameInput = document.querySelector(".js-name-input");



// 
// function getImagesByQuery(query){
// return nameInput.value;
// };

 export function getImagesByQuery(images) {
    // event.preventDefault();
    // console.log(nameInput.value);
    
    axios(`https://pixabay.com/api/?key=${API_KEY}&q=${nameInput.value}&image_type=photo&orientation=horizontal&safesearch=true&per_page=198`)
    .then(response => {
        if (!response.data.hits.length) {
            // errorVision()
            iziToast.show({
                title: "Sorry, there are no images matching your search query. Please try again!",
                backgroundColor: "#ef4040",
                titleColor: "#fff",
                titleSize: "16px",
                position: "topRight",
                // iconURL: '/src/public/ellipse.png',
                // width: '300px',
            });
            return;
        }
        createGallery(response.data.hits)
        // console.log(response.data.hits);
        // gallery.innerHTML = galleryDatalist(response.data.hits);
        const images = response.data.hits;
        // gallery.innerHTML = galleryDatalist(galleryList);
    })
    .catch(error => iziToast.show({
                title: `${error.message}`,
                backgroundColor: "#ef4040",
                titleColor: "#fff",
                titleSize: "16px",
                position: "topRight",
                // width: "300px",
            }))
            .finally(() => {
                newLoader("none");
            });
};

// function errorVision() {
//     iziToast.show({
//         title: `${error.message}`,
//         backgroundColor: "#ef4040",
//         titleColor: "#fff",
//         titleSize: "16px",
//         position: "topRight",
//         width: "300px",
//     })
// }

// function galleryDatalist(arr) {
//     return arr.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `<li class="gallery-item">
//   <a class="gallery-link" href="${largeImageURL}">
//       <img class="gallery-image" src="${webformatURL}" alt="${tags}"/></a>
// <ul class="description">
// <li class="descr-item"><p class="descr-item-title">Likes</p><p class="descr-item-value">${likes}</p></li>
// <li class="descr-item"><p class="descr-item-title">Views</p><p class="descr-item-value">${views}</p></li>
// <li class="descr-item"><p class="descr-item-title">Comments</p><p class="descr-item-value">${comments}</p></li>
// <li class="descr-item"><p class="descr-item-title">Downloads</p><p class="descr-item-value">${downloads}</p></li>
// </ul>
    
//     </li>`).join("")
// }
