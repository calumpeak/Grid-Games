var memory = memory || {};

/**
 * Creates the page elements for the game
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

        // Append elements to the dom
        dom.append( [this.score, this.holder, this.messages] );
    }


    function createPage () {
        return new Page();
    }

    return {
        createPage: createPage
    };
};
