const cars = [
  {
    name: "Toyota Camry",
    type: "Sedan",
    seats: 5,
    transmission: "Automatic",
    pricePerDay: 18500,
    image:
      "https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=1200&q=80"
  },
  {
    name: "Honda CR-V",
    type: "SUV",
    seats: 7,
    transmission: "Automatic",
    pricePerDay: 25000,
    image:
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1200&q=80"
  },
  {
    name: "BMW 3 Series",
    type: "Luxury Sedan",
    seats: 5,
    transmission: "Automatic",
    pricePerDay: 42000,
    image:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80"
  },
  {
    name: "Hyundai i20",
    type: "Compact",
    seats: 5,
    transmission: "Manual",
    pricePerDay: 10500,
    image:
      "https://images.unsplash.com/photo-1580414057403-c5f451f30e1c?auto=format&fit=crop&w=1200&q=80"
  }
];

function renderCars() {
  const carGrid = document.getElementById("carGrid");
  if (!carGrid) return;

  const html = cars
    .map(
      (car) => `
      <div class="col-12 col-sm-6 col-lg-3">
        <article class="car-card h-100">
          <img src="${car.image}" alt="${car.name}" loading="lazy" />
          <div class="car-card-body">
            <h3 class="car-name">${car.name}</h3>
            <p class="car-type">${car.type}</p>
            <div class="car-meta">
              <span>${car.seats} Seats</span>
              <span>${car.transmission}</span>
            </div>
            <p class="car-price">$${car.pricePerDay} / day</p>
          </div>
        </article>
      </div>
    `
    )
    .join("");

  carGrid.innerHTML = html;
}

function setDefaultDates() {
  const pickupInput = document.getElementById("pickupDate");
  const returnInput = document.getElementById("returnDate");
  if (!pickupInput || !returnInput) return;

  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  const toDateInputValue = (date) => date.toISOString().split("T")[0];
  pickupInput.value = toDateInputValue(today);
  returnInput.value = toDateInputValue(tomorrow);
}

function initializeSearchForm() {
  const form = document.getElementById("quickSearchForm");
  const message = document.getElementById("searchMessage");
  const pickupInput = document.getElementById("pickupDate");
  const returnInput = document.getElementById("returnDate");
  if (!form || !message || !pickupInput || !returnInput) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const pickupDate = new Date(pickupInput.value);
    const returnDate = new Date(returnInput.value);

    if (returnDate <= pickupDate) {
      message.textContent = "Return date must be after pickup date.";
      message.style.color = "#b42318";
      return;
    }

    message.textContent = "Cars are available. Scroll down to choose your ride!";
    message.style.color = "#0b4f66";
  });
}

function setCurrentYear() {
  const yearElement = document.getElementById("year");
  if (!yearElement) return;
  yearElement.textContent = new Date().getFullYear();
}

function showSelectedCarForBooking() {
  const notice = document.getElementById("selectedCarNotice");
  if (!notice) return;

  const params = new URLSearchParams(window.location.search);
  const selectedCarId = params.get("carId");
  const storedCarText = localStorage.getItem("selectedRentalCar");
  const storedCar = storedCarText ? JSON.parse(storedCarText) : null;

  if (!storedCar) return;

  if (selectedCarId && String(storedCar.id) !== selectedCarId) {
    return;
  }

  notice.classList.remove("d-none");
  notice.innerHTML = `Selected Car: <strong>${storedCar.brand} ${storedCar.model}</strong> (${storedCar.type}) - $${storedCar.pricePerDay}/day`;
}

document.addEventListener("DOMContentLoaded", () => {
  renderCars();
  setDefaultDates();
  initializeSearchForm();
  showSelectedCarForBooking();
  setCurrentYear();
});
