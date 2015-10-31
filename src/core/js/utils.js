var core = core || {};

/**
 * ALL the utilities
 *
 * @module core
 * @submodule Utils
 */
core.Utils = function Utils (window, document) {

    /**
     * Gets a random property from an Object
     *
     * @function randomProperty
     * @param {Object} obj
     * @returns {Object}
     */
    function randomProperty (obj) {
        var keys = Object.keys(obj);

        return obj[keys[ keys.length * Math.random() << 0]];
    }

    return {
        randomProperty: randomProperty
    };
};
