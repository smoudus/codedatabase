// Define the truck and trailer codes with example data
const truckCodes = {
    "Volvo": ["VOLVO001", "VOLVO002", "VOLVO003"],
    "Scania": ["SCANIA101", "SCANIA102"],
    "Mercedes": ["MERCEDES123", "MERCEDES124", "MERCEDES125"],
};

const trailerCodes = {
    "Schmitz": ["SCHMITZ001", "SCHMITZ002"],
    "Krone": ["KRONE003", "KRONE004", "KRONE005"],
    "Fruehauf": ["FRUEHAUF007"],
};

// Function to create brand code blocks
function createBrandSection(category, data) {
    const categoryDiv = document.getElementById(category);
    Object.keys(data).forEach(brand => {
        const brandDiv = document.createElement('div');
        brandDiv.classList.add('brand');
        const brandTitle = document.createElement('h3');
        brandTitle.innerText = brand;
        brandDiv.appendChild(brandTitle);

        const codesList = document.createElement('ul');
        data[brand].forEach(code => {
            const listItem = document.createElement('li');
            const codeLink = document.createElement('a');
            codeLink.href = "#";
            codeLink.innerText = code;
            listItem.appendChild(codeLink);
            codesList.appendChild(listItem);
        });

        brandDiv.appendChild(codesList);
        categoryDiv.appendChild(brandDiv);
    });
}

// Function to filter results based on search
function filterResults() {
    const query = document.getElementById('searchBar').value.toLowerCase();
    const brands = document.querySelectorAll('.brand');
    
    brands.forEach(brand => {
        const brandName = brand.querySelector('h3').innerText.toLowerCase();
        const codes = brand.querySelectorAll('a');
        
        let foundMatch = false;
        
        codes.forEach(code => {
            if (code.innerText.toLowerCase().includes(query) || brandName.includes(query)) {
                foundMatch = true;
            }
        });
        
        if (foundMatch) {
            brand.style.display = 'block';
        } else {
            brand.style.display = 'none';
        }
    });
}

// Event listener for search bar
document.getElementById('searchBar').addEventListener('input', filterResults);

// Initialize the page with data
document.addEventListener('DOMContentLoaded', () => {
    createBrandSection('truckBrands', truckCodes);
    createBrandSection('trailerBrands', trailerCodes);
});
