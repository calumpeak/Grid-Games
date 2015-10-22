var core = core || {};

/**
 * ALL the utilities
 *
 * @module core
 * @submodule Utils
 */
core.Utils = function Utils (window, document) {
    /**
     * Checks to see if one array is equal to another
     * Note: won't work for nested arrays or objects
     * @method compareArrays
     * @param {Array} array1
     * @param {Array} array2
     * @returns {Boolean}
     */
    function compareArrays (array1, array2) {
        if (!array1 || !array2) {
            return false;
        }

        if (array1.length !== array2.length) {
            return false;
        }

        for (var i = 0, l = array1.length; i < l; i++) {
            if (array1[i] instanceof Array && array2[i] instanceof Array) {
                if (array1[i] !== array2[i]) {
                    return false;
                }
            }
        }
        return true;
    }

    return {
        compareArrays: compareArrays
    };
};
