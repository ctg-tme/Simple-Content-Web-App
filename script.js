// window.addEventListener('DOMContentLoaded', () => {
//     const urlParams = new URLSearchParams(window.location.search);

//     urlParams.forEach((value, key) => {
//         const targetElement = document.getElementById(key);
//         if (!targetElement) return;

//         if (key === 'pid-footer') {
//             const val = value.trim().toLowerCase();
//             if (val === 'false') {
//                 targetElement.style.display = 'none';
//             }
//         } else {
//             // targetElement.innerHTML = decodeURIComponent(value);
//             targetElement.innerHTML = value;
//         }
//     });
// });


window.addEventListener('DOMContentLoaded', () => {
    // Function to update elements based on parameters
    function updateElements(params) {
        params.forEach((value, key) => {
            const targetElement = document.getElementById(key);
            if (!targetElement) return;

            if (key === 'pid-footer') {
                const val = value.trim().toLowerCase();
                if (val === 'false') {
                    targetElement.style.display = 'none';
                } else {
                    targetElement.style.display = ''; // Reset display if not false
                }
            } else {
                targetElement.innerHTML = value;
            }
        });
    }

    // Parse and update from query parameters
    const urlParams = new URLSearchParams(window.location.search);
    updateElements(urlParams);

    // Parse and update from hash parameters
    const hashParams = new URLSearchParams(window.location.hash.substring(1));
    updateElements(hashParams);

    // Listen to hash changes and update elements accordingly
    window.addEventListener('hashchange', () => {
        const newHashParams = new URLSearchParams(window.location.hash.substring(1));
        updateElements(newHashParams);
    });
});
