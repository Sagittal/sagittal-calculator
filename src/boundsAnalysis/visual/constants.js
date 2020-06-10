const OUTPUT = "dist/boundsAnalysis/output.svg"
const EXCEPT_INSANE_LEVEL = 1

const SCALE = 100
const Y_SCALE = 1 * SCALE
const X_SCALE = 5 * SCALE

const MARGIN = 0.1
const LEVEL_HEIGHT = 1

const TICK_SIZE = SCALE * LEVEL_HEIGHT / 2
const HALF_TICK_SIZE = TICK_SIZE / 2

const DOT_SIZE = SCALE * 0.01 // TODO: there's something frustratingly inconsistent about what stuff is multiplied by scale and what isn't...
const DASH_SIZE = 1

const TEXT_OFFSET = Y_SCALE * 0.05
const COMMA_OFFSET = Y_SCALE * 0.1

module.exports = {
    OUTPUT,
    EXCEPT_INSANE_LEVEL,
    SCALE,
    X_SCALE,
    Y_SCALE,
    MARGIN,
    LEVEL_HEIGHT,
    TICK_SIZE,
    DOT_SIZE,
    DASH_SIZE,
    HALF_TICK_SIZE,
    TEXT_OFFSET,
    COMMA_OFFSET,
}