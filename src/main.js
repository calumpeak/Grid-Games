// It's a Metroid thing
window.SAX = window.SAX || {};

/**
 * Initialise all dependencies and modules
 *
 * @module SAX
 * @submodule init
 */
window.SAX.init = function init () {
    // Lazy load
    var games   = {};

    // Core modules
    var utils   = core.Utils(window, document);
    var dom     = core.Dom(window, document, utils);
    var events  = core.Events(window, document, utils, dom);

    // Logic modules
    var grid    = logic.grid(window, document, utils, dom, events);
    var timer   = logic.timer(window, document, events);
    var score   = logic.score(window, document, events);
    var decor   = logic.decoration(window, document, utils);
    var message = logic.message(window, document, utils, dom, events);
    var page    = logic.page(window, document, dom);

    // Bootstrap
    var application = bootstrap.app(window);

    // Games
    games.grid = function () {
        var logic   = theGrid.logic(grid, timer, score, page, utils, dom, events);
    };

    games.memory = function () {
        var inform  = memory.inform(message);
        var logic   = memory.logic(grid, score, page, inform, decor, utils, dom, events);

        return logic.run();
    };

    // Kick off
    application.run(games);

};

/* FOR DEBUG TODO: Remove */
SAX.init();
