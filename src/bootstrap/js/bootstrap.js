var bootstrap = bootstrap || {};

/**
 * Bootstrap the Application
 *
 * @module bootstrap
 * @submodule app
 */
 bootstrap.app = function app (window) {

    function run (apps) {
        //Placeholder

        // Create Starting splash screens
        // Give user options on which app they want to run
        // Event listner --> app selection
        // run app with:
        // apps[buttonName]();

        //TEMPORARY//
        window.addEventListener("load", function () {
            apps.memory();
        });
    }

    return {
        run: run
    };
 };
