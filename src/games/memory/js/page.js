var memory = memory || {};

/**
 * Creates the page elements for the game
 *
 * @module memory
 * @submodule page
 */
memory.page = function page (dom) {

    /**
     * Page constructor
     *
     * @function Page
     */
    function Page () {
        // The score element
        this.score  = dom.create("div");
        this.score.id = "memoryScore";
        // The game holder
        this.holder = dom.create("div");
        this.holder.id = "memoryHolder";
        // The message screen
        this.messages = dom.create("div");
        this.messages.id = "memoryMessages";

        this.nodes = [this.score, this.holder, this.messages];

        // Append elements to the dom
        dom.append(this.nodes);
    }

    /**
     * Remove page elements from Dom
     *
     * @for Page
     * @method remove
     */
    Page.prototype.remove = function remove () {
        this.nodes.forEach(function (element) {
            dom.destroy(element);
        });
    };

    function createPage () {
        return new Page();
    }

    return {
        createPage: createPage
    };
};
