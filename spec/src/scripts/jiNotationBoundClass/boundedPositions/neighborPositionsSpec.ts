import { Cents, computePitchFromCents } from "../../../../../src/general"
import { computeNeighborPositions } from "../../../../../src/scripts/jiNotationBoundClass/boundedPositions/neighborPositions"
import { NeighborPositions } from "../../../../../src/scripts/jiNotationBoundClass/boundedPositions/types"

describe("computeNeighborPositions", (): void => {
    it("returns the two positions in the list of sorted targets which are on either side of the position", (): void => {
        const position = computePitchFromCents(0.433 as Cents)
        const targetPositions = [
            0.00 as Cents,
            0.10 as Cents,
            0.50 as Cents,
            0.66 as Cents,
        ].map(computePitchFromCents)

        const actual = computeNeighborPositions(position, targetPositions)

        const expected = [
            computePitchFromCents(0.10 as Cents),
            computePitchFromCents(0.50 as Cents),
        ] as NeighborPositions
        expect(actual).toEqual(expected)
    })

    it("returns a position as undefined if there is no target on one side of the position", (): void => {
        const position = computePitchFromCents(0.7 as Cents)
        const targetPositions = [
            0.00 as Cents,
            0.10 as Cents,
            0.50 as Cents,
            0.66 as Cents,
        ].map(computePitchFromCents)

        const actual = computeNeighborPositions(position, targetPositions)

        const expected = [
            computePitchFromCents(0.66 as Cents),
            undefined,
        ] as NeighborPositions
        expect(actual).toEqual(expected)
    })
})
