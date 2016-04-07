var mousedown_flag = false;
var toggler = true;


var SETTINGS = { 
    width: 450,
    height: 450,
    MAX_ROW: 20,    
    MAX_COL: 20
}

var painted_cells = []

var matrix = [];
for(var i=0; i<SETTINGS.MAX_ROW; i++) {
    matrix[i] = [];
    for(var j=0; j<SETTINGS.MAX_COL; j++) {
        matrix[i][j] = 0;
    }
}
console.log(matrix)

PAINTER = DrawerManager.get_drawer(SETTINGS);


var $canvas = $(PAINTER.get_prepared_canvas());
$('body').append($canvas);

// PAINTER.draw_grid();


// PAINTER.draw_grid();

// snake_game.start();

$canvas.click(function(e) {
    toggler = !toggler;
})

$canvas.mousedown(function (e) {
    mousedown_flag = true;
})

$canvas.mouseup(function(e) {
    mousedown_flag = false;
})

$canvas.mousemove(function (e) {
    console.log("MOVE");
    var cell = PAINTER.get_cursor_position(e);
    var options = { row: cell.row, column: cell.column};
    var cell;
    var mPtr;
    if (mousedown_flag == true) {
        options.color = 'green'
        cell = PAINTER.paint_cell(this, options)
        mRow = matrix[cell.row];

        console.log(mPtr);
        if (mRow[cell.column] == 0) {
            mRow[cell.column] = 1
            painted_cells.push(cell);
        }
        else 
        {

        }
    }
})


