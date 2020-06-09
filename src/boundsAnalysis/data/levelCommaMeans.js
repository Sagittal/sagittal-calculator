const {LEVELS_COMMAS} = require("../data/levels")

const computeLevelCommaMeans = level => {
    const levelCommas = LEVELS_COMMAS[level]

    const levelCommasExcludingTheLastComma = levelCommas.slice(0, levelCommas.length - 1)

    return levelCommasExcludingTheLastComma.map((comma, index) => {
        const nextComma = levelCommas[index + 1]

        return {
            name: [comma.symbol, nextComma.symbol].join(" "),
            position: (comma.position + nextComma.position) / 2,
        }
    })
}

module.exports = {
    computeLevelCommaMeans,
}
