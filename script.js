// Scroll to services function
function scrollToServices() {
  const servicesSection = document.getElementById("services");
  if (servicesSection) {
    servicesSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

// Mobile Navigation Toggle
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  navToggle.classList.toggle("active");
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    navToggle.classList.remove("active");
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Back to top button functionality
const backToTopButton = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Contact form handling
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(contactForm);
    const name = contactForm.querySelector('input[type="text"]').value;
    const email = contactForm.querySelector('input[type="email"]').value;
    const message = contactForm.querySelector("textarea").value;

    // Simple validation
    if (!name || !email || !message) {
      alert("Bitte füllen Sie alle Felder aus");
      return;
    }

    // Simulate form submission
    const submitBtn = contactForm.querySelector(".btn-primary");
    const originalText = submitBtn.textContent;
    submitBtn.textContent = "Wird gesendet...";
    submitBtn.disabled = true;

    setTimeout(() => {
      alert("Vielen Dank für Ihre Nachricht! Wir melden uns bald bei Ihnen.");
      contactForm.reset();
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }, 2000);
  });
}

// Navbar background change on scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.background = "var(--background-white)";
    navbar.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.3)";
  } else {
    navbar.style.background = "var(--background-white)";
    navbar.style.boxShadow = "none";
  }
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe service cards for animation
document.querySelectorAll(".service-card").forEach((card) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(30px)";
  card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  observer.observe(card);
});

// Parallax effect for hero section - REMOVED
// window.addEventListener("scroll", () => {
//   const scrolled = window.pageYOffset;
//   const hero = document.querySelector(".hero");
//   const rate = scrolled * -0.5;
//   hero.style.transform = `translateY(${rate}px)`;
// });

// Add loading animation
window.addEventListener("load", () => {
  document.body.style.opacity = "0";
  document.body.style.transition = "opacity 0.5s ease";

  setTimeout(() => {
    document.body.style.opacity = "1";
  }, 100);
});

// Service card hover effects
document.querySelectorAll(".service-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-10px) scale(1.02)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0) scale(1)";
  });
});

// Add typing effect to hero title
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.innerHTML = "";

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }

  type();
}

// Initialize typing effect when page loads
window.addEventListener("load", () => {
  const greetingElement = document.querySelector(".greeting");
  const nameElement = document.querySelector(".name");

  if (greetingElement) {
    setTimeout(() => {
      typeWriter(greetingElement, "HALLO.", 150);
    }, 500);
  }

  if (nameElement) {
    setTimeout(() => {
      typeWriter(nameElement, "ICH BIN DOMANTE.", 150);
    }, 2000);
  }
});

// Add scroll progress indicator
function createScrollProgress() {
  const progressBar = document.createElement("div");
  progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(135deg, #d4a52a 0%, #e6b84d 100%);
        z-index: 9999;
        transition: width 0.1s ease;
    `;
  document.body.appendChild(progressBar);

  window.addEventListener("scroll", () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progressBar.style.width = scrolled + "%";
  });
}

// Initialize scroll progress
createScrollProgress();

// Accordion toggle functionality
function toggleAccordion(header) {
  const accordionCard = header.closest(".accordion-card");
  const isActive = accordionCard.classList.contains("active");

  // Close all other accordions
  document.querySelectorAll(".accordion-card").forEach((card) => {
    card.classList.remove("active");
  });

  // Toggle current accordion
  if (!isActive) {
    accordionCard.classList.add("active");
  }
}

// FAQ item toggle functionality
function toggleFaqItem(faqItem) {
  const isActive = faqItem.classList.contains("active");

  // Toggle current FAQ item
  if (isActive) {
    faqItem.classList.remove("active");
  } else {
    faqItem.classList.add("active");
  }
}

// Google Reviews Integration
async function loadGoogleReviews() {
  const API_KEY = "AIzaSyB4hxAxc9cFJ3ExqyQQWaW--haRrrtuLPk";
  const PLACE_ID = "ChIJ-4Z5UHD1pUcRf4eSzqkXqO4"; // Replace with your actual Google Place ID

  try {
    // First, get your place ID if you don't have it
    // You can find it using: https://developers.google.com/maps/documentation/places/web-service/place-id

    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews,rating&key=${API_KEY}`
    );

    const data = await response.json();

    if (data.result && data.result.reviews) {
      displayReviews(data.result.reviews);
    }
  } catch (error) {
    // Suppress CORS error for local file access - this is expected behavior
    // console.error("Error loading Google reviews:", error);
    // Fallback to static reviews if API fails
  }
}

