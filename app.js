const truckCodes = {
    "DAF": "/brandPage.html?brand=daf",
    "Iveco": "/brandPage.html?brand=iveco",
    "MAN": "/brandPage.html?brand=man",
    "Mercedes-Benz": "/brandPage.html?brand=mercedes",
    "Renault": "/brandPage.html?brand=renault",
    "Scania": "/brandPage.html?brand=scania",
    "Volvo": "/brandPage.html?brand=volvo"
};

const trailerCodes = {
    "Feldbinder": "/brandPage.html?brand=feldbinder",
    "Kässbohrer": "/brandPage.html?brand=kaessbohrer",
    "Kögel": "/brandPage.html?brand=koegel",
    "Krone": "/brandPage.html?brand=krone",
    "Schwarzmüller": "/brandPage.html?brand=schwarzmuller",
    "Schmitz Cargobull": "/brandPage.html?brand=schmitz",
    "TIRSAN": "/brandPage.html?brand=tirsan",
    "Wielton": "/brandPage.html?brand=wielton",
    "Base": "/brandPage.html?brand=base"
};

// Function to create brand code blocks
function createBrandSection(category, data) {
    const categoryDiv = document.getElementById(category);
    Object.keys(data).forEach(brand => {
        const brandDiv = document.createElement('div');
        brandDiv.classList.add('brand');
        const brandLink = document.createElement('a');
        brandLink.href = data[brand];
        brandLink.innerText = brand;
        brandDiv.appendChild(brandLink);
        categoryDiv.appendChild(brandDiv);
    });
}

// Initialize the page with data
document.addEventListener('DOMContentLoaded', () => {
    createBrandSection('truckBrands', truckCodes);
    createBrandSection('trailerBrands', trailerCodes);
});
