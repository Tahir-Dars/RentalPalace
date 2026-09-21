function getNavActiveKey() {
  return document.body.getAttribute("data-nav") || "";
}

function renderSharedHeader() {
  const host = document.getElementById("siteHeader");
  if (!host) return;

  const activeKey = getNavActiveKey();
  const isHome = activeKey === "home";
  const isCars = activeKey === "cars";
  const isBooking = activeKey === "booking";

  host.innerHTML = `
    <nav class="navbar navbar-expand-lg bg-white shadow-sm sticky-top">
      <div class="container py-2">
        <a class="navbar-brand d-flex align-items-center gap-2" href="index.html">
          <span class="brand-mark">CR</span>
          <span class="brand-text">Car Rental House</span>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="mainNav">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center gap-lg-3">
            <li class="nav-item"><a class="nav-link ${isHome ? "active" : ""}" href="index.html">Home</a></li>
            <li class="nav-item"><a class="nav-link ${isCars ? "active" : ""}" href="available-cars.html">Cars</a></li>
            <li class="nav-item"><a class="nav-link ${isBooking ? "active" : ""}" href="my-booking.html">My Booking</a></li>
            <li class="nav-item"><a class="nav-link" href="#siteFooter">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  `;
}

function renderSharedFooter() {
  const footer = document.getElementById("siteFooter");
  if (!footer) return;

  const year = new Date().getFullYear();

  footer.classList.add("pt-5", "pb-4");
  footer.innerHTML = `
    <div class="container">
      <div class="row g-4">
        <div class="col-12 col-lg-4">
          <h3 class="footer-title">Car Rental House</h3>
          <p class="footer-text">Reliable car rentals for business trips, vacations, and everyday travel.</p>
          <p class="footer-text mb-0">Email: support@carrentalhouse.com</p>
          <p class="footer-text">Phone: +1 (555) 123-4567</p>
        </div>
        <div class="col-6 col-lg-2">
          <h4 class="footer-subtitle">Navigate</h4>
          <ul class="footer-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="available-cars.html">Cars</a></li>
            <li><a href="my-booking.html">My Booking</a></li>
            <li><a href="#siteFooter">Contact</a></li>
          </ul>
        </div>
        <div class="col-6 col-lg-3">
          <h4 class="footer-subtitle">Locations</h4>
          <ul class="footer-links">
            <li><a href="#">New York</a></li>
            <li><a href="#">Los Angeles</a></li>
            <li><a href="#">Chicago</a></li>
            <li><a href="#">Miami</a></li>
          </ul>
        </div>
        <div class="col-12 col-lg-3">
          <h4 class="footer-subtitle">Business Hours</h4>
          <p class="footer-text mb-1">Mon - Fri: 8:00 AM - 9:00 PM</p>
          <p class="footer-text mb-0">Sat - Sun: 9:00 AM - 7:00 PM</p>
        </div>
      </div>
      <hr class="footer-divider" />
      <p class="copyright mb-0">&copy; ${year} Car Rental House. All rights reserved.</p>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  renderSharedHeader();
  renderSharedFooter();
});
