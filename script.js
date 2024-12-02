
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

// Add event listener to show the navigation menu when 'bar' is clicked
if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}

// Add event listener to hide the navigation menu when 'close' is clicked
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}
