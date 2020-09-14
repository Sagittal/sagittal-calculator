import { Abs, abs, Id, Max } from "../../../../../../src/general"
import { getSagittalComma } from "../../../../../../src/sagittal"
import { ApotomeSlope, computeApotomeSlope } from "../../../../../../src/sagittal/comma/evaluation"
import { getJiSymbol, JiSymbol, Level, LEVELS_SYMBOL_IDS } from "../../../../../../src/sagittal/notations/ji"

describe("max abs apotome slope per level", (): void => {
    it("increases a bit at each level", (): void => {
        const actual = (Object.entries(LEVELS_SYMBOL_IDS) as Array<[Level, Array<Id<JiSymbol>>]>)
            .map(([level, levelSymbolIds]: [Level, Array<Id<JiSymbol>>]): Partial<Record<Level, ApotomeSlope>> => {
                const levelMaxAbsApotomeSlope: Max<Abs<ApotomeSlope>> = levelSymbolIds.reduce(
                    (
                        levelMaxAbsApotomeSlope: Max<Abs<ApotomeSlope>>,
                        levelSymbolId: Id<JiSymbol>,
                    ): Max<Abs<ApotomeSlope>> => {
                        const levelSymbol = getJiSymbol(levelSymbolId)
                        const primaryComma = getSagittalComma(levelSymbol.primaryCommaId)
                        const apotomeSlope = abs(computeApotomeSlope(primaryComma))

                        return apotomeSlope > levelMaxAbsApotomeSlope ?
                            apotomeSlope as Max<Abs<ApotomeSlope>> :
                            levelMaxAbsApotomeSlope as Max<Abs<ApotomeSlope>>
                    },
                    0 as Max<Abs<ApotomeSlope>>,
                ) as Max<Abs<ApotomeSlope>>

                return { [ level ]: levelMaxAbsApotomeSlope }
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
