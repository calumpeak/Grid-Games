var core = core || {};

/**
 * Event handlers
 *
 * @module core
 * @submodule events
 */
core.Events = function Events (window, document, utils, dom) {

    /**
     * Binds an event listener to an element with a callback
     *
     * @method bind
     * @param {Node} el Dom Node
     * @param {String} event event typeOfEnd
     * @param {Function} callback
     */
    function bind (el, event, callback) {
        el.addEventListener(event, callback);
    }

    /**
     * Unbinds an event listener to an element with a callback
     *
     * @method unbind
     * @param {Node} el Dom Node
     * @param {String} event event typeOfEnd
     * @param {Function} callback
     */
    function unbind (el, event, callback) {
        el.removeEventListener(event, callback);
    }

    //UnbindAll
    //Observable objects ?
        //fire
        //on

    return {
        bind: bind,
        unbind: unbind
    };
};
