import { Monzo } from "../../../../../../src/general/math/monzo"
import { TwoThreeFreeClass } from "../../../../../../src/sagittal/comma"
import { computeN2D3P9, N2D3P9 } from "../../../../../../src/sagittal/comma/evaluation/n2d3p9"

describe("computeN2D3P9", () => {
    it("returns an approximate rank of the 2,3-free class's popularity", () => {
        const twoThreeFreeClass: TwoThreeFreeClass = [55, 1] as TwoThreeFreeClass

        const actual = computeN2D3P9(twoThreeFreeClass)

        const expected = 16.805556 as N2D3P9
        expect(actual).toBe(expected)
    })

    it("yet another example", () => {
        const twoThreeFreeClass: TwoThreeFreeClass = [1225, 1] as TwoThreeFreeClass //

        const actual = computeN2D3P9(twoThreeFreeClass)

        const expected = 59.548611 as N2D3P9
        expect(actual).toBe(expected)
    })

    it("yet another 'nother example", () => {
        const twoThreeFreeClass: TwoThreeFreeClass = [23, 11] as TwoThreeFreeClass

        const actual = computeN2D3P9(twoThreeFreeClass)

        const expected = 107.759259 as N2D3P9
        expect(actual).toBe(expected)
    })

    it("errors if given a malformed 2,3-free class, which is not actually 2,3-free", () => {
        const twoThreeFreeClass: TwoThreeFreeClass = [55, 48] as TwoThreeFreeClass

        expect(() => computeN2D3P9(twoThreeFreeClass)).toThrowError("N2D3P9 must be given a 2,3-free class (5-rough, n ≥ d); received monzo [  -4  -1   1   0   1 ⟩")
    })

    it("errors if given a malformed 2,3-free class, for which the ratio is not super (n ≥ d)", () => {
        const twoThreeFreeClass: TwoThreeFreeClass = [1, 121] as TwoThreeFreeClass

        expect(() => computeN2D3P9(twoThreeFreeClass)).toThrowError("N2D3P9 must be given a 2,3-free class (5-rough, n ≥ d); received monzo [   0   0   0   0  -2 ⟩")
    })

    it("can handle 1/1, the empty 2,3-free class", () => {
        const twoThreeFreeClass: TwoThreeFreeClass = [1, 1] as TwoThreeFreeClass

        const actual = computeN2D3P9(twoThreeFreeClass)

        const expected = 1 as N2D3P9
        expect(actual).toBe(expected)
    })

    it("can accept monzos as well", () => {
        const monzo: Monzo = [0, 0, 2, 2] as Monzo // 1225/1

        const actual = computeN2D3P9(monzo)

        const expected = 59.548611 as N2D3P9
        expect(actual).toBe(expected)
    })

    it("in case it receives a non-trimmed monzo, doesn't break", () => {
        const monzo: Monzo = [0, 0, 0, 0] as Monzo

        const actual = computeN2D3P9(monzo)

        const expected = 1 as N2D3P9
        expect(actual).toBe(expected)
    })
})
