var library = library || {};

/**
 * Library of material design based colours
 * A simplified version based on Shuhei's npm module
 * Only need the darker end of the colours
 * https://github.com/shuhei/material-colors/
 *
 * @module library
 * @submodule colours
 */
library.MaterialColour = function MaterialColour () {

    return {
        red: {
            a100: "#ff8a80",  a200: "#ff5252",  a400: "#ff1744",  a700: "#d50000"
        },
        pink: {
            a100: "#ff80ab",  a200: "#ff4081",  a400: "#f50057",  a700: "#c51162"
        },
        purple: {
            a100: "#ea80fc",  a200: "#e040fb",  a400: "#d500f9",  a700: "#aa00ff"
        },
        deepPurple: {
            a100: "#b388ff",  a200: "#7c4dff",  a400: "#651fff",  a700: "#6200ea"
        },
        indigo: {
            a100: "#8c9eff",  a200: "#536dfe",  a400: "#3d5afe",  a700: "#304ffe"
        },
        blue: {
            a100: "#82b1ff",  a200: "#448aff",  a400: "#2979ff",  a700: "#2962ff"
        },
        lightBlue: {
            a100: "#80d8ff",  a200: "#40c4ff",  a400: "#00b0ff",  a700: "#0091ea"
        },
        cyan: {
            a100: "#84ffff",  a200: "#18ffff",  a400: "#00e5ff",  a700: "#00b8d4"
        },
        teal: {
            a100: "#a7ffeb",  a200: "#64ffda",  a400: "#1de9b6",  a700: "#00bfa5"
        },
        green: {
            a100: "#b9f6ca",  a200: "#69f0ae",  a400: "#00e676",  a700: "#00c853"
        },
        lightGreen: {
            a100: "#ccff90",  a200: "#b2ff59",  a400: "#76ff03",  a700: "#64dd17"
        },
        lime: {
            a100: "#f4ff81",  a200: "#eeff41",  a400: "#c6ff00",  a700: "#aeea00"
        },
        yellow: {
            a100: "#ffff8d",  a200: "#ffff00",  a400: "#ffea00",  a700: "#ffd600"
        },
        amber: {
            a100: "#ffe57f",  a200: "#ffd740",  a400: "#ffc400",  a700: "#ffab00"
        },
        orange: {
            a100: "#ffd180",  a200: "#ffab40",  a400: "#ff9100",  a700: "#ff6d00"
        },
        deepOrange: {
            a100: "#ff9e80",  a200: "#ff6e40",  a400: "#ff3d00",  a700: "#dd2c00"
        }
    };

};