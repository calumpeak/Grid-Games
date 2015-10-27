var logic = logic || {};

/**
 * score logic
 *
 * @module Logic
 * @submodule Score
 */
logic.score = function score (window, document, events) {

    /**
     * Default score to set if none defined
     *
     * @constant
     */
    var DEFAULT_SCORE = 0;

    /**
     * Sets up an instance of the score
     *
     * @constructor
     * @function score
     * @param {Object} options options to be passed
     */
    function Score (options) {
        // Allow object to fire custom events
        events.watch(this);

        this.elem = options.elem;
        this.score = options.score || DEFAULT_SCORE;
        this.elem.innerHTML = this.score;
    }

    /**
     * Increase the score by default or specific value
     *
     * @for Score
     * @method increase
     * @param {Integer} val number to increase score by
     */
    Score.prototype.increase = function increase (val) {
        this.score = val ? this.score + val : this.score++;
        this.elem.innerHTML = this.score;
        this.fire("scoreChange", { score: this.score });
    };

    /**
     * Decrease the score by default or specific value
     *
     * @for Score
     * @method decrease
     * @param {Integer} val number to decrease score by
     */
    Score.prototype.decrease = function decrease (val) {
        this.score = val ? this.score - val : this.score--;
        this.elem.innerHTML = this.score;
        this.fire("scoreChange", { score: this.score });
    };

    /**
     * Get the current score
     *
     * @for Score
     * @method getScore
     * @returns {Integer}
     */
    Score.prototype.getScore = function getScore () {
        return this.score;
    };

    /**
     * Create a new score instance
     *
     * @function createScore
     * @param {Object} options
     * @return {Object} instance of score Object
     */
    function createScore (options) {
        return new Score(options);
    }

    return {
        createScore: createScore
    };
};
