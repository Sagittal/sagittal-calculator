import { Cents, Index } from "../../../../../src/general"
import { computeNeighborPositionIndices } from "../../../../../src/sagittal/notations/ji/neighborPositionIndices"

describe("computeNeighborPositionIndices", () => {
    it(
        `returns the indices of the positions in the list of sorted targets which are on either side of the position`,
        () => {
            const position: Cents = 0.433 as Cents
            const sortedTargetPositions: Cents[] = [
                0.00,
                0.10,
                0.50,
                0.66,
            ] as Cents[]

            const actual = computeNeighborPositionIndices(position, sortedTargetPositions)

            const expected = [
                1 as Index<Cents>,
                2 as Index<Cents>,
            ]
            expect(actual).toEqual(expected)
        },
    )
})
