// Function to add the "navbarDark" class to the navbar on scroll
function handleNavbarScroll() {
    const header = document.querySelector(".navbar");
    window.onscroll = function () {
        const top = window.scrollY;
        if (top >= 100) {
            header.classList.add("navbarLight");
        } else {
            header.classList.remove("navbarLight");
        }
    };
}

// Function to handle navbar collapse on small devices after a click
function handleNavbarCollapse() {
    const navLinks = document.querySelectorAll(".nav-item");
    const menuToggle = document.getElementById("navbarSupportedContent");

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            new bootstrap.Collapse(menuToggle).toggle();
        });
    });
}

// Function to dynamically create HTML elements from the JSON file
function createSkillsFromJSON() {
    const container = document.querySelector("#skills .container");
    let row = document.createElement("div");
    row.classList.add("row");

    // Load the JSON file
    fetch("data/skills.json")
        .then((response) => response.json())
        .then((data) => {
            // Iterate through the JSON data and create HTML elements
            data.forEach((item, index) => {
                const card = document.createElement("div");
                card.classList.add("col-lg-4", "mt-4");
                const points = item.text.split(", ");
                const ul = document.createElement("ul");
                points.forEach((point) => {
                    const li = document.createElement("li");
                    li.textContent = point.trim();
                    ul.appendChild(li);
                });

                // **Ajout du 'ul' dans la carte à la place du 'p'**
                card.innerHTML = `
                    <div class="card skillsText">
                        <div class="card-body">
                            <img src="./images/${item.image}" alt="Image ${item.title}" />
                            <h3 class="card-title mt-3">${item.title}</h3>
                        </div>
                    </div>
                `;
                card.querySelector(".card-body").appendChild(ul)

                // Append the card to the current row
                row.appendChild(card);

                // If the index is a multiple of 3 or it's the last element, create a new row
                if ((index + 1) % 3 === 0 || index === data.length - 1) {
                    container.appendChild(row);
                    row = document.createElement("div");
                    row.classList.add("row");
                }
            });
        });
}

// Function to dynamically create HTML elements from the JSON file
function createPortfolioFromJSON() {
    const container = document.querySelector("#portfolio .container");
    let row = document.createElement("div");
    row.classList.add("row", "space-card");

    // Load the JSON file
    fetch("data/portfolio.json")
        .then((response) => response.json())
        .then((data) => {
            // Iterate through the JSON data and create HTML elements
            data.forEach((item, index) => {
                const card = document.createElement("div");
                card.classList.add("col-lg-6", "mt-6");
                card.innerHTML = `
                    <div class="card portfolioContent">
                        <img class="card-img-top" src="images/${item.image}" alt="Image ${item.title}">
                        <div class="card-body">
                            <h3 class="card-title">${item.title}</h3>
                            <p class="card-text">${item.text}</p>
                            <div class="text-center">
                                <a target="_blank" href="${item.link}" class="btn btn-success">Lien</a>
                            </div>
                        </div>
                    </div>
                `;

                // Append the card to the current row
                row.appendChild(card);

                // If the index is a multiple of 2 or it's the last element, create a new row
                if ((index + 1) % 2 === 0 || index === data.length - 1) {
                    container.appendChild(row);
                    row = document.createElement("div");
                    row.classList.add("row", "space-card");
                }
            });
        });
}

// Function to dynamically create HTML elements from the JSON file
function createUniverseFromJSON() {
    const container = document.querySelector("#universe .container");
    let row = document.createElement("div");
    row.classList.add("row");

    // Load the JSON file
    fetch("data/universe.json")
        .then((response) => response.json())
        .then((data) => {
            // Iterate through the JSON data and create HTML elements
            data.forEach((item, index) => {
                const card = document.createElement("div");
                card.classList.add("col-lg-4", "mt-4");
                const points = item.text.split(", ");
                const ul = document.createElement("ul");
                points.forEach((point) => {
                    const li = document.createElement("li");
                    li.textContent = point.trim();
                    ul.appendChild(li);
                });

                // **Ajout du 'ul' dans la carte à la place du 'p'**
                card.innerHTML = `
                    <div class="card universeText">
                        <div class="card-body">
                            <h3 class="card-title mt-3">${item.title}</h3>
                        </div>
                    </div>
                `;
                card.querySelector(".card-body").appendChild(ul)

                // Append the card to the current row
                row.appendChild(card);

                // If the index is a multiple of 3 or it's the last element, create a new row
                if ((index + 1) % 3 === 0 || index === data.length - 1) {
                    container.appendChild(row);
                    row = document.createElement("div");
                    row.classList.add("row");
                }
            });
        });
}

// Call the functions to execute the code
handleNavbarScroll();
handleNavbarCollapse();
createSkillsFromJSON();
createPortfolioFromJSON();
createUniverseFromJSON();
