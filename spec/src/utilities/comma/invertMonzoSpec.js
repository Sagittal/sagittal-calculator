const {invertMonzo} = require("../../../../src/utilities/comma/invertMonzo")

describe("invertMonzo", () => {
    it("returns the inverted (negated) version of the monzo", () => {
        const monzo = [4, -3, -1, 1]

        const result = invertMonzo(monzo)

        expect(result).toEqual([-4, 3, 1, -1])
    })
})
