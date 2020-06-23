const {LEVELS_COMMAS} = require("./levelsCommas")

const computeLevelCommaMeans = level => {
    const levelCommas = LEVELS_COMMAS[level]

    const levelCommasExcludingTheLastComma = levelCommas.slice(0, levelCommas.length - 1)

    return levelCommasExcludingTheLastComma.map((comma, index) => {
        const nextComma = levelCommas[index + 1]

        return {
            name: [comma.ascii, nextComma.ascii].join(" "),
            position: (comma.position + nextComma.position) / 2,
        }
    })
}

module.exports = {
    computeLevelCommaMeans,
}
