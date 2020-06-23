const {computeApotomeSlope} = require("../../../src/findCommas/utilities/apotomeSlope")
const {LEVELS_COMMAS} = require("../../../src/boundsAnalysis/data/levelsCommas")

describe("maximum apotome slope per level", () => {
    it("increases a bit at each level", () => {
        const result = Object.entries(LEVELS_COMMAS).map(([level, levelCommas]) => {
            const levelMaximumApotomeSlope = levelCommas.reduce(
                (levelMaximumApotomeSlope, levelComma) => {
                    const apotomeSlope = Math.abs(computeApotomeSlope(levelComma.monzo))
                    return apotomeSlope > levelMaximumApotomeSlope ? apotomeSlope : levelMaximumApotomeSlope
                },
                0,
            )

            return {[level]: levelMaximumApotomeSlope}
        })

        const expectedLevelMaximumApotomeSlopes = [
            {MEDIUM: 6.354528858477924},
            {HIGH: 7.763478611049832},
            {ULTRA: 11.558451753921005},
            {EXTREME: 11.558451753921005},
            {INSANE: 11.558451753921005},
        ]
        expect(result).toEqual(expectedLevelMaximumApotomeSlopes)
    })
})
