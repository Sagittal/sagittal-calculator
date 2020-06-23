const {APOTOME} = require("../intervals")
const {MAXIMUM_POSITION} = require("./intervals")
const {LEVELS} = require("./levels")
const {LEVEL_EDAS} = require("./levelEdas")

const computeInaMidpoints = level => {
    const eda = LEVEL_EDAS[LEVELS.indexOf(level)]

    return [...Array(eda).keys()].map(degree => {
        const midpoint = degree + 0.5
        const position = APOTOME * midpoint / eda

        if (position > MAXIMUM_POSITION) return undefined

        const name = `${midpoint}°${eda}`

        return {name, position}
    }).filter(inaMidpoint => !!inaMidpoint)
}

module.exports = {
    computeInaMidpoints,
}
