
    drawBoard();
    var state = makeStateArr();

function drawBoard() {
    for (var i = 0; i < 60; i++) {
        for (var j = 0; j < 60; j++) {
            $("#board").append(`<div class="cell" loc="${js}-${i}"></div>`);
        }
    }
}

function makeStateArr() {
    let arr = [];
    for (var i = 0; i < 60; i++) {
        let arrInner = []
        for (var j = 0; j < 60; j++) {
            arrInner.push(0)
        }
        arr.push(arrInner)
    }
    return arr;
}


    function play(oldGrid) {
        var newGrid = makeStateArr();
        for (var x = 0; x < 60; x++) {
            for (var y = 0; y < 60; y++) {
                newGrid[x][y] = current = checkNeighbors(x, y, oldGrid);
                if( current === 1){
                    $(`.cell[loc=${x}-${y}]`).addClass("live")
                }
            }
        }
        return newGrid
    }

    function checkNeighbors(i, j, grid) {
        var yMax = xMax = 59;
        var neighborCount = 0;
        var isLive = grid[i][j];

        //Left
        if (i - 1 >= 0) {
            neighborCount += grid[j][(i - 1)];
        }

        //Right
        if (i + 1 <= xMax) {
            neighborCount += grid[j][i + 1];
        }

        //Up
        if (j - 1 >= 0) {
            neighborCount += grid[j - 1][i];
        }

        //Down
        if (j + 1 <= yMax) {
            // neighborCount += grid[j + 1][i];
        }

        //Left
        if ((i - 1 >= 0) && (j - 1 >= 0)) {
            neighborCount += grid[j - 1][i - 1];

        }

        //Right
        if ((i + 1 <= xMax) && (j - 1 >= 0)) {
            neighborCount += grid[j - 1][i + 1];
        }

        //LL
        if ((i - 1 >= 0) && (j + 1 <= yMax)) {
            neighborCount += grid[j + 1][i - 1];
        }

        //LR
        if ((i + 1 <= xMax) && (j + 1 <= yMax)) {
            //   neighborCount += grid[j + 1][i + 1]
        }

        if (neighborCount < 2 && isLive == 1) {
            return 0;
        }

        else if (neighborCount == 2 && isLive == 1) {
            return 1;
        }

        else if (neighborCount == 3 && isLive == 1) {
            return 1;
        }

        else if (neighborCount > 3 && isLive == 1) {
            return 0;
        }

        if ((neighborCount === 3) && (isLive === 0)) {
            return 1;
        }

        else {
            return 0;
        }

    }





$(function () {
    state[1][1] = state[1][2] = state[1][3] = 1
    var plays = 0;


    console.log("Play: ", ++plays)

    for (var i = 0; i < 60; i++) {
        for (var j = 0; j < 60; j++) {
            if (state[i][j] === 1) {
                $(`.cell[loc=${j}-${i}]`).addClass("live")
            }
        }
    }

     






});