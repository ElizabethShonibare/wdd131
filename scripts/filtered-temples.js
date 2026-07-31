// Temple data array
const temples = [
    {
        name: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005-08-07",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
        width: 400,
        height: 250
    },
    {
        name: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888-05-21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
        width: 400,
        height: 250
    },
    {
        name: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015-06-07",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
        width: 400,
        height: 250
    },
    {
        name: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020-05-02",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
        width: 400,
        height: 250
    },
    {
        name: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974-11-19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
        width: 400,
        height: 250
    },
    {
        name: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986-01-10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
        width: 400,
        height: 250
    },
    {
        name: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983-12-02",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
        width: 400,
        height: 250
    },
    {
        name: "Salt Lake Temple",
        location: "Salt Lake City, Utah",
        dedicated: "1893-04-06",
        area: 253000,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg",
        width: 400,
        height: 250
    },
    {
        name: "Accra Ghana Temple",
        location: "Accra, Ghana",
        dedicated: "2004-01-11",
        area: 17500,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-main.jpg",
        width: 400,
        height: 250
    },
    {
        name: "Rome Italy Temple",
        location: "Rome, Italy",
        dedicated: "2019-03-10",
        area: 41000,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2642-main.jpg",
        width: 400,
        height: 250
    },
];

// Function to render temple cards
function renderTemples(filteredTemples) {
    const container = document.getElementById("temple-cards");
    container.innerHTML = "";

    filteredTemples.forEach(temple => {
        container.innerHTML += `
      <div class="temple-card">
        <h2>${temple.name}</h2>
        <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
        <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
        <img src="${temple.imageUrl}" alt="${temple.name}" loading="lazy" width="${temple.width}" height="${temple.height}">
      </div>
    `;
    });
}

// Initial render
renderTemples(temples);



// Footer year and last modified
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Filtering functions
document.getElementById("home").addEventListener("click", () =>
    renderTemples(temples)
);

document.getElementById("old").addEventListener("click", () =>
    renderTemples(temples.filter(t => new Date(t.dedicated).getFullYear() < 1900))
);

document.getElementById("new").addEventListener("click", () =>
    renderTemples(temples.filter(t => new Date(t.dedicated).getFullYear() > 2000))
);

document.getElementById("large").addEventListener("click", () =>
    renderTemples(temples.filter(t => t.area > 90000))
);

document.getElementById("small").addEventListener("click", () =>
    renderTemples(temples.filter(t => t.area < 10000))
);
