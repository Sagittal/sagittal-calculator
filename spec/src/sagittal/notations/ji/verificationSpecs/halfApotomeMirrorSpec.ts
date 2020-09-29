import { increment } from "../../../../../../src/general/code"
import { equalNums, numIsHigher } from "../../../../../../src/general/math"
import { computeInterval } from "../../../../../../src/general/music/interval"
import {
    getPrimaryComma,
    HALF_APOTOME,
    JiNotationBound,
    JI_NOTATION,
    JI_NOTATION_BOUNDS,
    PrimaryComma,
} from "../../../../../../src/sagittal"

// TODO: REALIZE ERD DIAGRAM FOR ELEMENTS AND SYMBOLS AND COMMAS
//  Ah ha! found this note. had lost it.
//  Original note: The idea of symbol *class* is great. But I'm wondering if maybe there's room for improvement.
//  I'm thinking in particular of how choices of comma above the half-apotome mirror are not independent.
//  (see: http://forum.sagittal.org/viewtopic.php?p=2317#p2317)
//  But I'm also not sure we want to shift the whole basis back to commas...
//  Yes perhaps the half-apotome mirror test should suffice here.
//  What I *had* been thinking was that only the commas up to the half apotome mirror would define class-dom.

describe("half-apotome mirror", (): void => {
    it("is the case that the commas in the JI notation are symmetrical about the half-apotome mirror", (): void => {
        const jiNotationPrimaryCommas = JI_NOTATION.map(getPrimaryComma)
        const firstCommaGreaterThanHalfApotomeMirrorIndex = jiNotationPrimaryCommas.findIndex(
            (primaryComma: PrimaryComma): boolean => numIsHigher(primaryComma, HALF_APOTOME),
        )

        let indexOffset = 0
        while (firstCommaGreaterThanHalfApotomeMirrorIndex + indexOffset < jiNotationPrimaryCommas.length) {
            const index = firstCommaGreaterThanHalfApotomeMirrorIndex + indexOffset
            const mirroredIndex = firstCommaGreaterThanHalfApotomeMirrorIndex - 1 - indexOffset

            const comma = jiNotationPrimaryCommas[ index ]
            const mirroredComma = jiNotationPrimaryCommas[ mirroredIndex ]

            const actual = computeInterval(comma, HALF_APOTOME)
            const expected = computeInterval(HALF_APOTOME, mirroredComma)
            expect(actual).toEqualNum(expected)

            indexOffset = increment(indexOffset)
        }
    })

    it("is the case that the bounds in the JI notation are symmetrical about the half-apotome mirror", (): void => {
        const jiNotationBoundAtHalfApotomeMirrorIndex =
            JI_NOTATION_BOUNDS.findIndex((jiNotationBound: JiNotationBound): boolean => {
                return equalNums(jiNotationBound, HALF_APOTOME)
            })

        let indexOffset = 1
        while (jiNotationBoundAtHalfApotomeMirrorIndex + indexOffset < JI_NOTATION_BOUNDS.length) {
            const index = jiNotationBoundAtHalfApotomeMirrorIndex + indexOffset
            const mirroredIndex = jiNotationBoundAtHalfApotomeMirrorIndex - indexOffset

            const jiNotationBound = JI_NOTATION_BOUNDS[ index ]
            const mirroredBound = JI_NOTATION_BOUNDS[ mirroredIndex ]

            const actual = computeInterval(jiNotationBound, HALF_APOTOME)
            const expected = computeInterval(HALF_APOTOME, mirroredBound)
            expect(actual).toEqualNum(expected)

            indexOffset = increment(indexOffset)
        }
    })
})
