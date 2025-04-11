import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import axios from "axios";
import { clearGallery, createGallery, newLoader } from "./render-functions";
const API_KEY = "49624425-89d18311d8423019c2709bd63";

const nameInput = document.querySelector(".js-name-input");
const nextPageBtn = document.querySelector(".next-page-btn");
const countDisplay = document.getElementById('imageCount');
const formInput = document.querySelector(".js-form");
let pageNumber = 1;
let picQuantity = 0;
const perPage = 15;

export async function getImagesByQuery(images) {
    try {const response = await axios(`https://pixabay.com/api/?key=${API_KEY}&q=${nameInput.value}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${perPage}&page=${pageNumber}`)
    picQuantity = response.data.totalHits;
    countDisplay.textContent = picQuantity;
    console.log(picQuantity);
    // console.log(response.data.hits);
        if (!response.data.hits.length) {
            showMessage("Sorry, there are no images matching your search query. Please try again!", "#ef4040");
            formInput.reset();
            nextPageBtn.style.display = "none";
            return response.data.hits;
        }
        createGallery(response.data.hits);
        pageNumber += 1;
        if (pageNumber > 1 ) {
            nextPageBtn.style.display = "block";
        } 
        if (pageNumber > 2) {
            const elem = document.querySelector(".gallery-item");
            const rect = elem.getBoundingClientRect();
            window.scrollBy({
                top: rect.height * 3,
                left: 0,
                behavior:"smooth",
        });
            // console.log(rect);
        }
        if (pageNumber > Math.ceil(picQuantity / perPage)){
            nextPageBtn.style.display = "none";
            showMessage("That's all images.", "#e76f6f");
            pageNumber = 1;
        }
        const images = response.data.hits;
    }
    catch (error) {
        showMessage(error.message, "#ef4040")
    }
    finally {
        newLoader("none");
    };

 };
export function newSubmit() {
    pageNumber = 1;
    const newSubmitVer = document.querySelector(".gallery");
    newSubmitVer.innerHTML = "";
};



export function showMessage(textMessage, backColor) {
    iziToast.show({
        title: `${textMessage}`,
        backgroundColor: `${backColor}`,
        titleColor: "#fff",
        titleSize: "16px",
        position: "topRight",
        iconURL: './Group (1).svg',
        // width: '300px',
    })
};