import {computeApotomeSlope} from "../../../../src/utilities/comma/apotomeSlope"
import {LEVELS_SYMBOLS} from "../../../../src/notations/ji/levelsSymbols"

describe("maximum apotome slope per level", () => {
    it("increases a bit at each level", () => {
        const result = Object.entries(LEVELS_SYMBOLS).map(([level, levelSymbols]: any) => {
            const levelMaximumApotomeSlope = levelSymbols.reduce(
                (levelMaximumApotomeSlope, levelSymbol) => {
                    const apotomeSlope = Math.abs(computeApotomeSlope(levelSymbol.primaryComma.monzo))
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
