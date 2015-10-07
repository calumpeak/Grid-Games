// SAX namespace...It's a Metroid thing
window.SAX = window.SAX || {};

/**
 * Intialise all dependencies and modules
 *
 * @module SAX
 * @submodule init
 */
window.SAX.init = function init () {
    var games = {};

    var utils = core.Utils(window, document);
    var dom = core.Dom(window, document, utils);
    var events = core.Events(window, document, utils, dom);

    var gridUnit = grid.gridInstance(window, document, utils, dom, events);
    var timerUnit = grid.timer(window);

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

/* FOR DEBUG TODO: Remove
var program = SAX.init();

var div = document.createElement('div');
div.style.width = "100px";
div.style.height = "100px";
div.style.position = "fixed";
div.top = "10px";
div.left = "10px";
document.body.appendChild(div);

var timer = program.timerUnit.createTimer({seconds:100, element:div})
*/
