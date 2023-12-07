class rectangle {
    constructor(container, id, x, y) {
        this.id = `rectangle${id}`;
        this.x = x;
        this.y = y;

        var img = document.createElement("img");
        img.src = "images/rectangle.png";
        img.id = this.id;
        img.classList.add("decor");
        img.classList.add("rectangle");

        img.style.width = "4%";
        img.style.left = this.x;
        img.style.top = this.y;

        var div = document.querySelector(container);
        div.appendChild(img);
    }
}

var rectangle1 = new rectangle(".mainPage", 1, "96%", "92%");
var rectangle2 = new rectangle(".aboutMe", 2, "0", "92%");
var rectangle3 = new rectangle(".experience", 3, "96%", "88%");