export const form = document.querySelector('form'); // Select the form element
export const inputElements = document.querySelectorAll('.input__element'); // NodeList of input fields
export const textarea = document.querySelector('.textarea'); // Select the textarea element

form.addEventListener('submit', (event) => {
    // Allow the form to submit
    setTimeout(() => {
        // Clear all input fields
        inputElements.forEach(input => {
            input.value = ''; // Clear the value of each input field
        });

        // Clear the textarea
        if (textarea) {
            textarea.value = ''; // Clear the value of the textarea
        }
    }, 0); // Use a delay to ensure the form submission completes
});

