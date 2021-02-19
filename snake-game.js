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
    const snakeBoard = $("#gameCanvas");
    const snakeBoard_ctx = gameCanvas.getContext("2d"); // ctx is just short for context

    // Creating a function to clear the canvas:
    // const clearCanvas = () => {
    //     snakeBoard_ctx.fillStyle = '#D9D2D0';
    //     snakeBoard_ctx.strokeStyle = '5px solid #F2921D';
    //     snakeBoard_ctx.fillRect(0, 0, snakeBoard.width, snakeBoard.height);
    //     snakeBoard_ctx.strokeRect(0, 0, snakeBoard.width, snakeBoard.height);
    // };   //**** NOT SURE IF I NEED THIS OR NOT ****


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
    const moveSnake = () => {
        const head = {x: snake[0].x + dx, y: snake[0].y + dy};
        snake.unshift(head);
        snake.pop();
    };

    // *** Vertical Movement ***
    // Only the y-coordinate of the head needs to be altered to avoid moving the entire snake on the y-axis
    // To implement this we must update the moveSnake function and increase the y-coordinate of the head by dy.

    // *** Automatic Movement ***
    // To move the snake automatically

    // -------------------------- main function called repeatedly to keep the game running -------------------------------------------------------
    const main = () => {
     // clearCanvas(); //*** NOT SURE IF I NEED THIS ***
        drawSnake();
    };

    // Start game:
    main();




})();