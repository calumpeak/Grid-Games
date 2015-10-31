var logic = logic || {};

/**
 * Decorate ALL the things
 *
 * @module Logic
 * @submodule decoration
 */
logic.decoration = function decoration (window, document, utils, dom) {

    /**
     * Decoration constructor
     *
     *
     * @constructor
     */
    function Decoration () {
        this.colours = library.MaterialColour();
    }

    /**
     * Gets random colours from nested colour Object
     * See library.MaterialColour for example of colour Object
     *
     * @for Decoration
     * @method getColours
     * @param {Integer} number of colours to acquire
     * @returns {Array} array of colours
     */
    Decoration.prototype.getRandomColours = function getRandomColours (number) {
        var arr = [];

        for (var i = 0; i < number; i++) {
            arr.push(utils.randomProperty(utils.randomProperty(this.colours)));
        }

        return arr;
    };

    /**
     * Get a known specific colour from the library
     *
     * @for Decoration
     * @method getColour
     * @param {String} colour
     * @param {String} key
     * @returns {String} colour hexcode
     */
    Decoration.prototype.getColour = function getColour (colour, key) {
        return this.colours[colour][key];
    };

    function createDecor () {
        return new Decoration();
    }

    return {
        createDecor: createDecor
    };
};
