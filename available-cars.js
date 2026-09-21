const carsData = [
  {
    id: 1,
    brand: "Toyota",
    model: "Camry",
    type: "Sedan",
    seats: 5,
    transmission: "Automatic",
    pricePerDay: 58,
    image:
      "https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 2,
    brand: "Honda",
    model: "Civic",
    type: "Sedan",
    seats: 5,
    transmission: "Manual",
    pricePerDay: 52,
    image:
      "https://images.unsplash.com/photo-1549925862-9908b6a4f0f0?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 3,
    brand: "Hyundai",
    model: "i20",
    type: "Hatchback",
    seats: 5,
    transmission: "Manual",
    pricePerDay: 42,
    image:
      "https://images.unsplash.com/photo-1580414057403-c5f451f30e1c?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 4,
    brand: "Volkswagen",
    model: "Golf",
    type: "Hatchback",
    seats: 5,
    transmission: "Automatic",
    pricePerDay: 49,
    image:
      "https://images.unsplash.com/photo-1541443131876-44b03de101c5?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 5,
    brand: "Nissan",
    model: "X-Trail",
    type: "SUV",
    seats: 7,
    transmission: "Automatic",
    pricePerDay: 78,
    image:
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 6,
    brand: "Kia",
    model: "Sportage",
    type: "SUV",
    seats: 5,
    transmission: "Automatic",
    pricePerDay: 74,
    image:
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 7,
    brand: "BMW",
    model: "5 Series",
    type: "Luxury",
    seats: 5,
    transmission: "Automatic",
    pricePerDay: 135,
    image:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 8,
    brand: "Mercedes",
    model: "E-Class",
    type: "Luxury",
    seats: 5,
    transmission: "Automatic",
    pricePerDay: 148,
    image:
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 9,
    brand: "Ford",
    model: "Escape",
    type: "SUV",
    seats: 5,
    transmission: "Manual",
    pricePerDay: 67,
    image:
      "https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1200&q=80"
  }
];

const elements = {
  carsGrid: document.getElementById("carsGrid"),
  emptyState: document.getElementById("emptyState"),
  resultsCount: document.getElementById("resultsCount"),
  searchInput: document.getElementById("searchInput"),
  typeFilter: document.getElementById("typeFilter"),
  brandFilter: document.getElementById("brandFilter"),
  transmissionFilter: document.getElementById("transmissionFilter"),
  priceFilter: document.getElementById("priceFilter"),
  resetFiltersBtn: document.getElementById("resetFiltersBtn")
};

function uniqueValues(key) {
  return [...new Set(carsData.map((car) => car[key]))].sort();
}

function fillSelectOptions(selectElement, values) {
  values.forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    selectElement.appendChild(option);
  });
}

function populateFilterLists() {
  fillSelectOptions(elements.typeFilter, uniqueValues("type"));
  fillSelectOptions(elements.brandFilter, uniqueValues("brand"));
}

function createCardTemplate(car) {
  return `
    <div class="col-12 col-sm-6 col-xl-4">
      <article class="car-card">
        <img src="${car.image}" alt="${car.brand} ${car.model}" class="car-image" loading="lazy" />
        <div class="car-card-body">
          <h2 class="car-title">${car.brand} ${car.model}</h2>
          <p class="car-meta">Type: ${car.type}</p>
          <p class="car-meta">Seats: ${car.seats}</p>
          <p class="car-meta">Transmission: ${car.transmission}</p>
          <p class="price-line">$${car.pricePerDay} / day</p>
          <button type="button" class="btn btn-outline-primary w-100">View Details</button>
        </div>
      </article>
    </div>
  `;
}

function getFilteredCars() {
  const searchText = elements.searchInput.value.trim().toLowerCase();
  const selectedType = elements.typeFilter.value;
  const selectedBrand = elements.brandFilter.value;
  const selectedTransmission = elements.transmissionFilter.value;
  const selectedPrice = elements.priceFilter.value;

  return carsData.filter((car) => {
    const bySearch =
      car.brand.toLowerCase().includes(searchText) ||
      car.model.toLowerCase().includes(searchText);
    const byType = selectedType === "all" || car.type === selectedType;
    const byBrand = selectedBrand === "all" || car.brand === selectedBrand;
    const byTransmission =
      selectedTransmission === "all" || car.transmission === selectedTransmission;
    const byPrice = selectedPrice === "all" || car.pricePerDay <= Number(selectedPrice);

    return bySearch && byType && byBrand && byTransmission && byPrice;
  });
}

function renderCars() {
  const filteredCars = getFilteredCars();
  elements.carsGrid.innerHTML = filteredCars.map(createCardTemplate).join("");

  elements.resultsCount.textContent = `${filteredCars.length} car(s) found`;

  if (filteredCars.length === 0) {
    elements.emptyState.classList.remove("d-none");
  } else {
    elements.emptyState.classList.add("d-none");
  }
}

function resetFilters() {
  elements.searchInput.value = "";
  elements.typeFilter.value = "all";
  elements.brandFilter.value = "all";
  elements.transmissionFilter.value = "all";
  elements.priceFilter.value = "all";
  renderCars();
}

function bindEvents() {
  [
    elements.searchInput,
    elements.typeFilter,
    elements.brandFilter,
    elements.transmissionFilter,
    elements.priceFilter
  ].forEach((element) => {
    element.addEventListener("input", renderCars);
    element.addEventListener("change", renderCars);
  });

  elements.resetFiltersBtn.addEventListener("click", resetFilters);
}

function initAvailableCarsPage() {
  populateFilterLists();
  bindEvents();
  renderCars();
}

document.addEventListener("DOMContentLoaded", initAvailableCarsPage);
