const elements = {
  bookingCard: document.getElementById("bookingCard"),
  emptyState: document.getElementById("emptyState"),
  bookingMessage: document.getElementById("bookingMessage"),
  bookingId: document.getElementById("bookingId"),
  carImage: document.getElementById("carImage"),
  carName: document.getElementById("carName"),
  pickupLocation: document.getElementById("pickupLocation"),
  pickupDateTime: document.getElementById("pickupDateTime"),
  returnDate: document.getElementById("returnDate"),
  rentalDays: document.getElementById("rentalDays"),
  pricePerDay: document.getElementById("pricePerDay"),
  totalPrice: document.getElementById("totalPrice"),
  bookingStatus: document.getElementById("bookingStatus"),
  cancelBookingBtn: document.getElementById("cancelBookingBtn"),
  modifyBookingBtn: document.getElementById("modifyBookingBtn")
};

function formatCurrency(amount, currency = "PKR") {
  return new Intl.NumberFormat("en-PK", {
    style: "currency",
    currency,
    maximumFractionDigits: 0
  }).format(Number(amount) || 0);
}

function getActiveBooking() {
  const bookingText = localStorage.getItem("activeBooking");
  return bookingText ? JSON.parse(bookingText) : null;
}

function formatDisplayDate(dateText) {
  if (!dateText) return "-";
  const date = new Date(`${dateText}T00:00:00`);
  return date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
}

function showMessage(type, text) {
  elements.bookingMessage.className = "alert";
  elements.bookingMessage.classList.add(type === "success" ? "alert-success" : "alert-info");
  elements.bookingMessage.textContent = text;
  elements.bookingMessage.classList.remove("d-none");
}

function showEmptyState() {
  elements.bookingCard.classList.add("d-none");
  elements.emptyState.classList.remove("d-none");
}

function showBookingState() {
  elements.emptyState.classList.add("d-none");
  elements.bookingCard.classList.remove("d-none");
}

function renderBooking(booking) {
  const currencyCode = booking.currency || "PKR";

  elements.bookingId.textContent = booking.bookingId;
  elements.carImage.src = booking.carImage;
  elements.carImage.alt = booking.carName;
  elements.carName.textContent = booking.carName;
  elements.pickupLocation.textContent = booking.pickupLocation;
  elements.pickupDateTime.textContent = `${formatDisplayDate(booking.pickupDate)} at ${booking.pickupTime}`;
  elements.returnDate.textContent = formatDisplayDate(booking.returnDate);
  elements.rentalDays.textContent = `${booking.rentalDays} day(s)`;
  elements.pricePerDay.textContent = formatCurrency(booking.pricePerDay, currencyCode);
  elements.totalPrice.textContent = formatCurrency(booking.totalPrice, currencyCode);
  elements.bookingStatus.textContent = booking.status || "Active";
}

function cancelBooking() {
  localStorage.removeItem("activeBooking");
  showMessage("success", "Your booking has been canceled successfully.");
  showEmptyState();
}

function modifyBooking(booking) {
  const carId = booking.carId || "";
  window.location.href = `booking.html?carId=${carId}&edit=1`;
}

function bindActions(booking) {
  elements.cancelBookingBtn.addEventListener("click", cancelBooking);
  elements.modifyBookingBtn.addEventListener("click", () => modifyBooking(booking));
}

function initMyBookingPage() {
  const booking = getActiveBooking();

  if (!booking || booking.status === "Cancelled") {
    showEmptyState();
    return;
  }

  renderBooking(booking);
  showBookingState();
  bindActions(booking);
}

document.addEventListener("DOMContentLoaded", initMyBookingPage);
