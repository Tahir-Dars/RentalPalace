const carsCatalog = [
  {
    id: 1,
    brand: "Toyota",
    model: "Camry",
    type: "Sedan",
    seats: 5,
    transmission: "Automatic",
    fuelType: "Petrol",
    modelYear: 2023,
    features: ["AC", "Bluetooth", "GPS", "Airbags"],
    description: "A smooth and reliable sedan ideal for city commuting and long highway drives.",
    rentalConditions: "Minimum age 21, valid driving license, refundable security deposit required.",
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
    fuelType: "Petrol",
    modelYear: 2022,
    features: ["AC", "Bluetooth", "GPS", "Airbags"],
    description: "Sporty and efficient, with excellent comfort for daily and weekend use.",
    rentalConditions: "Minimum age 21, original ID required, no smoking inside the vehicle.",
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
    fuelType: "Petrol",
    modelYear: 2021,
    features: ["AC", "Bluetooth", "GPS", "Airbags"],
    description: "Compact and easy to park, perfect for urban routes and budget-friendly trips.",
    rentalConditions: "Minimum age 20, valid license required, fuel level must match return policy.",
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
    fuelType: "Diesel",
    modelYear: 2023,
    features: ["AC", "Bluetooth", "GPS", "Airbags"],
    description: "Premium hatchback with stable handling and a modern, comfortable interior.",
    rentalConditions: "Minimum age 21, card payment preferred, late return charges apply.",
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
    fuelType: "Petrol",
    modelYear: 2024,
    features: ["AC", "Bluetooth", "GPS", "Airbags"],
    description: "Spacious 7-seater SUV built for family tours and comfortable road adventures.",
    rentalConditions: "Minimum age 25, higher security deposit for SUVs, off-road use not allowed.",
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
    fuelType: "Hybrid",
    modelYear: 2023,
    features: ["AC", "Bluetooth", "GPS", "Airbags"],
    description: "A stylish SUV that balances comfort, fuel economy, and practical luggage space.",
    rentalConditions: "Minimum age 23, valid license and passport/ID required for pickup.",
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
    fuelType: "Petrol",
    modelYear: 2024,
    features: ["AC", "Bluetooth", "GPS", "Airbags"],
    description: "Executive luxury sedan with premium finishes, smooth ride, and strong performance.",
    rentalConditions: "Minimum age 27, premium insurance mandatory, strict return inspection applies.",
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
    fuelType: "Diesel",
    modelYear: 2024,
    features: ["AC", "Bluetooth", "GPS", "Airbags"],
    description: "Elegant business-class vehicle designed for maximum comfort and refinement.",
    rentalConditions: "Minimum age 27, valid credit card required, cross-border travel requires approval.",
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
    fuelType: "Petrol",
    modelYear: 2022,
    features: ["AC", "Bluetooth", "GPS", "Airbags"],
    description: "Dependable SUV with practical seating and cargo room for everyday travel.",
    rentalConditions: "Minimum age 23, return with agreed fuel level, pets allowed with cleaning fee.",
    pricePerDay: 67,
    image:
      "https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1200&q=80"
  }
];

const detailElements = {
  image: document.getElementById("carImage"),
  name: document.getElementById("carName"),
  price: document.getElementById("carPrice"),
  type: document.getElementById("carType"),
  seats: document.getElementById("carSeats"),
  transmission: document.getElementById("carTransmission"),
  fuel: document.getElementById("carFuel"),
  year: document.getElementById("carYear"),
  features: document.getElementById("carFeatures"),
  description: document.getElementById("carDescription"),
  conditions: document.getElementById("carConditions"),
  rentBtn: document.getElementById("rentCarBtn")
};

function findCarFromQuery() {
  const params = new URLSearchParams(window.location.search);
  const carId = Number(params.get("id"));
  if (!carId) return carsCatalog[0];

  return carsCatalog.find((car) => car.id === carId) || carsCatalog[0];
}

function renderCarDetails(car) {
  detailElements.image.src = car.image;
  detailElements.image.alt = `${car.brand} ${car.model}`;

  detailElements.name.textContent = `${car.brand} ${car.model}`;
  detailElements.price.textContent = `$${car.pricePerDay} / day`;
  detailElements.type.textContent = car.type;
  detailElements.seats.textContent = String(car.seats);
  detailElements.transmission.textContent = car.transmission;
  detailElements.fuel.textContent = car.fuelType;
  detailElements.year.textContent = String(car.modelYear);
  detailElements.description.textContent = car.description;
  detailElements.conditions.textContent = car.rentalConditions;

  detailElements.features.innerHTML = car.features
    .map((feature) => `<li>${feature}</li>`)
    .join("");
}

function bindRentButton(car) {
  detailElements.rentBtn.addEventListener("click", () => {
    localStorage.setItem("selectedRentalCar", JSON.stringify(car));
    window.location.href = `index.html?carId=${car.id}#booking`;
  });
}

function initCarDetailsPage() {
  const selectedCar = findCarFromQuery();
  renderCarDetails(selectedCar);
  bindRentButton(selectedCar);
}

document.addEventListener("DOMContentLoaded", initCarDetailsPage);
