var logic = logic || {};

/**
 * Grid ALL the things
 *
 * @module Grid
 * @submodule gridInstance
 */
logic.grid = function gridInstance (window, document, utils, dom, events) {

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
        this.elem = options.elem;

        // Allow object to fire custom events
        events.watch(this);
    }

    /**
     * Build the grid and append it to holder element
     *
     * @method build
     * @returns {Node}
     */
    Grid.prototype.build = function build () {
        var self = this;

        this.grid = dom.create("table");

        for (var i = 0; i < this.rows; i++) {
            var tr = dom.build(this.grid, dom.create("tr"));

            for (var j = 0; j < this.cols; j++) {
                var td = dom.build(tr, dom.create("td"));
            }
        }

        this.grid.id = "grid";

        function fireClick (event) {
            self.fire("gridClick", event);
        }

        events.bind(this.grid, "click", fireClick);

        this.elem.appendChild(this.grid);
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
     * @returns {Node} td Cell on the grid
     */
    Grid.prototype.getRandomCell = function getRandomCell () {
        var gridCell = this.grid.getElementsByTagName("td");

        function getRandom () {
            var random = gridCell[Math.floor(Math.random() * gridCell.length)];

            if (random === LAST_RNDM_CELL) {
                getRandom();
            }

            LAST_RNDM_CELL = random;

            return random;
        }

        return getRandom();
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
        dom.destroy(this.grid);
    };

    function createGrid (options) {
        return new Grid(options);
    }

    return {
        createGrid: createGrid
    };
};
