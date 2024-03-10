function fadeOut(element) {
    element.style.opacity = '0';
    element.style.transition = 'opacity 0.5s';
    setTimeout(function() {
        element.style.display = 'none';
    }, 500);
}

function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.log("Error");
    }
}

function scrollToTop() {
    var button = document.getElementById('scrollToTopBtn');
    fadeOut(button);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('scroll', function() {
    var button = document.getElementById('scrollToTopBtn');
    if (window.pageYOffset > 0) {
        button.style.display = 'block';
        button.style.opacity = '1';
    } else {
        fadeOut(button);
    }
});