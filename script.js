
/* ==========================================
   LIGA ALIEF — WEBSITE INTERACTIONS
========================================== */


/* ==========================================
   1. MOBILE NAVIGATION
========================================== */

const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector(".primary-nav");

if (menuToggle && primaryNav) {

    menuToggle.addEventListener("click", () => {

        const isOpen = primaryNav.classList.toggle("open");

        menuToggle.setAttribute("aria-expanded", String(isOpen));

    });


    // Close the menu after selecting a navigation link.

    primaryNav.querySelectorAll("a").forEach((link) => {

        link.addEventListener("click", () => {

            primaryNav.classList.remove("open");

            menuToggle.setAttribute("aria-expanded", "false");

        });

    });


    // Close the menu when the user presses Escape.

    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {

            primaryNav.classList.remove("open");

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.focus();

        }

    });


    // Close the menu if the browser returns to desktop width.

    window.addEventListener("resize", () => {

        if (window.innerWidth > 700) {

            primaryNav.classList.remove("open");

            menuToggle.setAttribute("aria-expanded", "false");

        }

    });

}


/* ==========================================
   2. ACTIVE NAVIGATION LINK
========================================== */

const currentPage = window.location.pathname
    .split("/")
    .pop() || "index.html";

document.querySelectorAll("[data-nav]").forEach((link) => {

    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {

        link.classList.add("active");

        link.setAttribute("aria-current", "page");

    } else {

        link.classList.remove("active");

        link.removeAttribute("aria-current");

    }

});


/* ==========================================
   3. AUTOMATIC FOOTER YEAR
========================================== */

const yearElements = document.querySelectorAll("[data-year]");

yearElements.forEach((element) => {

    element.textContent = new Date().getFullYear();

});


/* ==========================================
   4. FAQ ACCORDION
========================================== */

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {

    question.addEventListener("click", () => {

        const faqItem = question.closest(".faq-item");

        if (!faqItem) return;

        const isOpen = faqItem.classList.contains("open");

        // Close all other FAQ items.

        document.querySelectorAll(".faq-item").forEach((item) => {

            item.classList.remove("open");

            const button = item.querySelector(".faq-question");

            if (button) {

                button.setAttribute("aria-expanded", "false");

            }

        });

        // Toggle the selected FAQ item.

        if (!isOpen) {

            faqItem.classList.add("open");

            question.setAttribute("aria-expanded", "true");

        }

    });

});


/* ==========================================
   5. SMOOTH INTERNAL NAVIGATION
========================================== */

document.querySelectorAll('a[href^="#"]').forEach((link) => {

    link.addEventListener("click", (event) => {

        const targetId = link.getAttribute("href");

        if (!targetId || targetId === "#") return;

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        }

    });

});


/* ==========================================
   6. CONSOLE CONFIRMATION
========================================== */

console.log("Liga Alief website scripts loaded successfully.");
console.log("Liga Alief website scripts loaded successfully.");
