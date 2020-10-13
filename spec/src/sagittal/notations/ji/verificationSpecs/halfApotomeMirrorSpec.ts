import { increment } from "../../../../../../src/general/code"
import { areScamonsEqual, isScamonGreater } from "../../../../../../src/general/math/numeric/scamon"
import { subtractScamons } from "../../../../../../src/general/math/numeric/scamon/typedOperations"
import {
    CommaClass,
    getCommaClass,
    HALF_APOTOME,
    JiNotationBoundClass,
    JI_NOTATION,
    JI_NOTATION_BOUND_CLASSES,
} from "../../../../../../src/sagittal"

describe("half-apotome mirror", (): void => {
    it("is the case that the commas in the JI notation are symmetrical about the half-apotome mirror", (): void => {
        const jiNotationCommaClasses = JI_NOTATION.map(getCommaClass)
        const firstCommaClassGreaterThanHalfApotomeMirrorIndex = jiNotationCommaClasses.findIndex(
            (commaClass: CommaClass): boolean => isScamonGreater(commaClass.pitch, HALF_APOTOME),
        )

        let indexOffset = 0
        while (firstCommaClassGreaterThanHalfApotomeMirrorIndex + indexOffset < jiNotationCommaClasses.length) {
            const index = firstCommaClassGreaterThanHalfApotomeMirrorIndex + indexOffset
            const mirroredIndex = firstCommaClassGreaterThanHalfApotomeMirrorIndex - 1 - indexOffset

            const commaClass = jiNotationCommaClasses[ index ]
            const mirroredCommaClass = jiNotationCommaClasses[ mirroredIndex ]

            const actual = subtractScamons(commaClass.pitch, HALF_APOTOME)
            const expected = subtractScamons(HALF_APOTOME, mirroredCommaClass.pitch)
            expect(actual).toEqualPitch(expected)

            indexOffset = increment(indexOffset)
        }
    })

    it("is the case that the bound classes in the JI notation are symmetrical about the half-apotome mirror                   ", (): void => {
        const jiNotationBoundClassAtHalfApotomeMirrorIndex =
            JI_NOTATION_BOUND_CLASSES.findIndex((jiNotationBoundClass: JiNotationBoundClass): boolean => {
                return areScamonsEqual(jiNotationBoundClass.pitch, HALF_APOTOME)
            })

        let indexOffset = 1
        while (jiNotationBoundClassAtHalfApotomeMirrorIndex + indexOffset < JI_NOTATION_BOUND_CLASSES.length) {
            const index = jiNotationBoundClassAtHalfApotomeMirrorIndex + indexOffset
            const mirroredIndex = jiNotationBoundClassAtHalfApotomeMirrorIndex - indexOffset

            const jiNotationBound = JI_NOTATION_BOUND_CLASSES[ index ]
            const mirroredBound = JI_NOTATION_BOUND_CLASSES[ mirroredIndex ]

            const actual = subtractScamons(jiNotationBound.pitch, HALF_APOTOME)
            const expected = subtractScamons(HALF_APOTOME, mirroredBound.pitch)
            expect(actual).toEqualPitch(expected)

            indexOffset = increment(indexOffset)
        }
    })
})
