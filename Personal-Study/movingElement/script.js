let verticalPosition = 100;
let horizontalPosition = 100;
const step = 10;
const elementSize = 50;
const element = document.getElementById("element");
const wall = document.querySelector(".wall");
const ground = document.getElementById("ground");

function updatePosition() {
  // Set boundaries
  verticalPosition = Math.max(
    0,
    Math.min(window.innerHeight - 100, verticalPosition),
  );
  horizontalPosition = Math.max(
    0,
    Math.min(window.innerWidth - 100, horizontalPosition),
  );

  //position update
  element.style.top = verticalPosition + "px";
  element.style.left = horizontalPosition + "px";
}

// Check collusion function
const wallRect = wall.getBoundingClientRect();
const groundRect = ground.getBoundingClientRect();
const wallX = wallRect.left - groundRect.left;
const wallY = wallRect.top - groundRect.top;
const wallHeight = wallRect.height;
const wallWidth = wallRect.width;

function isColluding(POSX, POSY) {
  if (
    POSX < wallX + wallWidth &&
    POSX + elementSize > wallX &&
    POSY < wallY + wallHeight &&
    POSY + elementSize > wallY
  ) {
    return true;
  }
  return false;
}

updatePosition();

document.addEventListener("keydown", function (event) {
  // Faster with Shift Key
  const faster = event.shiftKey;
  const move = faster ? step * 4 : step;

  //   Disable all other navigation keys functionalities
  if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.key)) {
    event.preventDefault();
  }

  //   Switch movement
  switch (event.key) {
    case "ArrowUp":
    case "w":
    case "W":
      verticalPosition -= move;
      break;
    case "ArrowDown":
    case "s":
    case "S":
      verticalPosition += move;
      break;
    case "ArrowRight":
    case "d":
    case "D":
      horizontalPosition += move;
      break;
    case "ArrowLeft":
    case "a":
    case "A":
      horizontalPosition -= move;
      break;
  }

  //   Update position
  if (!isColluding(horizontalPosition, verticalPosition)) {
    updatePosition();
  }
});
