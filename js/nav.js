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
        });
    });
}

// --- Responsive Resize Logic ---
function handleResize() {
    const currentlyMobile = window.innerWidth <= mobileBreakpoint;

    // Detect a change in state
    if (currentlyMobile !== isMobile) {

        // Close main menu and all dropdowns when changing view type
        navMenu.classList.remove('open');
        document.querySelectorAll('.main-nav-dropdown.open').forEach(dropdown => {
            dropdown.classList.remove('open');
        });
    }

    // Update state
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

const debouncedResize = debounce(handleResize, 150);

// --- Event Listeners ---
navToggle.addEventListener('click', () => {
    if (window.innerWidth <= mobileBreakpoint) {
        navMenu.classList.toggle('open');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    setupDropdownToggles();
    handleResize(); // initial check
});

window.addEventListener('resize', debouncedResize);
