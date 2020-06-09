const {APOTOME, MAXIMUM_POSITION} = require("./intervals")
const {LEVEL_EDAS, LEVELS} = require("./levels")

const computeEdaMidpoints = level => {
    const eda = LEVEL_EDAS[LEVELS.indexOf(level)]

    return [...Array(eda).keys()].map(degree => {
        const midpoint = degree + 0.5
        const position = APOTOME * midpoint / eda

        if (position > MAXIMUM_POSITION) return undefined

        const name = `${midpoint}/${eda}`

        return {name, position}
    }).filter(edaMidpoint => !!edaMidpoint)
}

module.exports = {
    computeEdaMidpoints,
}
