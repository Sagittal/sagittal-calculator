const {presentMonzo} = require("../../../../src/findCommas/present/monzo")

describe("presentMonzo", () => {
    it("formats it correctly", () => {
        const monzo = [-8, -6, 3, 5, -1]

        const result = presentMonzo(monzo)

        expect(result).toBe(`[-8 -6 3 5 -1⟩`)
    })
})
