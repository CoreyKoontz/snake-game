(function () {
    "use strict"

    // jQuery link test
    // window.onload = function() {
    //     if (window.jQuery) {
    //         alert("jQuery is loaded");
    //     } else {
    //         alert("jQuery is not loaded");
    //     }
    // }

    // Making the game canvas:
    const snakeBoard = $("#gameCanvas");
    const snakeBoard_ctx = gameCanvas.getContext("2d")

    // Making the snake:
    let snake = [{x: 200, y: 200}, {x: 190, y: 200}, {x: 180, y: 200}, {x: 170, y: 200}, {x: 160, y: 200}]

    let drawSnakePart = (snakePart) => {
        // Property of the Canvas 2D API specifies the color, gradient, or pattern to use inside shapes.
        snakeBoard_ctx.fillStyle = 'lightblue';
        // Property of the Canvas 2D API specifies the color, gradient, or pattern to use for the strokes (outlines) around shapes.
        snakeBoard_ctx.strokeStyle = 'darkblue';
        // Method of the Canvas 2D API draws a rectangle that is filled according to the current fillStyle.
        snakeBoard_ctx.fillRect(snakePart.x, snakePart.y, 10, 10)
        // method of the Canvas 2D API draws a rectangle that is stroked (outlined) according to the current strokeStyle and other context settings.
        snakeBoard_ctx.strokeRect(snakePart.x, snakePart.y, 10, 10)
    }

    //Displays the snake parts
    let drawSnake = () => {snake.forEach(drawSnakePart)}

})();