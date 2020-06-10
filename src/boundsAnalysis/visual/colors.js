const INITIAL_COLOR = "#0000ff" // TODO: this should be used in the first half line from the initial comma mean position
const EDA_COLOR = "#6666ff"
const MEAN_COLOR = "#88cccc"
const SIZE_COLOR = "#88ff88"
const OVERRIDE_COLOR = "#ff8888"
const NOT_NEAREST_EDA_COLOR = "#ffff88"
const NOT_NEAREST_MEAN_COLOR = "#ffcc88"
const NOT_NEAREST_SIZE_COLOR = "#ffcc88"

const RANK_FILLS = [
    INITIAL_COLOR,
    EDA_COLOR,
    MEAN_COLOR,
    SIZE_COLOR,
    NOT_NEAREST_EDA_COLOR,
    NOT_NEAREST_MEAN_COLOR,
    NOT_NEAREST_SIZE_COLOR,
    OVERRIDE_COLOR,
]

module.exports = {
    RANK_FILLS,
    EDA_COLOR,
    MEAN_COLOR,
    SIZE_COLOR,
    OVERRIDE_COLOR,
}
