// Unsplash API
const count = 10;
const apiKey = "NnyALQ5H7aCftjyjp7AAofmzBp5MFLmkYzS1VETt3pk";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get photos from Unsplash API
const getPhotos = async () => {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
};

getPhotos();
