document.addEventListener("DOMContentLoaded", function () {
    const spinnerWrapperEl = document.querySelector(".spinner-wrapper");
    if (spinnerWrapperEl) {
        setTimeout(() => {
            spinnerWrapperEl.style.opacity = "0";
            setTimeout(() => {
                spinnerWrapperEl.style.display = "none";
            }, 1000);
        }, 1000);
    }

    // Get a reference to the li element containing the search box
    const searchBoxContainer = document.querySelector('.search-box-container');

    // Check if the element exists
    if (searchBoxContainer) {
        // Function to handle screen width change
        function handleScreenWidthChange() {
            if (window.innerWidth < 1200) {
                searchBoxContainer.classList.add('hidden');
            } else {
                searchBoxContainer.classList.remove('hidden');
            }
        }

        // Initial call to set the initial state based on screen width
        handleScreenWidthChange();

        // Attach the function to the window resize event
        window.addEventListener('resize', handleScreenWidthChange);
    }
});
