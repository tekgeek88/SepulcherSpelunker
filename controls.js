let cursor = {
  rightPressed: false,
  leftPressed: false,
  downPressed: false,
  upPressed: false
};

function keyDownHandler(e) {
  e.preventDefault();
  switch(e.code) {
    // Right Pressed
    case "ArrowRight":
    case "Right":
    case "KeyD": cursor.rightPressed = true; break;
    // Left Pressed
    case "ArrowLeft":
    case "Left":
    case "KeyA": cursor.leftPressed = true; break;
    // Up Pressed
    case "ArrowUp":
    case "Up":
    case "KeyW": cursor.upPressed = true; break;
    // Down Pressed
    case "ArrowDown":
    case "Down":
    case "KeyS": cursor.downPressed = true; break;
    default: return;
  }
}

function keyUpHandler(e) {
  e.preventDefault();
  switch(e.code) {
    // Right Pressed
    case "ArrowRight":
    case "Right":
    case "KeyD": cursor.rightPressed = false; break;
    // Left Pressed
    case "ArrowLeft":
    case "Left":
    case "KeyA": cursor.leftPressed = false; break;
    // Up Pressed
    case "ArrowUp":
    case "Up":
    case "KeyW": cursor.upPressed = false; break;
    // Down Pressed
    case "ArrowDown":
    case "Down":
    case "KeyS": cursor.downPressed = false; break;
    default: return;
  }
}

function clickHandler(e) {
    console.log('Implement me!')
}

