// Product Array
const products = [
    { id: "p1", name: "Laptop Pro 15" },
    { id: "p2", name: "Smartphone X" },
    { id: "p3", name: "Wireless Headphones" },
    { id: "p4", name: "Smartwatch Z" }
];

// Populate Product Name select
window.addEventListener("DOMContentLoaded", () => {
    const select = document.getElementById("productName");
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        select.appendChild(option);
    });
});

// Sets current year
const year = new Date().getFullYear();
document.getElementById("currentyear").textContent = `©${year} 💐Elizabeth Shonibare💐 Nigeria`;

// Set last modified date
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;
