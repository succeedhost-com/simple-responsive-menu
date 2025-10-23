const mobileBreakpoint = 768;
let isMobile = window.innerWidth <= mobileBreakpoint;

const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.getElementById('main-nav-menu');

// --- Dropdown Setup ---
function setupDropdownToggles() {
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            e.stopPropagation();

            const parentLi = toggle.closest('li');
            const dropdown = parentLi.querySelector('.main-nav-dropdown');

            dropdown.classList.toggle('open');
            console.log(`Toggled dropdown for: ${toggle.textContent.trim()}`);
        });
    });
}

// --- Responsive Resize Logic ---
function handleResize() {
    const currentlyMobile = window.innerWidth <= mobileBreakpoint;

    // Entering mobile view
    if (currentlyMobile && !isMobile) {
        console.log("→ Entered mobile view");
    }

    // Entering desktop view
    if (!currentlyMobile && isMobile) {
        console.log("→ Entered desktop view");

        // Close mobile menu
        navMenu.classList.remove('open');

        // Close all dropdowns
        document.querySelectorAll('.main-nav-dropdown.open').forEach(dropdown => {
            dropdown.classList.remove('open');
        });
    }

    isMobile = currentlyMobile;
}

// --- Debounce Utility ---
function debounce(fn, delay = 150) {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => fn(...args), delay);
    };
}

// Debounced resize listener
const debouncedResize = debounce(handleResize, 150);

// --- Event Listeners ---
navToggle.addEventListener('click', () => {
    if (window.innerWidth <= mobileBreakpoint) {
        navMenu.classList.toggle('open');
        console.log("Toggled mobile menu:", navMenu.classList.contains('open') ? "open" : "closed");
    }
});

document.addEventListener('DOMContentLoaded', () => {
    setupDropdownToggles();
    handleResize(); // initial check
});

window.addEventListener('resize', debouncedResize);
