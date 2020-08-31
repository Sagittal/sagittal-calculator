import { Abs, abs, Id, Max } from "../../../../../src/general"
import { getSagittalComma } from "../../../../../src/sagittal"
import { ApotomeSlope, computeApotomeSlope } from "../../../../../src/sagittal/commaEvaluation"
import { getJiSymbol, JiSymbol, Level, LEVELS_SYMBOL_IDS } from "../../../../../src/sagittal/notations/ji"

describe("max absolute apotome slope per level", () => {
    it("increases a bit at each level", () => {
        const actual = (Object.entries(LEVELS_SYMBOL_IDS) as Array<[Level, Array<Id<JiSymbol>>]>)
            .map(([level, levelSymbolIds]: [Level, Array<Id<JiSymbol>>]): Partial<Record<Level, ApotomeSlope>> => {
                const levelMaxAbsoluteApotomeSlope: Max<Abs<ApotomeSlope>> = levelSymbolIds.reduce(
                    (levelMaxAbsoluteApotomeSlope, levelSymbolId) => {
                        const levelSymbol = getJiSymbol(levelSymbolId)
                        const primaryComma = getSagittalComma(levelSymbol.primaryCommaId)
                        const apotomeSlope = abs(computeApotomeSlope(primaryComma.monzo))

                        return apotomeSlope > levelMaxAbsoluteApotomeSlope ? apotomeSlope : levelMaxAbsoluteApotomeSlope
                    },
                    0,
                ) as Max<Abs<ApotomeSlope>>

                return { [ level ]: levelMaxAbsoluteApotomeSlope }
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
