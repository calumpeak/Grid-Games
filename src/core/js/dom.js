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
     * Destroy an element(s)
     *
     * @public
     * @method destroy
     * @param {Node} nodes
     */
    function destroy (nodes) {
        if (!utils.isArray(nodes)) {
            nodes = [ nodes ];
        }

        nodes.forEach(function (node) {
            node.parentNode.removeChild(node);
        });
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
        var len = arguments.length;
        var i;

        for (i = 1; i < len; i++) {
            el.appendChild(arguments[i]);
        }

        return el;
    }

    /**
     * Appends an array/node of element(s) to the dom
     *
     * @public
     * @method append
     * @param {Array | Node} nodes
     * @param {Node} element element to append to
     */
    function append (nodes, element) {
        if (!utils.isArray(nodes)) {
            nodes = [ nodes ];
        }

        if (!element) {
            element = document.body;
        }

        nodes.forEach(function (node) {
            element.appendChild(node);
        });
    }

    /**
     * Sets a specific style property on an element
     *
     * @function setStyle
     * @param {Node} element dom Node
     * @param {String} property css property
     * @param {String} attribute css attribute to the above property
     */
    function setStyle (element, property, attribute) {
        element.style[property] = attribute;
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

    return {
        create: create,
        destroy: destroy,
        build: build,
        append: append,
        setStyle: setStyle,
        getStyle: getStyle,
        getRect: getRect
    };
};
