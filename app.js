document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('click-button');
    const counter = document.getElementById('counter');
    let count = 0;

    button.addEventListener('click', () => {
        count++;
        counter.textContent = count;
    });
});