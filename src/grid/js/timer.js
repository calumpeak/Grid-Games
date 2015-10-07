var grid = grid || {};

/**
 * Timer ALL the things
 *
 * @module gridEl
 * @submodule timer
 */
grid.timer = function timer (window) {

    /**
     * How often the interval is restarted
     *
     * @constant
     */
    var INTERVAL_TIME = 100;

    /**
     * Represents when the timer finishes
     * Also falsy
     *
     * @constant
     */
    var TIMER_END = 0;

    /**
     * Decimal place e.g. 0.00
     *
     * @constant
     */
    var DECIMAL = 2;

    /**
     * Sets up an instance of the timer
     *
     * @constructor
     * @function Timer
     * @param {Object} options options to be passed to the timer
     */
    function Timer (options) {
        var self = this;

        this.timeStore = {
            start: options.seconds,
            adjusted: TIMER_END
        };
        this.seconds = options.seconds;
        this.defaultTime = options.seconds;
        this.element = options.element;
        this.stopWatch;

        this.ticker = function ticker () {
            if (self.seconds === TIMER_END) {
                self.stop();
            } else {
                --self.seconds;
                self.element.innerHTML = self.seconds.toFixed(DECIMAL);
            }
        };

        //TODO allow timer to emit events
    }

    /**
     * Starts the timer
     *
     * @for Timer
     * @method start
     */
    Timer.prototype.start = function start () {
        this.stopWatch = window.setInterval(this.ticker, INTERVAL_TIME);
    };

    /**
     * Stops the timer
     *
     * @for Timer
     * @method stop
     */
    Timer.prototype.stop = function stop () {
        window.clearInterval(this.stopWatch);
    };

    /**
     * Reset timer to either adjusted time or starting time
     * TODO Complete Resets
     *
     * @for Timer
     * @method reset
     */
    Timer.prototype.reset = function reset () {
        this.stop();
        this.seconds = this.timeStore.adjusted || this.timeStore.start;
        this.start();
    };

    /**
     * Shorten the timer
     * TODO allow multiple uses
     *
     * @for Timer
     * @method shorten
     * @param {Number} time how much to shorten timer by
     */
    Timer.prototype.shorten = function shorten (time) {
        this.timeStore.adjusted = this.timeStore.defualtTime - time;
    };

    /**
     * Lengthen the timer
     * TODO allow multiple uses
     *
     * @for Timer
     * @method lengthen
     * @param {Number} time how much to lengthen timer by
     */
    Timer.prototype.lengthen = function lengthen (time) {
        this.timeStore.adjusted = this.timeStore.defualtTime + time;
    };

    /**
     * Freeze the timer for a period of time
     *
     * @for Timer
     * @method freeze
     * @param {Number} time time (ms) that we want to pause the timer for
     */
    Timer.prototype.freeze = function freeze (time) {
        var self = this;
        this.stop();

        function delay () {
            self.start();
        }
        window.setTimeout(delay, time);
    };

    function createTimer (options) {
        return new Timer(options);
    }

    return {
        createTimer: createTimer
    };
};
