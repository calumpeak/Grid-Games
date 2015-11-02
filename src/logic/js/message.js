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

    /**
     * Writes a message to the given elements
     *
     * @for Messages
     * @method writeMessage
     */
    Messages.prototype.writeMessage = function writeMessage (message) {
        this.elem.innerHTML = message;
    };

    /**
     * Shows the message based on the key passed
     * e.g. "level.up" --> "Level Up!!"
     *
     * @for Messages
     * @method showMessage
     */
    Messages.prototype.showMessage = function showMessage (key) {
        key = key.split(".");

        this.writeMessage(this.messages[key[0]][key[1]]);
    };

    function createMessages (options) {
        return new Messages(options);
    }

    return {
        createMessages: createMessages
    }
};
