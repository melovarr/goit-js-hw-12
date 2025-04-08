import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { getImagesByQuery, showMessage } from "./js/pixabay-api";
import { newLoader, clearGallery } from "./js/render-functions";

const formInput = document.querySelector(".js-form");
formInput.addEventListener("submit", submitHandler);

function submitHandler(event) {
    event.preventDefault();
    const images = this.elements["search-text"].value.trim();
    if (!images) {
        formInput.reset();
        showMessage("Enter correct data, please", "#ef4040");
        return;
    }
clearGallery();
newLoader('block');
getImagesByQuery(images);
};
