import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import axios from "axios";
import { createGallery, newLoader } from "./render-functions";
const API_KEY = "49624425-89d18311d8423019c2709bd63";

const nameInput = document.querySelector(".js-name-input");
const fetchPostBtn = document.querySelector(".next-page-btn");

const formInput = document.querySelector(".js-form");
let pageNumber = 1;
let picQuantity = 0;
// picQuantity();
// async function picQuantity(quantity){
//     try {const limitNumber = await axios(`https://pixabay.com/api/?key=${API_KEY}`);
//     console.log(limitNumber.data.totalHits);}
//     catch(error){
//         showMessage(error.message, "#ef4040")
//     }
// };

 export async function getImagesByQuery(images) {
    try {const response = await axios(`https://pixabay.com/api/?key=${API_KEY}&q=${nameInput.value}&image_type=photo&orientation=horizontal&safesearch=true&per_page=115&page=${pageNumber}`)
    picQuantity = response.data.totalHits;
    console.log(picQuantity);
    console.log(response.data);
        if (!response.data.hits.length) {
            showMessage("Sorry, there are no images matching your search query. Please try again!", "#ef4040");
            formInput.reset();
            return response.data.hits;
        }
        createGallery(response.data.hits);
        pageNumber += 1;
        if (pageNumber > 1) {
            fetchPostBtn.display = "block";
        }
        const images = response.data.hits;
    }
    catch (error) {
        showMessage(error.message, "#ef4040")
    }
    finally {
        newLoader("none");
    };

 }




export function showMessage(textMessage, backColor) {
    iziToast.show({
        title: `${textMessage}`,
        backgroundColor: `${backColor}`,
        titleColor: "#fff",
        titleSize: "16px",
        position: "topRight",
        // iconURL: '/src/public/ellipse.png',
        // width: '300px',
    })
}
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
