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

    /**
     * Sets a timeout and fires a callback after time
     *
     * @function timeout
     * @param {Function} callback
     * @returns {Function} setTimeout
     */
    function timeout (callback, time) {
        return window.setTimeout(callback, time);
    }

    /**
     * Fires a callback when the last index of an array is processed
     *
     * @function atlastIndex
     * @param {Array} Array
     * @param {Integer} index
     * @param {Callback}
     */
    function onLastIndex (array, index, callback) {
        if (array.length === ++index) {
            callback();
        }
    }

    function isArray(obj) {
        return Array.isArray(obj);
    }

    return {
        randomProperty: randomProperty,
        timeout: timeout,
        onLastIndex: onLastIndex,
        isArray: isArray
    };
};
