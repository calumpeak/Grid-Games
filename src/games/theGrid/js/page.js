var theGrid = theGrid || {};

/**
 * Creates the page elements for the game
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

        // Append elements to the dom
        dom.append( [this.timer, this.score, this.holder, this.messages] );
    }


    function createPage () {
        return new Page();
    }

    return {
        createPage: createPage
    };
};
