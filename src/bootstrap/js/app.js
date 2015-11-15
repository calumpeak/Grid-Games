var bootstrap = bootstrap || {};

/**
 * Bootstrap the Application
 *
 * @module bootstrap
 * @submodule app
 */
 bootstrap.app = function app (window, page, dom, events) {

    /**
     * Run the starting splash screen and launch the selected game
     * Create a splash screen
     * Create buttons from apps passed in
     * On click of button launch the relevant app
     * TODO:Buttons in page module
     *
     * @function Run
     * @param {Object} apps games that we wish to run
     */
    function run (apps) {
        events.bind(window, "load", function () {
            page = page.create({
                splash: "startSplash"
            });

            for (var game in apps) {
                var button = dom.create("div");
                button.className = "button";
                button.innerHTML = game;
                dom.append(button, page.splash);
            }

            events.bind(page.splash, "click", function (event) {
                var game = event.target.innerHTML;

                if (apps.hasOwnProperty(game)) {
                    page.remove();
                    apps[game]();
                }
            });
        });
    }

    return {
        run: run
    };
 };
