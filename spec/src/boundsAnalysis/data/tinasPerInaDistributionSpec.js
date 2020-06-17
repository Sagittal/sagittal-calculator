const {LEVELS_BOUNDS} = require("../../../../src/boundsAnalysis/data/levelsBounds")
const {COMMAS} = require("../../../../src/boundsAnalysis/data/commas")

describe("tinas per ina distribution spec", () => {
    xit("gets me an answer", () => {
        Object.entries(LEVELS_BOUNDS).forEach(([level, levelBounds]) => {
            console.log(level)
            levelBounds.forEach(levelBound => {
                const index = levelBound.index
                const levelComma = COMMAS.find(levelComma => levelComma.index === index)
                console.log(levelComma.mina)
            })
        })
    })
})
