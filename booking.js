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

const bookingElements = {
  bookingForm: document.getElementById("bookingForm"),
  bookingMessage: document.getElementById("bookingMessage"),
  selectedCarImage: document.getElementById("selectedCarImage"),
  selectedCarName: document.getElementById("selectedCarName"),
  selectedCarPrice: document.getElementById("selectedCarPrice"),
  summaryPricePerDay: document.getElementById("summaryPricePerDay"),
  summaryRentalDays: document.getElementById("summaryRentalDays"),
  summaryTotalPrice: document.getElementById("summaryTotalPrice"),
  pickupDate: document.getElementById("pickupDate"),
  returnDate: document.getElementById("returnDate"),
  pickupTime: document.getElementById("pickupTime")
};

let activeCar = null;
const CURRENCY_CODE = "PKR";

function formatCurrency(amount) {
  return new Intl.NumberFormat("en-PK", {
    style: "currency",
    currency: CURRENCY_CODE,
    maximumFractionDigits: 0
  }).format(Number(amount) || 0);
}

function generateBookingId() {
  const randomPart = Math.floor(100 + Math.random() * 900);
  return `SDH-${Date.now().toString().slice(-6)}-${randomPart}`;
}

function getSelectedCar() {
  const params = new URLSearchParams(window.location.search);
  const queryCarId = Number(params.get("carId"));

  const storedCarText = localStorage.getItem("selectedRentalCar");
  const storedCar = storedCarText ? JSON.parse(storedCarText) : null;

  if (storedCar && (!queryCarId || Number(storedCar.id) === queryCarId)) {
    return storedCar;
  }

  if (queryCarId) {
    return carsCatalog.find((car) => car.id === queryCarId) || carsCatalog[0];
  }

  return carsCatalog[0];
}

function renderSelectedCar(car) {
  bookingElements.selectedCarImage.src = car.image;
  bookingElements.selectedCarImage.alt = `${car.brand} ${car.model}`;
  bookingElements.selectedCarName.textContent = `${car.brand} ${car.model}`;
  bookingElements.selectedCarPrice.textContent = `${formatCurrency(car.pricePerDay)} / day`;

  bookingElements.summaryPricePerDay.textContent = formatCurrency(car.pricePerDay);
}

function toDateAtMidnight(dateString) {
  return new Date(`${dateString}T00:00:00`);
}

function calculateRentalDays(pickupDate, returnDate) {
  if (!pickupDate || !returnDate) return 0;

  const pickup = toDateAtMidnight(pickupDate);
  const dropoff = toDateAtMidnight(returnDate);

  if (dropoff < pickup) return -1;

  const diffMs = dropoff - pickup;
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diffMs / oneDay) + 1;
}

function updateRentalSummary() {
  const days = calculateRentalDays(
    bookingElements.pickupDate.value,
    bookingElements.returnDate.value
  );

  if (!activeCar) return;

  if (days <= 0) {
    bookingElements.summaryRentalDays.textContent = "0";
    bookingElements.summaryTotalPrice.textContent = formatCurrency(0);
    return;
  }

  const totalPrice = days * activeCar.pricePerDay;
  bookingElements.summaryRentalDays.textContent = String(days);
  bookingElements.summaryTotalPrice.textContent = formatCurrency(totalPrice);
}

function setDefaultDateAndTime() {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  const toInputValue = (date) => date.toISOString().split("T")[0];

  bookingElements.pickupDate.value = toInputValue(today);
  bookingElements.returnDate.value = toInputValue(tomorrow);
  bookingElements.pickupTime.value = "10:00";
}

function setInvalid(element, isInvalid) {
  if (isInvalid) {
    element.classList.add("is-invalid");
  } else {
    element.classList.remove("is-invalid");
  }
}

function validateForm() {
  const requiredFields = bookingElements.bookingForm.querySelectorAll("input[required]");
  let valid = true;

  requiredFields.forEach((field) => {
    const isMissing = !field.value.trim();
    setInvalid(field, isMissing);
    if (isMissing) valid = false;
  });

  const days = calculateRentalDays(
    bookingElements.pickupDate.value,
    bookingElements.returnDate.value
  );

  const invalidDates = days <= 0;
  setInvalid(bookingElements.returnDate, invalidDates);
  if (invalidDates) valid = false;

  return valid;
}

