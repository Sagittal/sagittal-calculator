import { Abs, abs, Id, Max } from "../../../../../../src/general"
import { CommaClass, getCommaClass } from "../../../../../../src/sagittal"
import { ApotomeSlope, computeApotomeSlope } from "../../../../../../src/sagittal/ji/pitch"
import { JiNotationLevel, JI_NOTATION_LEVELS_COMMA_CLASS_IDS } from "../../../../../../src/sagittal/notations/ji"

describe("max AAS per JI notation level", (): void => {
    it("increases a bit at each JI notation level", (): void => {
        const entries =
            Object.entries(JI_NOTATION_LEVELS_COMMA_CLASS_IDS) as Array<[JiNotationLevel, Array<Id<CommaClass>>]>
        const actual = entries.map((
            [jiNotationLevel, jiNotationLevelCommaClassIds]: [JiNotationLevel, Array<Id<CommaClass>>],
        ): Partial<Record<JiNotationLevel, ApotomeSlope>> => {
            const jiNotationLevelMaxAas: Max<Abs<ApotomeSlope>> = jiNotationLevelCommaClassIds.reduce(
                (
                    jiNotationLevelMaxAas: Max<Abs<ApotomeSlope>>,
                    jiNotationLevelCommaClassId: Id<CommaClass>,
                ): Max<Abs<ApotomeSlope>> => {
                    const commaClass = getCommaClass(jiNotationLevelCommaClassId)
                    const apotomeSlope = abs(computeApotomeSlope(commaClass.pitch))

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
