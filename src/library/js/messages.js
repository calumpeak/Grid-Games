var library = library || {};

/**
 * Library of messages that the various games need
 * '${XX}' denotes a replacer
 *
 * @module Library
 * @submodule Messages
 * @returns {Object}
 */
library.Messages = function Messages () {

    return {
        level: {
            up: "Level Up!!",
            down: "Level Down!!"
        },
        gameOver: {
            time: "Game Over, Out Of Time!!",
            choice: "Game Over, Wrong ${CHOICE}!!"
        },
        score: {
            total: "You Scored ${SCORE}!!"
        },
        AI: {
            done: "Your Turn"
        }
    };
};
