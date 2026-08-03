// Product Array
const products = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Smartphone" },
    { id: 3, name: "Tablet" },
    { id: 4, name: "Headphones" }
];

// Populate select options
const productSelect = document.getElementById("product");
products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.name; // value is product name
    option.textContent = product.name; // display text
    productSelect.appendChild(option);
});

// Track reviews with localStorage
window.addEventListener("load", () => {
    if (window.location.pathname.includes("review.html")) {
        let count = localStorage.getItem("reviewCount") || 0;
        count++;
        localStorage.setItem("reviewCount", count);
        console.log(`Reviews completed: ${count}`);
    }
});

// Sets current year
const year = new Date().getFullYear();
document.getElementById("currentyear").textContent = `©${year} 💐Elizabeth Shonibare💐 Nigeria`;

// Set last modified date
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