function displayReviews(reviews) {
  const reviewsGrid = document.querySelector(".reviews-grid");
  if (!reviewsGrid) return;

  // Clear existing reviews
  reviewsGrid.innerHTML = "";

  // Display up to 3 most recent reviews
  const recentReviews = reviews.slice(0, 3);

  recentReviews.forEach((review) => {
    const reviewCard = createReviewCard(review);
    reviewsGrid.appendChild(reviewCard);
  });
}

function createReviewCard(review) {
  const card = document.createElement("div");
  card.className = "review-card";

  const stars = "★".repeat(review.rating) + "☆".repeat(5 - review.rating);
  const reviewDate = new Date(review.time * 1000).toLocaleDateString("de-DE");

  card.innerHTML = `
    <div class="review-stars">
      ${Array.from(
        { length: 5 },
        (_, i) =>
          `<i class="fas fa-star ${i < review.rating ? "" : "far"}"></i>`
      ).join("")}
    </div>
    <p class="review-text">"${review.text}"</p>
    <div class="review-author">
      <strong>${review.author_name}</strong>
      <span class="review-date">${reviewDate}</span>
    </div>
  `;

  return card;
}

// Static map is now used instead of interactive Google Maps
// This eliminates the need for API keys and prevents security issues

// Load reviews when page loads (no longer dependent on map initialization)
document.addEventListener("DOMContentLoaded", function () {
  // Load reviews after a short delay to ensure page is fully loaded
  setTimeout(() => {
    loadGoogleReviews();
  }, 1000);

  // Fallback timeout in case API takes too long
  setTimeout(() => {
    const reviewsGrid = document.querySelector(".reviews-grid");
    if (reviewsGrid && reviewsGrid.children.length === 0) {
      showStaticReviews();
    }
  }, 5000);
});

