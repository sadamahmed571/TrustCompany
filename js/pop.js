document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('popup-container');
    const closeBtn = document.querySelector('.close-btn');
    let hasShown = false;

    // Check initial scroll position on page load
    const initialScrollPosition = window.scrollY || document.documentElement.scrollTop;
    const initialPageHeight = document.documentElement.scrollHeight - window.innerHeight;
    const initialScrollPercentage = (initialScrollPosition / initialPageHeight) * 100;

    if (initialScrollPercentage >= 50) {
        hasShown = true;
    }

    window.addEventListener('scroll', () => {
        // Calculate the scroll position
        const scrollPosition = window.scrollY || document.documentElement.scrollTop;
        const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercentage = (scrollPosition / pageHeight) * 100;

        // Check if the user has scrolled to 50%
        if (scrollPercentage >= 50 && !hasShown) {
            popup.style.display = 'flex';
            hasShown = true;
        }
    });

    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    // Close the pop-up if the user clicks outside of it
    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.style.display = 'none';
        }
    });
});