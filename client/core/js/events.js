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

    /**
     * Watch an object
     *
     * Adds custom methods to object so it can subscribe and publish
     * custom messages
     *
     * @method watch
     * @param {Object} obj
     * @returns {Object} obj
     */
    function watch (obj) {

        obj[watch.eventStore] = {};
        obj.on = watch.on;
        obj.fire = watch.fire;

        return obj;
    }

    /**
     * @class SAXEvent
     * @constructor
     */
    watch.SAXEvent = function (data) {
        this.data = data || {};
    };

    /**
     * The key under which custom events will be stored
     */
    watch.eventStore = "EVENTSTORE__";

    /**
     * Allow objects to listen to custom events fired by this object
     *
     * @for observable
     * @method on
     * @param {String} eventName name of an eventName
     * @param {Function} callback
     * @param {Object} additional context for the callback
     * @param {Array} args additional arguments for callbacl
     */
    watch.on = function (eventName, callback, context, args) {
        var events = watch.eventStore;
        if (!this[events][eventName]) {
            this[events][eventName] = [];
        }

        this[events][eventName].push([callback, context, args]);
    };

    /**
     * Allow objec to fire a custom event and execute callbacks bound to eventName
     *
     * @for observable
     * @method fired
     * @param {String} eventName
     * @param {Object} data key value pairs passed to the eventName
     */
    watch.fire = function (eventName, data) {
        var events  = watch.eventStore;
        var arr     = this[events][eventName] || [];

        arr.forEach(function (config) {
            var callback    = config[0];
            var context     = config[1];
            var args        = config[2];

            callback.apply(context, [new watch.SAXEvent(data)].concat(args));
        });
    };

    return {
        bind: bind,
        unbind: unbind,
        watch: watch
    };
};
