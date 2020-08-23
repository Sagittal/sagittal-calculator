import { Monzo } from "../../../../../src/general"
import { computeN2D3P9, N2D3P9 } from "../../../../../src/general/music/n2d3p9"

describe("computeN2d3p9", () => {
    it("returns an approximate rank of the ratio's notational popularity", () => {
        const monzo: Monzo = [0, 0, 1, 0, 1] as Monzo // 55/1

        const result = computeN2D3P9(monzo)

        expect(result).toBe(16.805555555555557 as N2D3P9)
    })

    it("yet another example", () => {
        const monzo: Monzo = [0, 0, 2, 2] as Monzo // 1225/1

        const result = computeN2D3P9(monzo)

        expect(result).toBe(59.548611111111114 as N2D3P9)
    })

    it("yet another 'nother example", () => {
        const monzo: Monzo = [0, 0, 0, 0, -1, 0, 0, 0, 1] as Monzo // 23/11

        const result = computeN2D3P9(monzo)

        expect(result).toBe(107.75925925925925 as N2D3P9)
    })

    it("errors if given a monzo which is not 5-rough", () => {
        const monzo: Monzo = [-4, -1, 1, 0, 1] as Monzo // 55/48

        expect(() => computeN2D3P9(monzo)).toThrowError("N2D3P9 must be given a 5-roughened monzo; received [ -4 -1 1 0 1 ⟩")
    })

    it("errors if given a monzo for which the ratio is not superunison (n ≥ d)", () => {
        const monzo: Monzo = [0, 0, 0, 0, -2] as Monzo // 1/121

        expect(() => computeN2D3P9(monzo)).toThrowError("N2D3P9 must be given a superunison (n ≥ d) monzo; received [ 0 0 0 0 -2 ⟩")
    })

    it("can handle 1/1, the empty monzo", () => {
        const monzo: Monzo = [] as Monzo // 1/1

        const result = computeN2D3P9(monzo)

        expect(result).toBe(1 as N2D3P9)
    })
})
