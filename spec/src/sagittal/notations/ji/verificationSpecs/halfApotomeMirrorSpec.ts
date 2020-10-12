import { increment } from "../../../../../../src/general/code"
import { areScamonsEqual, isScamonGreater } from "../../../../../../src/general/math/numeric/scamon"
import { subtractScamons } from "../../../../../../src/general/math/numeric/scamon/typedOperations"
import {
    CommaClass,
    getCommaClass,
    HALF_APOTOME,
    JiNotationBound,
    JI_NOTATION,
    JI_NOTATION_BOUNDS,
} from "../../../../../../src/sagittal"

describe("half-apotome mirror", (): void => {
    it("is the case that the commas in the JI notation are symmetrical about the half-apotome mirror", (): void => {
        const jiNotationCommaClasses = JI_NOTATION.map(getCommaClass)
        const firstCommaClassGreaterThanHalfApotomeMirrorIndex = jiNotationCommaClasses.findIndex(
            (commaClass: CommaClass): boolean => isScamonGreater(commaClass, HALF_APOTOME),
        )

        let indexOffset = 0
        while (firstCommaClassGreaterThanHalfApotomeMirrorIndex + indexOffset < jiNotationCommaClasses.length) {
            const index = firstCommaClassGreaterThanHalfApotomeMirrorIndex + indexOffset
            const mirroredIndex = firstCommaClassGreaterThanHalfApotomeMirrorIndex - 1 - indexOffset

            const commaClass = jiNotationCommaClasses[ index ]
            const mirroredCommaClass = jiNotationCommaClasses[ mirroredIndex ]

            const actual = subtractScamons(commaClass, HALF_APOTOME)
            const expected = subtractScamons(HALF_APOTOME, mirroredCommaClass)
            expect(actual).toEqualPitch(expected)

            indexOffset = increment(indexOffset)
        }
    })

    it("is the case that the bounds in the JI notation are symmetrical about the half-apotome mirror", (): void => {
        const jiNotationBoundAtHalfApotomeMirrorIndex =
            JI_NOTATION_BOUNDS.findIndex((jiNotationBound: JiNotationBound): boolean => {
                return areScamonsEqual(jiNotationBound.pitch, HALF_APOTOME)
            })

        let indexOffset = 1
        while (jiNotationBoundAtHalfApotomeMirrorIndex + indexOffset < JI_NOTATION_BOUNDS.length) {
            const index = jiNotationBoundAtHalfApotomeMirrorIndex + indexOffset
            const mirroredIndex = jiNotationBoundAtHalfApotomeMirrorIndex - indexOffset

            const jiNotationBound = JI_NOTATION_BOUNDS[ index ]
            const mirroredBound = JI_NOTATION_BOUNDS[ mirroredIndex ]

            const actual = subtractScamons(jiNotationBound.pitch, HALF_APOTOME)
            const expected = subtractScamons(HALF_APOTOME, mirroredBound.pitch)
            expect(actual).toEqualPitch(expected)

            indexOffset = increment(indexOffset)
        }
    })
})
