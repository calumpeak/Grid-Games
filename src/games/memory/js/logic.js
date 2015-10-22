var memory = memory || {};

memory.logic = function logic (grid, score, utils, dom, events) {

    function Memory () {
        var self = this;

        // Allow custom event fire
        events.watch(this);

        // TODO necessary elements to be on the page
        // Setup the playingfield
        this.grid = grid.createGrid( {rows: 5, cols: 5, elem: undefined} );
        this.score = grid.createScore( {elem: undefined} );

        // Data input store
        this.AI = [];
        this.player = [];

        // Number of cells to remember
        // Will be increased during play
        this.rememberCount = 2;

        //Manage events
        this.grid.on("gridClick", function (event) {
            self.handleClick(event);
        });

        this.score.on("scoreChange", function (data) {
            self.handleScore(data);
        });
    }

    /**
     * The selection of elements that the player has to remember and match
     * The AI will choose X amount of random cells on the grid and store them
     * X being `rememberCount`
     * Avoid selecting same cell that's been stored earlier
     *
     * TODO: throw error if more cells than remember count
     *
     * @for Memory
     * @method AISelection
     */
    Memory.prototype.AIselection = function AIselection () {

        function onlyUniques () {
            var random = this.grid.getRandomCell();

            if (this.AI.indexOf(random) === -1) {
                this.AI.push(random);
            } else {
                onlyUniques();
            }
        }

        for (var i = 0; i < this.rememberCount; i++) {
            onlyUniques();
        }
    };

    /**
     * Store the players selection
     *
     * @for Memory
     * @method playerSelection
     * @param {Node} cell
     */
    Memory.prototype.playerSelection = function playerSelection (cell) {
        this.player.push(cell);
    };

    /**
     * Compare AI vs Player results
     *
     * @for Memory
     * @method compare
     * @returns {Boolean}
     */
    Memory.prototype.compare = function compare () {
        return !!utils.compareArrays(this.AI, this.player);
    };

    /**
     * Whilst in game, we need to reset these values
     * Clears all AI and player choices
     * Clears the grid of current choices
     *
     * @for Memory
     * @method refresh
     */
    Memory.prototype.refresh = function refresh () {
        this.AI = [];
        this.player = [];
        this.grid.refresh();
    };

    Memory.prototype.handleClick = function handleClick (event) {
        this.clicks++;

        this.playerSelection(event.target);

        // Return if not enough player inputs
        if (this.player.length < this.rememberCount) {
            return;
        }

        // Compare the results
        this.compare() ? this.score.increase() : this.endGame();
    };

    /**
     * Increase difficulty every 5 points
     * Grow the grid by 2 rows/cols
     * Increase rememberCount
     */
    Memory.prototype.handleScore = function handleScore (data) {
        // Placeholder
    };

    Memory.prototype.endGame = function endGame () {
        // Placeholder
    };

    // TODO: Update placeholder
    function run () {
        //run the game
    }

    return {
        run: run
    };
};
