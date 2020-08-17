import { computeN2D3P9, Monzo, N2D3P9 } from "../../../../src/general/music"

describe("computeN2d3p9", () => {
    it("returns an approximate rank of the ratio's notational popularity", () => {
        const monzo: Monzo = [0, 0, 1, 0, 1] as Monzo // 55/1

        const result = computeN2D3P9(monzo)

        expect(result).toBe(16.805555555555557 as N2D3P9)
    })

    it("flips the ratio so that n ≥ d after 5-roughening", () => {
        const monzo: Monzo = [0, 0, 0, 0, -2] as Monzo // 1/121

        const result = computeN2D3P9(monzo)

        expect(result).toBe(36.97222222222222 as N2D3P9)
    })

    it("another example to prove the n ≥ d point", () => {
        const monzo: Monzo = [0, 0, 0, 0, 2] as Monzo // 121/1

        const result = computeN2D3P9(monzo)

        expect(result).toBe(36.97222222222222 as N2D3P9)
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
})
