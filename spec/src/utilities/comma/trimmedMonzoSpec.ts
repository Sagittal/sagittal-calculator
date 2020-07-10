import {computeTrimmedMonzo} from "../../../../src/utilities/comma/trimmedMonzo"

describe("computeTrimmedMonzo", () => {
    it("removes trailing zeroes from the monzo", () => {
        const monzo = [4, -5, 0, 0, 0]

        const result = computeTrimmedMonzo(monzo)

        expect(result).toEqual([4, -5])
    })

    it("does not mutate the original monzo", () => {
        const monzo = [4, -5, 0, 0, 0]

        computeTrimmedMonzo(monzo)

        expect(monzo).toEqual([4, -5, 0, 0, 0])
    })
})
