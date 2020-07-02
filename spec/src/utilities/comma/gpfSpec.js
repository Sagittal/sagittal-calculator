const {computeGpf} = require("../../../../src/utilities/comma/gpf")

describe("computeGpf", () => {
    it("returns the greatest prime factor (AKA prime limit) of the given monzo", () => {
        const monzo = [2, 3, 0, 0, 4]

        const result = computeGpf(monzo)

        expect(result).toBe(11)
    })

    it("works when a monzo has trailing zeroes", () => {
        const monzo = [2, 3, 4, 0, 0]

        const result = computeGpf(monzo)

        expect(result).toBe(5)
    })

    it("works for an empty monzo (AKA the ratio 1/1), giving the conventional value of 1", () => {
        const monzo = []

        const result = computeGpf(monzo)

        expect(result).toBe(1)
    })
})
