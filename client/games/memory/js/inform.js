var memory = memory || {};

/**
 * Inform ALL the things
 *
 * @module memory
 * @submodule inform
 */
memory.inform = function inform (message) {

    /**
     * Setup options
     *
     * @constructor
     */
    function Inform (options) {
        this.message = message.create({
            elem: options.elem
        });
        this.context = options.context;

        this.bindMessages();
    }

    /**
     * Subscribe to messages from context and inform the user of their actions
     *
     * @method bindMessages
     * @for Inform
     */
    Inform.prototype.bindMessages = function bindMessages () {
        var self    = this;
        var logic   = this.context;
        var grid    = this.context.grid;
        var score   = this.context.score;

        logic.on("AIDone", function () {
            self.message.show("AI.done");
        });

        score.on("scoreChange", function (event) {
            if (event.data.lvlCap) {
                self.message.show("level.up");
            }
        });
    };

    function create (options) {
        return new Inform(options);
    }

    return {
        create: create
    };
};
