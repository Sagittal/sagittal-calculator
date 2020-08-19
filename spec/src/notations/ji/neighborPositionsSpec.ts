import { Cents } from "../../../../src/general"
import { computeNeighborPositions } from "../../../../src/notations/ji/neighborPositions"

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
        ] as [Cents | undefined, Cents | undefined])
    })

    it("returns a position as undefined if there is no target on one side of the position", () => {
        const position: Cents = 0.7 as Cents
        const targetPositions: Cents[] = [
            0.00,
            0.10,
            0.50,
            0.66,
        ] as Cents[]

        const result = computeNeighborPositions(position, targetPositions)

        expect(result).toEqual([
            0.66,
            undefined,
        ] as [Cents | undefined, Cents | undefined])
    })
})
