import { Prime } from "../../../../src/general"
import { Monzo } from "../../../../src/general/music"
import { computeGpf } from "../../../../src/general/music/gpf"

describe("computeGpf", () => {
    it("returns the greatest prime factor (AKA prime limit) of the given monzo", () => {
        const monzo = [2, 3, 0, 0, 4] as Monzo

        const result = computeGpf(monzo)

        expect(result).toBe(11 as Prime)
    })

    it("works when a monzo has trailing zeroes", () => {
        const monzo = [2, 3, 4, 0, 0] as Monzo

        const result = computeGpf(monzo)

        expect(result).toBe(5 as Prime)
    })

    it("works for an empty monzo (AKA the ratio 1/1), giving the conventional value of 1", () => {
        const monzo = [] as Monzo

        const result = computeGpf(monzo)

        expect(result).toBe(1 as Prime)
    })
})
