function toggleMenu() {
    const options = document.querySelector('.fab-options');
    if (options.style.display === 'none' || options.style.display === '') {
        options.style.display = 'flex';
    } else {
        options.style.display = 'none';
    }
}


