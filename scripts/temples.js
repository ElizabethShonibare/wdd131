const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
});

// Sets current year
const year = new Date().getFullYear();
document.getElementById("currentyear").textContent = `©${year} 💐Elizabeth Shonibare💐 Nigeria`;

// Set last modified date
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;
