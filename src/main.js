import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { getImagesByQuery, showMessage, newSubmit } from "./js/pixabay-api";
import { newLoader, clearGallery } from "./js/render-functions";

const formInput = document.querySelector(".js-form");
formInput.addEventListener("submit", submitHandler);
const galleryListing = document.querySelector(".next-page-btn");

let images = "";

function submitHandler(event) {
    event.preventDefault();
    newSubmit();
    images = this.elements["search-text"].value.trim();
    if (!images) {
        formInput.reset();
        showMessage("Enter correct data, please", "#ef4040");
        return;
    }
getImagesByQuery(images);
clearGallery();
newLoader('block');
};

galleryListing.addEventListener("click", getImagesByQuery);