var scene = document.getElementById("scene1");

function wheelAction(event) {
    let oldPerspective = parseInt(getComputedStyle(scene).perspective);
    // If we view x as the scroll level and y as the perspective,
    // we need to first get the x for the current perspective to 
    // add it to the value of the new scroll action in the equasion
    let xForPer = (oldPerspective - 150) ** (1 / 1.9);
    let newPerspective = (((xForPer + event.deltaY) ** 1.9) + 150);
    if (newPerspective > 1200) {
        newPerspective = 1200;
    }

    scene.style.perspective = newPerspective;
}
document.addEventListener("wheel", wheelAction);