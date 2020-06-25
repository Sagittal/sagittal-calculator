const {presentMonzo} = require("../../../../../src/utilities/comma/present/monzo")

describe("presentMonzo", () => {
    it("formats it correctly", () => {
        const monzo = [-8, -6, 3, 5, -1]

        const result = presentMonzo(monzo)

        expect(result).toBe(`[ -8 -6 3 5 -1 ⟩`)
    })

    it("can format it using George Secor's punctuated format", () => {
        const monzo = [-8, -6, 3, 5, -1, 0, 0, 0, 5, 4, 2, 3]

        const result = presentMonzo(monzo, {punctuated: true})

        expect(result).toBe(`[ -8 -6, 3 5 -1, 0 0 0, 5 4 2, 3 ⟩`)
    })
})
