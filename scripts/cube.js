var scene = document.getElementById("scene1");

function wheelAction(event) {
    let oldPerspective = parseInt(getComputedStyle(scene).perspective);
    let xForPer = (oldPerspective - 150) ** (1 / 1.9);
    let newPerspective = (((xForPer + event.deltaY) ** 1.9) + 150);
    if (newPerspective > 1200) {
        newPerspective = 1200;
    }

    scene.style.perspective = newPerspective;
}
document.addEventListener("wheel", wheelAction);