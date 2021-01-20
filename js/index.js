let id = document.getElementById("responsivetoggle")

function toggleDisplay() { //as we press the button the class is applied and if press it again that class is not applied
    id.classList.toggle("active");
}

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 800) {
        document.querySelector('.up').style.display = 'flex';
    } else {
        document.querySelector('.up').style.display = 'none';

    }
});

function toTop() {
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}