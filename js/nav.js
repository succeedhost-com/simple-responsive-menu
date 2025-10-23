const mobileBreakpoint = 768;
let isMobile = window.innerWidth <= mobileBreakpoint;

const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.getElementById('main-nav-menu');

// Toggle mobile menu only when in mobile view
navToggle.addEventListener('click', () => {
    if (window.innerWidth <= mobileBreakpoint) {
        navMenu.classList.toggle('open');
        console.log("Toggled mobile menu:", navMenu.classList.contains('open') ? "open" : "closed");
    }
});

function handleViewportChange() {
    const currentlyMobile = window.innerWidth <= mobileBreakpoint;

    // Detect transition from desktop → mobile
    if (currentlyMobile && !isMobile) {
        console.log("Switched to mobile view");
        // TODO: Add mobile-specific instructions here
    }

    // Detect transition from mobile → desktop
    else if (!currentlyMobile && isMobile) {
        console.log("Switched to desktop view");
        // TODO: Add desktop-specific instructions here
        // Close mobile menu if open
        navMenu.classList.remove('open');
    }

    // Update state
    isMobile = currentlyMobile;
}

// Initial check
handleViewportChange();

// Listen for window resize events
window.addEventListener('resize', handleViewportChange);

// Handle dropdown toggles
function setupDropdownToggles() {
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent bubbling to parent elements

            const parentLi = toggle.closest('li');
            const dropdown = parentLi.querySelector('.main-nav-dropdown');

            // Toggle only this dropdown
            dropdown.classList.toggle('open');

            console.log(`Toggled dropdown for: ${toggle.textContent.trim()}`);
        });
    });
}

// Call once DOM is ready
document.addEventListener('DOMContentLoaded', setupDropdownToggles);
