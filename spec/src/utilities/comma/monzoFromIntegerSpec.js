const {computeMonzoFromInteger} = require("../../../../src/utilities/comma/monzoFromInteger")

describe("computeMonzoFromInteger", () => {
    it("prime factorizes the integer into a monzo", () => {
        const integer = 44

        const result = computeMonzoFromInteger(integer)

        expect(result).toEqual([2, 0, 0, 0, 1])
    })
})