function showMessage(type, text) {
  const message = bookingElements.bookingMessage;
  message.className = "alert";
  message.classList.add(type === "success" ? "alert-success" : "alert-danger");
  message.textContent = text;
  message.classList.remove("d-none");
}

function saveActiveBooking() {
  const rentalDays = Number(bookingElements.summaryRentalDays.textContent);
  const totalPrice = activeCar.pricePerDay * rentalDays;
  const existingBookingText = localStorage.getItem("activeBooking");
  const existingBooking = existingBookingText ? JSON.parse(existingBookingText) : null;

  const bookingData = {
    bookingId: existingBooking?.bookingId || generateBookingId(),
    selectedCar: {
      id: activeCar.id,
      brand: activeCar.brand,
      model: activeCar.model,
      image: activeCar.image,
      type: activeCar.type,
      transmission: activeCar.transmission,
      fuelType: activeCar.fuelType,
      modelYear: activeCar.modelYear
    },
    carId: activeCar.id,
    carName: `${activeCar.brand} ${activeCar.model}`,
    carImage: activeCar.image,
    pickupLocation: document.getElementById("pickupLocation").value.trim(),
    pickupDate: bookingElements.pickupDate.value,
    pickupTime: bookingElements.pickupTime.value,
    returnDate: bookingElements.returnDate.value,
    rentalDays,
    pricePerDay: activeCar.pricePerDay,
    totalPrice,
    currency: CURRENCY_CODE,
    customerName: document.getElementById("customerName").value.trim(),
    phoneNumber: document.getElementById("phoneNumber").value.trim(),
    status: "Active"
  };

  localStorage.setItem("activeBooking", JSON.stringify(bookingData));
}

function prefillBookingFormFromActiveBooking() {
  const params = new URLSearchParams(window.location.search);
  const isModifyMode = params.get("edit") === "1";
  if (!isModifyMode) return;

  const activeBookingText = localStorage.getItem("activeBooking");
  const activeBooking = activeBookingText ? JSON.parse(activeBookingText) : null;
  if (!activeBooking) return;

  document.getElementById("customerName").value = activeBooking.customerName || "";
  document.getElementById("phoneNumber").value = activeBooking.phoneNumber || "";
  document.getElementById("pickupLocation").value = activeBooking.pickupLocation || "";
  bookingElements.pickupDate.value = activeBooking.pickupDate || bookingElements.pickupDate.value;
  bookingElements.returnDate.value = activeBooking.returnDate || bookingElements.returnDate.value;
  bookingElements.pickupTime.value = activeBooking.pickupTime || bookingElements.pickupTime.value;
}

function bindEvents() {
  bookingElements.pickupDate.addEventListener("change", updateRentalSummary);
  bookingElements.returnDate.addEventListener("change", updateRentalSummary);

  bookingElements.bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!validateForm()) {
      showMessage("error", "Please complete all required fields and ensure return date is not earlier than pickup date.");
      updateRentalSummary();
      return;
    }

    const days = Number(bookingElements.summaryRentalDays.textContent);
    const totalPrice = bookingElements.summaryTotalPrice.textContent;

    saveActiveBooking();

    showMessage(
      "success",
      `Booking confirmed for ${activeCar.brand} ${activeCar.model}. Duration: ${days} day(s). Total: ${formatCurrency(totalPrice)}.`
    );

    setTimeout(() => {
      window.location.href = "my-booking.html";
    }, 600);
  });

  bookingElements.bookingForm.querySelectorAll("input[required]").forEach((field) => {
    field.addEventListener("input", () => setInvalid(field, false));
  });
}

function initBookingPage() {
  activeCar = getSelectedCar();
  localStorage.setItem("selectedRentalCar", JSON.stringify(activeCar));

  renderSelectedCar(activeCar);
  setDefaultDateAndTime();
  prefillBookingFormFromActiveBooking();
  updateRentalSummary();
  bindEvents();
}

document.addEventListener("DOMContentLoaded", initBookingPage);
