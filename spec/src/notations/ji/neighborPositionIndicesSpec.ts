import { computeNeighborPositionIndices } from "../../../../src/notations/ji/neighborPositionIndices"
import { Cents } from "../../../../src/utilities/types"

describe("computeNeighborPositionIndices", () => {
    it("returns the indices of the positions in the list of sorted targets which are on either side of the position", () => {
        const position: Cents = 0.433 as Cents
        const sortedTargets: Cents[] = [
            0.00,
            0.10,
            0.50,
            0.66,
        ] as Cents[]

        const result = computeNeighborPositionIndices(position, sortedTargets)

        expect(result).toEqual([
            1,
            2,
        ])
    })
})
