function scrollToSection(sectionId) {

    var section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.log("Error")
    }

}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}