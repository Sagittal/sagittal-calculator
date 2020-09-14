import { increment } from "../../../../../../src/general/code"
import { computeCentsFromPitch } from "../../../../../../src/general/music"
import {
    APOTOME_CENTS,
    Bound,
    getSagittalComma,
    JiSymbol,
    JI_BOUNDS,
    JI_SYMBOLS,
    SagittalComma,
} from "../../../../../../src/sagittal"

describe("half-apotome mirror", (): void => {
    const halfApotomeCents = APOTOME_CENTS / 2

    it("is the case that the commas in the JI notation are symmetrical about the half-apotome mirror", (): void => {
        const sagittalJiCommas = JI_SYMBOLS
            .map((jiSymbol: JiSymbol): SagittalComma => getSagittalComma(jiSymbol.primaryCommaId))
        const firstCommaGreaterThanHalfApotomeMirrorIndex = sagittalJiCommas.findIndex(
            (sagittalComma: SagittalComma): boolean => computeCentsFromPitch(sagittalComma) > halfApotomeCents,
        )

        let indexOffset = 0
        while (firstCommaGreaterThanHalfApotomeMirrorIndex + indexOffset < sagittalJiCommas.length) {
            const index = firstCommaGreaterThanHalfApotomeMirrorIndex + indexOffset
            const mirroredIndex = firstCommaGreaterThanHalfApotomeMirrorIndex - 1 - indexOffset

            const comma = sagittalJiCommas[ index ]
            const mirroredComma = sagittalJiCommas[ mirroredIndex ]

            const actual = computeCentsFromPitch(comma) - halfApotomeCents
            const expected = halfApotomeCents - computeCentsFromPitch(mirroredComma)

            expect(actual).toBeCloseTo(expected)

            indexOffset = increment(indexOffset)
        }
    })

    it("is the case that the bounds in the JI notation are symmetrical about the half-apotome mirror", (): void => {
        const boundAtHalfApotomeMirrorIndex =
            JI_BOUNDS.findIndex((jiBound: Bound): boolean => jiBound.cents > halfApotomeCents)

        let indexOffset = 1
        while (boundAtHalfApotomeMirrorIndex + indexOffset < JI_BOUNDS.length) {
            const index = boundAtHalfApotomeMirrorIndex + indexOffset
            const mirroredIndex = boundAtHalfApotomeMirrorIndex - indexOffset

            const bound = JI_BOUNDS[ index ]
            const mirroredBound = JI_BOUNDS[ mirroredIndex ]

            expect(bound.cents - halfApotomeCents).toBeCloseTo(halfApotomeCents - mirroredBound.cents)

            indexOffset = increment(indexOffset)
        }
    })
})
