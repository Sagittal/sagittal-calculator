import { computeNeighborPositions } from "../../../../src/notations/ji/neighborPositions"
import { Cents } from "../../../../src/utilities/types"

describe("computeNeighborPositions", () => {
    it("returns the two positions in the list of sorted targets which are on either side of the position", () => {
        const position: Cents = 0.433 as Cents
        const targetPositions: Cents[] = [
            0.00,
            0.10,
            0.50,
            0.66,
        ] as Cents[]

        const result = computeNeighborPositions(position, targetPositions)

        expect(result).toEqual([
            0.10,
            0.50,
        ] as [Cents, Cents])
    })
})
