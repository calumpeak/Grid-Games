var grid = grid || {};

// TODO Pass args
grid.gridInstance = function gridInstance (window, document, utils, dom, events) {

    /**
     * Store the last randomly selected cell
     * Prevent hitting it twice in a row
     *
     * @constant
     */
    var LAST_RNDM_CELL;

    /**
     * Grid constructor
     *
     * @constructor
     * @param {Options}
     */
    function Grid (options) {
        this.rows   = options.rows;
        this.cols   = options.cols;
        this.color  = options.color;
        this.border = options.border;

        return this.build();
    }

    /**
     * Build the grid
     *
     * @method build
     * @returns {Node}
     */
    Grid.prototype.build = function build () {
        this.grid = dom.create("table");

        for (var i = 0; i < this.rows; i++) {
            var tr = dom.build(this.grid, dom.create("tr"));

            for (var j = 0; j < this.cols; j++) {
                var td = dom.build(tr, dom.create("td"));
            }
        }

        this.grid.id = "grid";
        // TODO Bind events
        return this.grid;
    };

    /**
     * Grow the grid in size/add cells
     *
     * @method grow
     */
    Grid.prototype.grow = function grow (rows, cols) {
        this.rows = this.rows + rows;
        this.cols = this.cols + rows;

        // Rebuild with new size
        this.refresh();
    };

    /**
     * Shrink the grid in size/remove cells
     *
     * @method grow
     */
    Grid.prototype.shrink = function shrink (rows, cols) {
        this.rows = this.rows - rows;
        this.cols = this.cols - rows;

        // Rebuild with new size
        this.refresh();
    };

    /**
     * Get a random cell on the grid
     *
     * @method getRandomCell
     * @returns {Node}
     */
    Grid.prototype.getRandomCell = function getRandomCell () {
        var gridCell; // TODO Pass 'this' when this is built
        var randomCell;

        function getRandom () {
            var random = gridCell[Math.floor(Math.random() * gridCell.length)];

            if (random === LAST_RNDM_CELL) {
                getRandom();
            }

            LAST_RNDM_CELL = random;

            return random;
        }

        randomCell = getRandom();

        return randomCell;
    };

    /**
     * Refresh the grid instance (remove it from dom and rebuild)
     *
     * @method refresh
     */
    Grid.prototype.refresh = function refresh () {
        this.destroy();
        this.build();
    };

    Grid.prototype.destroy = function destroy () {
        // TODO: Remove events
        dom.destroy(this.grid);
    };

    function createGrid (options) {
        return new Grid(options);
    }

    return {
        createGrid: createGrid
    };
};
