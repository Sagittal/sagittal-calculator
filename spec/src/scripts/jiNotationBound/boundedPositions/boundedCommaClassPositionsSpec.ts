import { Cents, computePitchFromCents, Id, Monzo } from "../../../../../src/general"
import { JiNotationLevel, PrimaryComma } from "../../../../../src/sagittal"
import { computeBoundedCommaClassPositions } from "../../../../../src/scripts/jiNotationBound/boundedPositions"

describe("computeBoundedCommaClassPositions", (): void => {
    it("gives the positions of the comma classes immediately lesser and greater than the position at that JI notation level", (): void => {
        const position = computePitchFromCents(9 as Cents)
        const jiNotationLevel = JiNotationLevel.MEDIUM

        const actual = computeBoundedCommaClassPositions(position, jiNotationLevel)

        const expected = [
            // |(       ~5.757802¢
            {
                id: 12 as Id<PrimaryComma>,
                monzo: [10, -6, 1, -1] as Monzo<{ rational: true }>,
            } as PrimaryComma,
            // )|(      ~9.687960¢
            {
                id: 20 as Id<PrimaryComma>,
                monzo: [7, -4, 0, 1, -1] as Monzo<{ rational: true }>,
            } as PrimaryComma,
        ]

        expect(actual).toEqual(expected)
    })

    it("when the position is greater than the greatest comma class at the JI notation level, gives the position of the greatest comma class for the lesser comma class and undefined for the greater comma class", (): void => {
        const position = computePitchFromCents(68.4 as Cents)
        const jiNotationLevel = JiNotationLevel.ULTRA

        const actual = computeBoundedCommaClassPositions(position, jiNotationLevel)

        const expected = [
            // )|\\     ~67.291062¢
            {
                id: 146 as Id<PrimaryComma>,
                monzo: [-16, 11, 1, 0, 0, -1] as Monzo<{ rational: true }>,
            } as PrimaryComma,
            undefined,
        ]
        expect(actual).toEqual(expected)
    })
})
