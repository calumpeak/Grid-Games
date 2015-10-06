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

    Timer.prototype.reset = function () {
        // Reset the timer using defaults
    };

    Timer.prototype.shorten = function (time) {
        // Shorten the timer by time
    };

    Timer.prototype.lengthen = function (time) {
        // lengthen the timer by time
    };

    Timer.prototype.freeze = function (time) {
        // Freeze the timer for time
    };

    function createTimer (options) {
        return new Timer(options);
    }

    return {
        createTimer: createTimer
    };
};
