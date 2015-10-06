var grid = grid || {};

grid.timer = function timer () {

    /**
     * Sets up an instance of the timer
     *
     * @constructor
     * @function Timer
     * @param {Object} options options to be passed to the timer
     */
    function Timer (options) {
        this.seconds = options.seconds;
        this.default = options.seconds;
    }

    Timer.prototype.reset = function reset () {
        // Reset the timer using defaults
    };

    Timer.prototype.shorten = function shorten (time) {
        // Shorten the timer by time
    };

    Timer.prototype.lengthen = function lengthen (time) {
        // lengthen the timer by time
    };

    Timer.prototype.freeze = function freeze (time) {
        // Freeze the timer for time
    };

    function createTimer (options) {
        return new Timer(options);
    }

    return {
        createTimer: createTimer
    };
};
