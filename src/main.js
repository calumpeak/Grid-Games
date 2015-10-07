// SAX namespace...It's a Metroid thing
window.SAX = window.SAX || {};

// Initialise all modules
window.SAX.init = function init () {
    var games = {};

    var utils = core.Utils(window, document);
    var dom = core.Dom(window, document, utils);
    var events = core.Events(window, document, utils, dom);

    var gridUnit = grid.gridInstance(window, document, utils, dom, events);
    var timerUnit = grid.timer(window);

    games.grid = function () {
        var logic = theGrid.logic(gridUnit, utils, dom, events);
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
        games: games
    };
};
