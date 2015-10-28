// It's a Metroid thing
window.SAX = window.SAX || {};

/**
 * Initialise all dependencies and modules
 *
 * @module SAX
 * @submodule init
 */
window.SAX.init = function init () {
    // Allow lazy load of games
    var games   = {};

    // Core modules
    var utils   = core.Utils(window, document);
    var dom     = core.Dom(window, document, utils);
    var events  = core.Events(window, document, utils, dom);

    // Logic modules
    var grid    = logic.grid(window, document, utils, dom, events);
    var timer   = logic.timer(window, document, events);
    var score   = logic.score(window, document, events);

    // Bootstrap
    var application = bootstrap.app(window);

    // Games
    games.grid = function () {
        var page    = theGrid.page(dom);
        var logic   = theGrid.logic(grid, timer, score, page, utils, dom, events);
    };

    games.memory = function () {
        var page    = memory.page(dom);
        var logic   = memory.logic(grid, score, page, utils, dom, events);

        return logic.run();
    };

    // Kick off
    application.run(games);


    // This return is temp for DEBUGGING
    // Gives access point into modules from console
    // return {
    //     utils: utils,
    //     dom: dom,
    //     events: events,
    //     grid: grid,
    //     timer: timer,
    //     games: games
    // };
};



/* FOR DEBUG TODO: Remove */
SAX.init();
// var program = SAX.init();
//
// var div = document.createElement('div');
// div.style.width = "100px";
// div.style.height = "100px";
// div.style.position = "fixed";
// div.top = "10px";
// div.left = "10px";
// document.body.appendChild(div);
//
// var timer = program.timer.createTimer({seconds:100, element:div});
