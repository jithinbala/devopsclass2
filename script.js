// script.js

// Replace 'YOUR_API_KEY' with your actual API key
const apiKey = 'U6t59IOSzbOqgg24Uv4GqDC1QKixBEgecYZzb8F6';
const apiUrl = ` https://api.nasa.gov/planetary/apod?api_key=U6t59IOSzbOqgg24Uv4GqDC1QKixBEgecYZzb8F6`;

const apodContainer = document.getElementById('apod-container');

// Function to fetch and display APOD data
async function fetchAPOD() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Display APOD content in the container
        apodContainer.innerHTML = `
            <img src="${data.url}" alt="Astronomy Picture of the Day">
            <h2>${data.title}</h2>
            <p>${data.explanation}</p>
        `;
    } catch (error) {
        console.error('Error fetching APOD data:', error);
        apodContainer.innerHTML = 'An error occurred while fetching APOD data.';
    }
}

// Fetch and display APOD data when the page loads
fetchAPOD();