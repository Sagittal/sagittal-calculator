const {computeReducedMonzo} = require("../../../../src/utilities/comma/reducedMonzo")

describe("reduceMonzo", () => {
    it("removes trailing zeroes from the monzo", () => {
        const monzo = [4, -5, 0, 0, 0]

        const result = computeReducedMonzo(monzo)

        expect(result).toEqual([4, -5])
    })

    it("does not mutate the original monzo", () => {
        const monzo = [4, -5, 0, 0, 0]

        computeReducedMonzo(monzo)

        expect(monzo).toEqual([4, -5, 0, 0, 0])
    })
})
