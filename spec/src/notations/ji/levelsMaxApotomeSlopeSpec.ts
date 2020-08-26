import { abs, Id, Max, Monzo } from "../../../../src/general"
import { ApotomeSlope, computeApotomeSlope } from "../../../../src/general/music"
import { getSymbol, JiSymbol, Level, LEVELS_SYMBOL_IDS } from "../../../../src/notations/ji"

describe("max apotome slope per level", () => {
    it("increases a bit at each level", () => {
        const actual = (Object.entries(LEVELS_SYMBOL_IDS) as Array<[Level, Array<Id<JiSymbol>>]>)
            .map(([level, levelSymbolIds]: [Level, Array<Id<JiSymbol>>]): Partial<Record<Level, ApotomeSlope>> => {
                const levelMaxApotomeSlope: Max<ApotomeSlope> = levelSymbolIds.reduce(
                    (levelMaxApotomeSlope, levelSymbolId) => {
                        const levelSymbol = getSymbol(levelSymbolId)
                        const apotomeSlope = abs(computeApotomeSlope(levelSymbol.primaryComma.monzo as Monzo))

                        return apotomeSlope > levelMaxApotomeSlope ? apotomeSlope : levelMaxApotomeSlope
                    },
                    0,
                ) as Max<ApotomeSlope>

                return { [ level ]: levelMaxApotomeSlope }
            })

        const expected: Array<Partial<Record<Level, Max<ApotomeSlope>>>> = [
            { [ Level.MEDIUM ]: 6.354528858477924 as Max<ApotomeSlope> },
            { [ Level.HIGH ]: 7.763478611049832 as Max<ApotomeSlope> },
            { [ Level.ULTRA ]: 11.558451753921005 as Max<ApotomeSlope> },
            { [ Level.EXTREME ]: 11.558451753921005 as Max<ApotomeSlope> },
            { [ Level.INSANE ]: 11.558451753921005 as Max<ApotomeSlope> },
        ]
        expect(actual).toEqual(expected)
    })
})
