import { increment } from "../../../../../../src/general/code"
import { arePitchesEqual, isPitchHigher } from "../../../../../../src/general/music/pitch"
import { computeInterval } from "../../../../../../src/general/music/pitch/typedOperations"
import {
    getPrimaryComma,
    HALF_APOTOME,
    JiNotationBound,
    JI_NOTATION,
    JI_NOTATION_BOUNDS,
    PrimaryComma,
} from "../../../../../../src/sagittal"

describe("half-apotome mirror", (): void => {
    it("is the case that the commas in the JI notation are symmetrical about the half-apotome mirror", (): void => {
        const jiNotationPrimaryCommas = JI_NOTATION.map(getPrimaryComma)
        const firstCommaGreaterThanHalfApotomeMirrorIndex = jiNotationPrimaryCommas.findIndex(
            (primaryComma: PrimaryComma): boolean => isPitchHigher(primaryComma, HALF_APOTOME),
        )

        let indexOffset = 0
        while (firstCommaGreaterThanHalfApotomeMirrorIndex + indexOffset < jiNotationPrimaryCommas.length) {
            const index = firstCommaGreaterThanHalfApotomeMirrorIndex + indexOffset
            const mirroredIndex = firstCommaGreaterThanHalfApotomeMirrorIndex - 1 - indexOffset

            const comma = jiNotationPrimaryCommas[ index ]
            const mirroredComma = jiNotationPrimaryCommas[ mirroredIndex ]

            const actual = computeInterval(comma, HALF_APOTOME)
            const expected = computeInterval(HALF_APOTOME, mirroredComma)
            expect(actual).toEqualPitch(expected)

            indexOffset = increment(indexOffset)
        }
    })

    it("is the case that the bounds in the JI notation are symmetrical about the half-apotome mirror", (): void => {
        const jiNotationBoundAtHalfApotomeMirrorIndex =
            JI_NOTATION_BOUNDS.findIndex((jiNotationBound: JiNotationBound): boolean => {
                return arePitchesEqual(jiNotationBound.pitch, HALF_APOTOME)
            })

        let indexOffset = 1
        while (jiNotationBoundAtHalfApotomeMirrorIndex + indexOffset < JI_NOTATION_BOUNDS.length) {
            const index = jiNotationBoundAtHalfApotomeMirrorIndex + indexOffset
            const mirroredIndex = jiNotationBoundAtHalfApotomeMirrorIndex - indexOffset

            const jiNotationBound = JI_NOTATION_BOUNDS[ index ]
            const mirroredBound = JI_NOTATION_BOUNDS[ mirroredIndex ]

            const actual = computeInterval(jiNotationBound.pitch, HALF_APOTOME)
            const expected = computeInterval(HALF_APOTOME, mirroredBound.pitch)
            expect(actual).toEqualPitch(expected)

            indexOffset = increment(indexOffset)
        }
    })
})
