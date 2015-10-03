var core = core || {};

/**
 * ALL the dom methods
 *
 * @module core
 * @submodule dom
 */
core.Dom = function Dom (window, document, utils) {

    /**
     * Create an element
     *
     * @public
     * @method create
     * @param {String} tagName
     * @returns {Node} new Element
     */
    function create (tagName) {
        return document.createElement(tagName);
    }

    /**
     * Destroy an element
     *
     * @public
     * @method destroy
     * @param {Node} el
     */
    function destroy (el) {
        el.parentNode.removeChild(el);
    }

    /**
     * Build an element
     *
     * @public
     * @method build
     * @param {Node} el base element
     * @param {Node} arguments subsequent elements to append to el
     */
    function build (el) {
        var element = el;
        var len = arguments.length;
        var i;

        for (i = 1; i < arguments.length; i++) {
            element.appendChild(arguments[i]);
        }

        return element;
    }

    /**
     * Get an elements computed styles
     *
     * @method getStyle
     * @param {Node} el
     * @returns {Object} object like array of elements computed styles
     */
    function getStyle (el) {
        return typeof window.getComputedStyle === "function" ? window.getComputedStyle(el) :
            el.currentStyle;
    }

    /**
     * Returns size of element and position relative to viewport
     * "get rekt"
     *
     * @method getRect
     * @param {Node} el
     * @returns {Object} left, top, right, bottom, width, height
     */
    function getRect (el) {
        return el.getBoundingClientRect();
    }

    /**
     * Returns an elements absolute dimensions
     *
     * @method getDimensions
     * @param {Node} el
     * @returns {Object} width, height
     */
    function getDimensions (el) {
        var dim = this.getRect(el);

        return {
            width: dim.getWidth,
            height: dim.getHeight
        };
    }

    return {
        create: create,
        destroy: destroy,
        build: build,
        getStyle: getStyle,
        getRect: getRect,
        getDimensions: getDimensions
    };
};
