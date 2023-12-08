class dashCircle {
    constructor(container, id, x, y) {
        this.id = `circle${id}`;

        var img = document.createElement("img");
        img.src = "images/dashCircle.png";
        img.id = this.id;
        img.classList.add("decor");
        img.classList.add("circle");
        img.style.width = "20%";
        this.x = x;
        this.y = y;
        img.style.left = this.x;
        img.style.top = this.y;

        var div = document.querySelector(container);
        div.appendChild(img);
    }

}

var circle1 = new dashCircle(".mainPage", 1, "90%", "5%");
var circle2 = new dashCircle(".mainPage", 2, "-10%", "50%");
var circle3 = new dashCircle(".experience", 3, "90%", "-5%");
var circle4 = new dashCircle(".experience", 4, "2%", "50%");
var circle5 = new dashCircle(".devProjects", 5, "-10%", "-50%");