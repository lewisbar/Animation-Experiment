// var step = 0;

/*
function changePerspective() {
    var style = scene.style;
    var per = parseInt(getComputedStyle(scene).perspective);

    if (per > 600) {
        style.perspective = 600;
        style.perspectiveOrigin = "center";
    }
    else if (per <= 250) {
        style.perspective = 700;
        style.perspectiveOrigin = "170% -130%";
    }
    else {
        style.perspective = 250;
        style.perspectiveOrigin = "center";
    }
    
    //
    switch (step) {
    case 0:
        style.perspective = 250;
        break;
    case 1:
        style.perspective = 700;
        style.perspectiveOrigin = "170% -130%";
        break;
    default:
        style.perspective = 600;
        style.perspectiveOrigin = "center";
        step = -1;
    }
    step += 1;
    //
}
*/

var scene = document.getElementById("scene1");
// scene.addEventListener("click", changePerspective);

function wheelAction(event) {
    let oldPerspective = parseInt(getComputedStyle(scene).perspective);
    // let shallowDelta = 3 * Math.atan(event.deltaY);
    let xForPer = (oldPerspective - 150) ** (1 / 1.9);
    let newPerspective = (((xForPer + event.deltaY) ** 1.9) + 150);
    if (newPerspective > 1200) {
        newPerspective = 1200;
    }

    scene.style.perspective = newPerspective;
}
scene.addEventListener("wheel", wheelAction);