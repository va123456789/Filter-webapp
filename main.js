function preload() {
}

function setup() {
canvas = createCanvas(640, 480);
canvas.position(280, 250);
video = createCapture(VIDEO);
video.hide();

tint_color = "";
}

function draw() {
    image(video, 0, 0, 640, 480);
    tint(tint_color);
}

function take_snapshot() {
    save('edited_picture.png');
}

function filter_tint() {
    tint_color = document.getElementById("color_name").value;
}