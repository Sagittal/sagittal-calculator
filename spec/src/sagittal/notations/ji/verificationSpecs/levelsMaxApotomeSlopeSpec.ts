import { Abs, abs, Id, Max } from "../../../../../../src/general"
import { getSagittalComma, getSymbolClass, SymbolClass } from "../../../../../../src/sagittal"
import { ApotomeSlope, computeApotomeSlope } from "../../../../../../src/sagittal/comma/evaluation"
import {
    JiNotationLevel,
    JI_NOTATION_LEVELS_SYMBOL_CLASS_IDS,
} from "../../../../../../src/sagittal/notations/ji"

describe("max AAS per JI notation level", (): void => {
    it("increases a bit at each JI notation level", (): void => {
        const entries =
            Object.entries(JI_NOTATION_LEVELS_SYMBOL_CLASS_IDS) as Array<[JiNotationLevel, Array<Id<SymbolClass>>]>
        const actual = entries.map((
            [jiNotationLevel, jiNotationLevelSymbolClassIds]: [JiNotationLevel, Array<Id<SymbolClass>>],
        ): Partial<Record<JiNotationLevel, ApotomeSlope>> => {
            const jiNotationLevelMaxAas: Max<Abs<ApotomeSlope>> = jiNotationLevelSymbolClassIds.reduce(
                (
                    jiNotationLevelMaxAas: Max<Abs<ApotomeSlope>>,
                    jiNotationLevelSymbolClassId: Id<SymbolClass>,
                ): Max<Abs<ApotomeSlope>> => {
                    const jiNotationLevelSymbolClass = getSymbolClass(jiNotationLevelSymbolClassId)
                    const primaryComma = getSagittalComma(jiNotationLevelSymbolClass.primaryCommaId)
                    const apotomeSlope = abs(computeApotomeSlope(primaryComma))

                    return apotomeSlope > jiNotationLevelMaxAas ?
                        apotomeSlope as Max<Abs<ApotomeSlope>> :
                        jiNotationLevelMaxAas as Max<Abs<ApotomeSlope>>
                },
                0 as Max<Abs<ApotomeSlope>>,
            ) as Max<Abs<ApotomeSlope>>

            return { [ jiNotationLevel ]: jiNotationLevelMaxAas }
        })

        const expected: Array<Partial<Record<JiNotationLevel, Max<ApotomeSlope>>>> = [
            { [ JiNotationLevel.MEDIUM ]: 6.354529 as Max<ApotomeSlope> },
            { [ JiNotationLevel.HIGH ]: 7.763479 as Max<ApotomeSlope> },
            { [ JiNotationLevel.ULTRA ]: 11.558452 as Max<ApotomeSlope> },
            { [ JiNotationLevel.EXTREME ]: 11.558452 as Max<ApotomeSlope> },
            { [ JiNotationLevel.INSANE ]: 11.558452 as Max<ApotomeSlope> },
        ]
        expect(actual).toBeCloseToObject(expected)
    })
})
