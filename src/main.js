// SAX namespace...It's a Metroid thing
window.SAX = window.SAX || {};

/**
 * Initialise all dependencies and modules
 *
 * @module SAX
 * @submodule init
 */
window.SAX.init = function init () {
    // Allow lazy load of games
    var games = {};

    // Core modules
    var utils = core.Utils(window, document);
    var dom = core.Dom(window, document, utils);
    var events = core.Events(window, document, utils, dom);
    
    // Logic modules
    var gridUnit = grid.gridInstance(window, document, utils, dom, events);
    var timerUnit = grid.timer(window, document, events);
    var scoreUnit = grid.score(window, document, events);

    games.grid = function () {
        var logic = theGrid.logic(gridUnit, timerUnit, utils, dom, events);
    };

    games.memory = function () {
        var logic = memory.logic(gridUnit, utils, dom, events);
    };

    // This return is temp for DEBUGGING
    // Gives access point into modules from console
    return {
        utils: utils,
        dom: dom,
        events: events,
        gridUnit: gridUnit,
        timerUnit: timerUnit,
        games: games
    };
};

/* FOR DEBUG TODO: Remove */
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
// var timer = program.timerUnit.createTimer({seconds:100, element:div});