// Google Reviews Data (injected from reviews.json)
const REVIEWS_DATA = {
  lastUpdated: "2025-10-04T08:02:26.868Z",
  placeInfo: {
    name: "Diva Beauty",
    address: "Halberstädter Str. 50, 39112 Magdeburg, Deutschland",
    rating: 5,
    totalReviews: 20,
  },
  reviews: [
    {
      id: 1747866920,
      authorName: "Lisa",
      authorPhoto:
        "https://lh3.googleusercontent.com/a/ACg8ocJwMYmDBccXf6qTrRRbgzF0meZrh2-3f3rVbr1dmZ74waam8g=s128-c0x00000000-cc-rp-mo",
      rating: 5,
      text: "War heute das erste Mal dort. Hab sehr kurzfristig einen Termin bekommen und bin unheimlich freundlich empfangen worden. Es wurde meine katastrophale Wimpern Vorlage angeschaut, die von jemand anderes total versaut wurde. Und was soll ich sagen, es hat weder übermäßig lange gedauert noch hab ich mich unwohl gefühlt. Heraus kamen tolle Wimpern, die sehr natürlich aussehen, ich endlich kein brennen und tränende Augen mehr habe, und mich endlich wieder gut fühle. Bin dankbar hier gelandet zu sein und weiß jetzt schon, hier bleibe ich definitiv!!!",
      publishTime: "2025-05-21T22:35:20.000Z",
      relativeTime: "vor 4 Monaten",
      language: "de",
    },
    {
      id: 1752585732,
      authorName: "Liza K.",
      authorPhoto:
        "https://lh3.googleusercontent.com/a/ACg8ocL6myYpJXYtOR--oV_g4gflXKMmAHB25GKxbKTKDVf_Y2lnjw=s128-c0x00000000-cc-rp-mo",
      rating: 5,
      text: "Ich bin mit meinem Wimpernlifting wirklich sehr zufrieden. Die Atmosphäre ist toll, der Laden sieht super aus und die Arbeit ist wirklich top!!! Hält auch über 6 Wochen",
      publishTime: "2025-07-15T13:22:12.000Z",
      relativeTime: "vor 2 Monaten",
      language: "de",
    },
    {
      id: 1738671914,
      authorName: "Sarah H",
      authorPhoto:
        "https://lh3.googleusercontent.com/a/ACg8ocKkEfhDatewn0FJrSHr9wYU_t3FeLCaZdPyxw9RvFmP-8ESAg=s128-c0x00000000-cc-rp-mo",
      rating: 5,
      text: "Seit nun fast 2 Jahren gehe ich mittlerweile zu Domante zum Wimpern auffüllen. Die hohe Qualität spricht für sich. Auf Wünsche bezüglich Länge und Fülle wird jederzeit eingegangen. Bin sehr dankbar eine solch tolle Wimpernfee zu haben und kann sie von Herzen weiterempfehlen.",
      publishTime: "2025-02-04T11:18:34.000Z",
      relativeTime: "vor 8 Monaten",
      language: "de",
    },
    {
      id: 1713980510,
      authorName: "Al ly",
      authorPhoto:
        "https://lh3.googleusercontent.com/a/ACg8ocKBBZC0cNZOeeR2u3-TbdEZfhHHFFINI5kkD7_UzKVwrbd0MBw=s128-c0x00000000-cc-rp-mo",
      rating: 5,
      text: "Ich kann dieses Wimpern Studio nur jedem empfehlen. Die sind alle super nett und nehmen sich für jeden individuell Zeit. Man bekommt richtig schnell einen Termin und auch die Preise sind sehr fair. Wimpern halten bei mir Bombe Und auch sonst hatte ich noch nie Probleme 💕 Wer schöne Wimpern haben möchte, sollte auf jeden Fall hier hier vorbeigehen 😜",
      publishTime: "2024-04-24T16:51:50.000Z",
      relativeTime: "vor einem Jahr",
      language: "de",
    },
    {
      id: 1713973561,
      authorName: "Sandra Schröder",
      authorPhoto:
        "https://lh3.googleusercontent.com/a-/ALV-UjWhQo0KN5Ndp1yp_pH84PK-gDhYBW7rmtocAtM7ElGalJowi6Pm=s128-c0x00000000-cc-rp-mo",
      rating: 5,
      text: "Ich vergebe sehr gerne 5 Sterne! Domante liefert eine äußerst ordentliche Arbeit. Seit über einem Jahr gehe ich zu ihr für Wimpernverlängerungen und bin einfach begeistert, wie natürlich schön meine Wimpern aussehen. Vielen Dank für den tollen Service, angefangen von der Terminvereinbarung bis hin zur Umsetzung.",
      publishTime: "2024-04-24T14:39:21.000Z",
      relativeTime: "vor einem Jahr",
      language: "de",
    },
  ],
};

// Load Google Reviews from injected data
function loadGoogleReviews() {
  try {
    const reviewsData = REVIEWS_DATA;

    if (reviewsData.reviews && reviewsData.reviews.length > 0) {
      displayReviewsFromData(reviewsData);
    } else {
      showStaticReviews();
    }
  } catch (error) {
    showStaticReviews();
  }
}

// Display reviews from JSON data
function displayReviewsFromData(reviewsData) {
  const reviewsGrid = document.querySelector(".reviews-grid");
  if (!reviewsGrid) return;

  // Update section title - keep it simple without rating/date info
  const sectionTitle = document.querySelector(".reviews .section-title");
  if (sectionTitle) {
    sectionTitle.innerHTML = `Was unsere Kunden sagen`;
  }

  // Clear existing reviews
  reviewsGrid.innerHTML = "";

  // Display 3 random reviews
  const shuffledReviews = [...reviewsData.reviews].sort(
    () => Math.random() - 0.5
  );
  const randomReviews = shuffledReviews.slice(0, 3);

  randomReviews.forEach((review) => {
    const reviewCard = createReviewCardFromData(review);
    reviewsGrid.appendChild(reviewCard);
  });
}

