const destinations = [
    {
        number: "01",
        country: "FRANCE",
        title: "Paris",
        description: "Paris is one of the most beautiful cities in the world, famous for its art, architecture and romantic atmosphere.",
        continent: "Europe",
        food: "Croissant, Macarons",
        place: "Eiffel Tower",
        language: "French",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80"
    },
     {
        number: "02",
        country: "JAPAN",
        title: "Tokyo",
        description: "Tokyo is a modern city that combines advanced technology with traditional Japanese culture.",
        continent: "Asia",
        food: "Sushi, Ramen",
        place: "Tokyo Tower",
        language: "Japanese",
        image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80"
    },
{
        number: "03",
        country: "ITALY",
        title: "Rome",
        description: "Rome is famous for its ancient history, beautiful architecture and delicious Italian food.",
        continent: "Europe",
        food: "Pizza, Pasta",
        place: "Colosseum",
        language: "Italian",
        image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=80"
    },
    {
        number: "04",
        country: "EGYPT",
        title: "Cairo",
        description: "Cairo is a historic city known for its ancient Egyptian civilization and famous landmarks.",
        continent: "Africa",
        food: "Koshari, Foul",
        place: "Pyramids",
        language: "Arabic",
        image: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?auto=format&fit=crop&w=800&q=80"
    }
];

let currentIndex = 0;

const imgElement = document.getElementById('dest-img');
const numElement = document.getElementById('dest-number');
const progressElement = document.getElementById('progress-text');
const countryElement = document.getElementById('dest-country');
const titleElement = document.getElementById('dest-title');
const descElement = document.getElementById('dest-desc');
const continentElement = document.getElementById('info-continent');
const foodElement = document.getElementById('info-food');
const placeElement = document.getElementById('info-place');
const langElement = document.getElementById('info-lang');
const dotsContainer = document.getElementById('dots-container');

const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

function updateDestination(index) {
    const data = destinations[index];
    imgElement.src = data.image;
    numElement.textContent = data.number;
    progressElement.textContent = `${data.number} / 04`;
    countryElement.textContent = data.country;
    titleElement.textContent = data.title;
    descElement.textContent = data.description;
    continentElement.textContent = data.continent;
    foodElement.textContent = data.food;
    placeElement.textContent = data.place;
    langElement.textContent = data.language;

    const dots = dotsContainer.querySelectorAll('.dot');
    dots.forEach((dot, idx) => {
        if (idx === index) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % destinations.length;
    updateDestination(currentIndex);
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + destinations.length) % destinations.length;
    updateDestination(currentIndex);
});

updateDestination(currentIndex);
