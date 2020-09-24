import { increment } from "../../../../../../src/general/code"
import { computeCentsFromPitch } from "../../../../../../src/general/music"
import {
    APOTOME_CENTS,
    getPrimaryComma,
    JiNotationBound,
    JI_NOTATION,
    JI_NOTATION_BOUNDS,
    SagittalComma,
} from "../../../../../../src/sagittal"

// The idea of symbol *class* is great. But I'm wondering if maybe there's room for improvement.
//  I'm thinking in particular of how choices of comma above the half-apotome mirror are not independent.
//  (see: http://forum.sagittal.org/viewtopic.php?p=2317#p2317)
//  but I'm also not sure we want to shift the whole basis back to commas...
//  yes perhaps the half-apotome mirror test should suffice here.
//  What I *had* been thinking was that only the commas up to the half apotome mirror would define class-dom.

describe("half-apotome mirror", (): void => {
    const halfApotomeCents = APOTOME_CENTS / 2

    it("is the case that the commas in the JI notation are symmetrical about the half-apotome mirror", (): void => {
        const jiNotationPrimaryCommas = JI_NOTATION.map(getPrimaryComma)
        const firstCommaGreaterThanHalfApotomeMirrorIndex = jiNotationPrimaryCommas.findIndex(
            (sagittalComma: SagittalComma): boolean => computeCentsFromPitch(sagittalComma) > halfApotomeCents,
        )

        let indexOffset = 0
        while (firstCommaGreaterThanHalfApotomeMirrorIndex + indexOffset < jiNotationPrimaryCommas.length) {
            const index = firstCommaGreaterThanHalfApotomeMirrorIndex + indexOffset
            const mirroredIndex = firstCommaGreaterThanHalfApotomeMirrorIndex - 1 - indexOffset

            const comma = jiNotationPrimaryCommas[ index ]
            const mirroredComma = jiNotationPrimaryCommas[ mirroredIndex ]

            const actual = computeCentsFromPitch(comma) - halfApotomeCents
            const expected = halfApotomeCents - computeCentsFromPitch(mirroredComma)

            expect(actual).toBeCloseTo(expected)

            indexOffset = increment(indexOffset)
        }
    })

    it("is the case that the bounds in the JI notation are symmetrical about the half-apotome mirror", (): void => {
        const jiNotationBoundAtHalfApotomeMirrorIndex =
            JI_NOTATION_BOUNDS.findIndex((jiNotationBound: JiNotationBound): boolean => {
                return jiNotationBound.cents > halfApotomeCents
            })

        let indexOffset = 1
        while (jiNotationBoundAtHalfApotomeMirrorIndex + indexOffset < JI_NOTATION_BOUNDS.length) {
            const index = jiNotationBoundAtHalfApotomeMirrorIndex + indexOffset
            const mirroredIndex = jiNotationBoundAtHalfApotomeMirrorIndex - indexOffset

            const jiNotationBound = JI_NOTATION_BOUNDS[ index ]
            const mirroredBound = JI_NOTATION_BOUNDS[ mirroredIndex ]

            expect(jiNotationBound.cents - halfApotomeCents).toBeCloseTo(halfApotomeCents - mirroredBound.cents)

            indexOffset = increment(indexOffset)
        }
    })
})
