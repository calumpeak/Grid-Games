var logic = logic || {};

logic.page = function page (dom) {
    /**
     * Node for page elements
     *
     * @constant
     */
    var NODE = "div";

    /**
     * Page constructor
     *
     * @function Page
     */
    function Page (options) {
        this.nodes = [];

        for (var k in options) {
            this[k] = dom.create(NODE);
            this[k].id = options[k];
            this.nodes.push(this[k]);
        }

        dom.append(this.nodes);
    }

    /**
     * Remove page elements from Dom
     *
     * @for Page
     * @method remove
     */
    Page.prototype.remove = function remove () {
        dom.destroy(this.nodes);
    };

    function create (options) {
        return new Page(options);
    }

    return {
        create: create
    };
};