// Create review card from JSON data
function createReviewCardFromData(review) {
  const card = document.createElement("div");
  card.className = "review-card";

  // Format date
  const reviewDate = new Date(review.publishTime).toLocaleDateString("de-DE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Check if review is too long (more than 200 characters)
  const isLongReview = review.text.length > 200;
  const shortText = isLongReview
    ? review.text.substring(0, 200) + "..."
    : review.text;

  card.innerHTML = `
    <div class="review-stars">
      ${Array.from(
        { length: 5 },
        (_, i) =>
          `<i class="fas fa-star ${i < review.rating ? "" : "far"}"></i>`
      ).join("")}
    </div>
    <p class="review-text">
      "${shortText}"
      ${
        isLongReview
          ? `<span class="read-more-btn" onclick="toggleReviewText(this)">Mehr lesen</span>`
          : ""
      }
    </p>
    <div class="review-author">
      <strong>${review.authorName}</strong>
      <span class="review-date">${reviewDate}</span>
    </div>
  `;

  // Store full text in data attribute for read more functionality
  if (isLongReview) {
    const reviewTextElement = card.querySelector(".review-text");
    reviewTextElement.setAttribute("data-full-text", `"${review.text}"`);
    reviewTextElement.setAttribute("data-short-text", `"${shortText}"`);
  }

  return card;
}

// Toggle review text between short and full
function toggleReviewText(button) {
  const reviewTextElement = button.parentElement;
  const fullText = reviewTextElement.getAttribute("data-full-text");
  const shortText = reviewTextElement.getAttribute("data-short-text");

  if (button.textContent === "Mehr lesen") {
    reviewTextElement.innerHTML =
      fullText +
      ` <span class="read-more-btn" onclick="toggleReviewText(this)">Weniger anzeigen</span>`;
  } else {
    reviewTextElement.innerHTML =
      shortText +
      ` <span class="read-more-btn" onclick="toggleReviewText(this)">Mehr lesen</span>`;
  }
}

// Fallback function to show static reviews
function showStaticReviews() {
  const reviewsGrid = document.querySelector(".reviews-grid");
  if (!reviewsGrid) return;

  // Keep the existing static reviews that are already in the HTML
  // Just add a note that these are sample reviews
  const sectionTitle = document.querySelector(".reviews .section-title");
  if (sectionTitle) {
    sectionTitle.innerHTML = `
      Was unsere Kunden sagen
      <div style="display: flex; align-items: center; justify-content: center; margin-top: 10px; font-size: 0.8em; color: #666;">
        <div style="display: flex; margin-right: 10px;">
          <i class="fas fa-star" style="color: #ffd700;"></i>
          <i class="fas fa-star" style="color: #ffd700;"></i>
          <i class="fas fa-star" style="color: #ffd700;"></i>
          <i class="fas fa-star" style="color: #ffd700;"></i>
          <i class="fas fa-star" style="color: #ffd700;"></i>
        </div>
        <span style="font-weight: bold; color: #e74c3c;">5.0</span>
        <span style="margin-left: 5px;">(Beispielbewertungen)</span>
      </div>
    `;
  }
}

function displayReviews(reviews, overallRating, totalRatings) {
  const reviewsGrid = document.querySelector(".reviews-grid");
  if (!reviewsGrid) return;

  // Add overall rating display
  const sectionTitle = document.querySelector(".reviews .section-title");
  if (sectionTitle && overallRating) {
    sectionTitle.innerHTML = `
      Was unsere Kunden sagen
      <div style="display: flex; align-items: center; justify-content: center; margin-top: 10px; font-size: 0.8em; color: #666;">
        <div style="display: flex; margin-right: 10px;">
          ${Array.from(
            { length: 5 },
            (_, i) =>
              `<i class="fas fa-star" style="color: ${
                i < Math.floor(overallRating) ? "#ffd700" : "#ddd"
              };"></i>`
          ).join("")}
        </div>
        <span style="font-weight: bold; color: #e74c3c;">${overallRating.toFixed(
          1
        )}</span>
        <span style="margin-left: 5px;">(${totalRatings} Bewertungen)</span>
      </div>
    `;
  }

  // Clear existing reviews
  reviewsGrid.innerHTML = "";

  // Display up to 3 most recent reviews
  const recentReviews = reviews.slice(0, 3);

  recentReviews.forEach((review) => {
    const reviewCard = createReviewCard(review);
    reviewsGrid.appendChild(reviewCard);
  });
}

// This function is no longer needed since we're using createReviewCardFromData
// Keeping it for backward compatibility but it won't be used

// Helper functions for finding Place ID (no longer needed since we have the correct one)
// These functions are kept for reference but not used in the main flow

// Google Maps initialization is now handled in the HTML head for better loading performance

// Initialize page when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Reviews will be loaded when page is ready
  // Uncomment these lines to help find your business Place ID
  // findBusinessPlaceId();
  // findBusinessByCoordinates();
});
