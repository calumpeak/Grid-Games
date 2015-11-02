var logic = logic || {};

/**
 * Message ALL the things
 *
 * @module logic
 * @submodule Message
 */
logic.message = function message (window, document, utils, dom, events) {

    /**
     * Messages constructor
     *
     * @constructor
     */
    function Messages (options) {
        // Custom events
        events.watch(this);

        this.messages = library.Messages();
        this.elem = options.elem;
    }

    function createMessages (options) {
        return new Messages(options);
    }

    return {
        createMessages: createMessages
    }
};
