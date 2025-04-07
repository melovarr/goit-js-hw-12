import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { getImagesByQuery } from "./js/pixabay-api";
import { newLoader, clearGallery } from "./js/render-functions";

const formInput = document.querySelector(".js-form");
formInput.addEventListener("submit", submitHandler);

function submitHandler(event) {
    event.preventDefault();
    const images = this.elements["search-text"].value.trim();
    if (!images) {
        formInput.reset();
        iziToast.show({
            title: "Enter correct data, please",
            backgroundColor: "#ef4040",
            titleColor: "#fff",
            titleSize: "16px",
            position: "topRight",
            width: "300px",
        });
        return;
    }
clearGallery();
newLoader('block');
getImagesByQuery(images);
};
