// SAX namespace...It's a Metroid thing
window.SAX = window.SAX || {};

// Initialise all modules
window.SAX.init = function init () {
    var games = {};

    var utils = core.Utils(window, document);
    var dom = core.Dom(window, document, utils);
    var events = core.Events(window, document, utils, dom);

    var gridUnit = grid.gridInstance(window, document, utils, dom, events);

    games.grid = function () {
        // Init grid game
    };

    games.memory = function () {
        // Init memory game
    };

    // This return is temp for DEBUGGING
    // Gives access point into modules from console
    return {
        utils: utils,
        dom: dom,
        events: events,
        gridUnit: gridUnit
    }
};
