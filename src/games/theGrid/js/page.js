var theGrid = theGrid || {};

/**
 * Creates the page elements for the game
 *
 * @module theGrid
 * @submodule page
 */
theGrid.page = function page (dom) {

    /**
     * Page constructor
     *
     * @function Page
     */
    function Page () {
        // The timer elements
        this.timer = dom.create('div');
        this.timer.id = "theGridTimer";
        // The score element
        this.score  = dom.create("div");
        this.score.id = "theGridScore";
        // The game holder
        this.holder = dom.create("div");
        this.holder.id = "theGridHolder";
        // The message screen
        this.messages = dom.create("div");
        this.messages.id = "theGridMessages";

        this.nodes = [this.timer, this.score, this.holder, this.messages];
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
