import {Abs, abs, Max} from "../../../../../../src/general"
import {CommaClassId, getCommaClass} from "../../../../../../src/sagittal"
import {ApotomeSlope, computeApotomeSlope} from "../../../../../../src/sagittal/ji/pitch"
import {JiNotationLevelId, JI_NOTATION_LEVELS_COMMA_CLASS_IDS} from "../../../../../../src/sagittal/notations/ji"

describe("max AAS per JI notation level", (): void => {
    it("increases a bit at each JI notation level", (): void => {
        const entries = Object.entries(JI_NOTATION_LEVELS_COMMA_CLASS_IDS) as Array<[JiNotationLevelId, CommaClassId[]]>
        const actual = entries.map((
            [jiNotationLevel, jiNotationLevelCommaClassIds]: [JiNotationLevelId, CommaClassId[]],
        ): Partial<Record<JiNotationLevelId, ApotomeSlope>> => {
            const jiNotationLevelMaxAas: Max<Abs<ApotomeSlope>> = jiNotationLevelCommaClassIds.reduce(
                (
                    jiNotationLevelMaxAas: Max<Abs<ApotomeSlope>>,
                    jiNotationLevelCommaClassId: CommaClassId,
                ): Max<Abs<ApotomeSlope>> => {
                    const commaClass = getCommaClass(jiNotationLevelCommaClassId)
                    const apotomeSlope = abs(computeApotomeSlope(commaClass.pitch))

                    return apotomeSlope > jiNotationLevelMaxAas ?
                        apotomeSlope as Max<Abs<ApotomeSlope>> :
                        jiNotationLevelMaxAas as Max<Abs<ApotomeSlope>>
                },
                0 as Max<Abs<ApotomeSlope>>,
            ) as Max<Abs<ApotomeSlope>>

            return {[jiNotationLevel]: jiNotationLevelMaxAas}
        })

        const expected: Array<Partial<Record<JiNotationLevelId, Max<ApotomeSlope>>>> = [
            {[JiNotationLevelId.MEDIUM]: 6.354529 as Max<ApotomeSlope>},
            {[JiNotationLevelId.HIGH]: 7.763479 as Max<ApotomeSlope>},
            {[JiNotationLevelId.ULTRA]: 11.558452 as Max<ApotomeSlope>},
            {[JiNotationLevelId.EXTREME]: 11.558452 as Max<ApotomeSlope>},
            {[JiNotationLevelId.INSANE]: 11.558452 as Max<ApotomeSlope>},
        ]
        expect(actual).toBeCloseToObject(expected)
    })
})
