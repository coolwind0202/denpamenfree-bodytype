let body_type = document.getElementById("body-type");
body_type.addEventListener("change", (e) => {
    let body_line = document.getElementById("body-line");
    if (body_type.value === "no-image") {
        body_line.src = "";
    } else {
        let [x,y] = body_type.value.split(" ").map(x => Number(x));
        body_line.src = `body-line.png`;
        body_line.style.width = x;
        body_line.style.height = y;
        body_line.style.left = 200 - x / 2;
    }
});

let btn = document.getElementById("url-enter");
btn.addEventListener("click", (e) => {
    let image_url = document.getElementById("url-input").value;
    let screen = document.getElementById("screen");
    console.log(screen.style.backgroundImage);
    screen.style.backgroundImage = `url(${image_url})`;
})
