// DOM
const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let photosArray = [];

// Unsplash API
const count = 10;
const apiKey = "NnyALQ5H7aCftjyjp7AAofmzBp5MFLmkYzS1VETt3pk";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Helper Function to Set attributes on DOM elements
const setAttributes = (element, attributes) => {
    console.log(attributes);
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
};

// Create Elements for Links & Photos, Add to DOM
const displayPhotos = () => {
    // Run function for each object in photosArray
    photosArray.forEach((photo) => {
        // Create <a> to link to Unsplash
        const item = document.createElement("a");
        // item.setAttribute("href", photo.links.html);
        // item.setAttribute("target", "_blank");
        setAttributes(item, {
            href: photo.links.html,
            target: "_blank",
        });

        // Create <img> for photo
        const img = document.createElement("img");
        // img.setAttribute("src", photo.urls.regular);
        // img.setAttribute("alt", photo.alt_description);
        // img.setAttribute("title", photo.alt_description);
        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description,
        });

        // Put <img> inside <a> then puth both inside imageContainer Element
        item.appendChild(img);
        imageContainer.appendChild(item);
    });
};

// Get photos from Unsplash API
const getPhotos = async () => {
    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        displayPhotos();
    } catch (error) {
        console.log(error);
    }
};

getPhotos();
