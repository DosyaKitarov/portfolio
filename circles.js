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

var circle1 = new dashCircle(".mainPage", 1, "90vw", "5vw");
var circle2 = new dashCircle(".mainPage", 2, "-10vw", "30vw");