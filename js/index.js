let id = document.getElementById("responsivetoggle")
let btnid = document.getElementById('btn');
btnid.innerHTML = '<div class="bar"></div><div class="bar"></div><div class="bar"></div>';

function toggleDisplay() { //as we press the button the class is applied and if press it again that class is not applied
    id.classList.toggle("active");
    if (btnid.innerHTML === '<div class="bar"></div><div class="bar"></div><div class="bar"></div>') {
        btnid.innerHTML = '<i id="closebtn" class="fa fa-close"></i>';
        console.log('1')
    } else {
        btnid.innerHTML = '<div class="bar"></div><div class="bar"></div><div class="bar"></div>';
        console.log('2')
    }

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