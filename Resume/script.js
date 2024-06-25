document.addEventListener('DOMContentLoaded', (event) => {
    const dateElement = document.getElementById('current-date');
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const today = new Date().toLocaleDateString(undefined, options);
    dateElement.textContent = today;
});
