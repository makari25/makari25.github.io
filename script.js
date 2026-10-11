const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
    menuToggle.textContent = isOpen ? "×" : "☰";
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation menu");
      menuToggle.textContent = "☰";
    });
  });
}

const searchInput = document.getElementById("journey-search");
const timelineItems = Array.from(document.querySelectorAll(".timeline-item"));
const journeyCount = document.getElementById("journey-count");
const emptyState = document.getElementById("empty-state");

function filterJourney() {
  const query = (searchInput?.value || "").trim().toLowerCase();
  let visible = 0;

  timelineItems.forEach((item) => {
    const matches = item.textContent.toLowerCase().includes(query) ||
      (item.dataset.tech || "").toLowerCase().includes(query);
    item.hidden = !matches;
    if (matches) visible += 1;
  });

  if (journeyCount) journeyCount.textContent = `${visible} of ${timelineItems.length} milestones`;
  if (emptyState) emptyState.hidden = visible !== 0;
}

searchInput?.addEventListener("input", filterJourney);
filterJourney();
