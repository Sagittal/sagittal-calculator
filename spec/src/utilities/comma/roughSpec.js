const {computeRoughMonzo} = require("../../../../src/utilities/comma/rough")

describe("computeRoughMonzo", () => {
    it("roughens the monzo to the requested roughness", () => {
        const monzo = [5, 6, 1, 0, 3]
        const roughness = 5

        const result = computeRoughMonzo(monzo, roughness)

        expect(result).toEqual([0, 0, 1, 0, 3])
    })
})
