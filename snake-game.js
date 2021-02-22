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


    // ------------------------------------------ Making the game canvas ----------------------------------------------------------------
    const snakeBoard = $('#gameCanvas')[0];
    const snakeBoard_ctx = snakeBoard.getContext("2d"); // ctx is just short for context

    // Creating a function to clear the canvas:
    const clearCanvas = () => {
        snakeBoard_ctx.fillStyle = '#D9D2D0';
        snakeBoard_ctx.strokeStyle = '5px solid #F2921D';
        snakeBoard_ctx.fillRect(0, 0, snakeBoard.width, snakeBoard.height);
        snakeBoard_ctx.strokeRect(0, 0, snakeBoard.width, snakeBoard.height);
    };   // This also has an effect on the tail end of the snake disappearing as the snake moves forward


    // --------------------------------------------- Making the snake ---------------------------------------------------------------
    let snake = [
        {x: 200, y: 200},
        {x: 190, y: 200},
        {x: 180, y: 200},
        {x: 170, y: 200},
        {x: 160, y: 200}
        ];

    let drawSnakePart = (snakePart) => {
        // Property of the Canvas 2D API specifies the color, gradient, or pattern to use inside shapes.
        snakeBoard_ctx.fillStyle = 'lightblue';
        // Property of the Canvas 2D API specifies the color, gradient, or pattern to use for the strokes (outlines) around shapes.
        snakeBoard_ctx.strokeStyle = '#0F1A59';
        // Method of the Canvas 2D API draws a rectangle that is filled according to the current fillStyle.
        snakeBoard_ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
        // method of the Canvas 2D API draws a rectangle that is stroked (outlined) according to the current strokeStyle and other context settings.
        snakeBoard_ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
    };

    // Displays the snake parts:
    const drawSnake = () => {snake.forEach(drawSnakePart)};


    // --------------------------------------- Moving the snake automatically ---------------------------------------------------------------

    // *** Horizontal Movement ***
    // dx is the horizontal velocity of the snake. We need to create a function move_snake that will update the snake.
    // The moveSnake function is creating a new head and .unshift() (adding) it to the front of the snake array.
    // While simultaneously using .pop() to remove the last element of the snake
    let dx = 10; //Setting this starts the snake off in motion to the right.

    const moveSnake = () => {
        const head = {x: snake[0].x + dx, y: snake[0].y + dy};
        snake.unshift(head);
        snake.pop();
    };

    // *** Vertical Movement ***
    // Only the y-coordinate of the head needs to be altered to avoid moving the entire snake on the y-axis
    // To implement this we must update the moveSnake function and increase the y-coordinate of the head by dy.
    let dy = 0;
    // *** Automatic Movement ***
    // To move the snake automatically we will need to set up a setTimeout function to call the
    // moveSnake and drawSnake on set time intervals.

function main () {
    setTimeout(function onTick() {
        if (hasGameEnded()) return;
        clearCanvas(); // DONT THINK I NEED THIS
        moveSnake();
        drawSnake();
        drawFood();
        main();
        }, 225);
}

    // --------------------------------------- Changing Direction --------------------------------------------------------

    $("body").on("keydown", function(e) {
    let keyPressed = e.keyCode;
    const goUp = dy === -10;
    const goDown = dy === 10;
    const goRight = dx === 10;
    const goLeft = dx === -10;

        if (keyPressed === 37 && !goRight) { // move left
            dx = -10;
            dy = 0;
        }
        if (keyPressed === 39 && !goLeft) { // move right
            dx = 10;
            dy = 0;
        }
        if (keyPressed === 38 && !goDown) { // move up
            dx = 0;
            dy = -10;
        }
        if (keyPressed === 40 && !goUp) { // move down
            dx = 0;
            dy = 10;
        }

    })

    // ----------------------------------------- Adding Boundaries ----------------------------------------------------

let hasGameEnded = () => {
    for (let i = 4; i < snake.length; i++) {
        if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {  // conditional to see if the snake has collided with itself
            return true;
        }
    }
        const collideRight = snake[0].x < 0;
        const collideLeft = snake[0].x > snakeBoard.width - 10;
        const collideTop = snake[0].y < 0;
        const collideBottom = snake[0].y > snakeBoard.height -10;
        return collideRight || collideLeft || collideTop || collideBottom;
    }

    // ------------------------------------------- Food, Size and Score ------------------------------------------------------

    // Need to generate a random set of coordinates to place the snake food
    // Math is a built in object with mathematical constants and function
    // .round returns the value of a number to the nearest integer
    // .random will generate a random number from 0-1. So you will have to scale it to your desired range.

    // TODO: math on this looks funny see if it can be refactored later
    let randomFood = (min, max) => {
    return Math.round((Math.random() * (max - min) + min) / 10) * 10;
    };

    // random food placement generating function:
    let genFood = () => {
        let foodX = randomFood(0, snakeBoard.width - 10);
        let foodY = randomFood(0, snakeBoard.height - 10);
        snake.forEach(function hasSnakeEatenFood (part) {
            const hasEaten = part.x == foodX && part.y == foodY;// conditional to see if the snake ate the food and generate new food if true
            if (hasEaten) {
                genFood();
            }
        });
    }

    // function for drawing the food on the canvas:
    let drawFood = () => {
        snakeBoard_ctx.fillStyle = 'lightgreen';
        snakeBoard_ctx.strokeStyle = 'darkgreen';
        snakeBoard_ctx.fillRect(foodX, foodY, 10, 10); //TODO: not sure that the FoodX and FoodY variables are in scope
        snakeBoard_ctx.strokeRect(foodX, foodY, 10, 10);
    }

    // ------------------------------------------- Growing the Snake ----------------------------------------------------------





    // Start game:
    main();

})();