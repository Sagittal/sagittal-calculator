import { Direction, RationalMonzo } from "../../../../../../src/general/math"
import { TwoThreeFreeClass } from "../../../../../../src/general/music"
import { computeN2D3P9, N2D3P9 } from "../../../../../../src/sagittal/ji/twoThreeFreeClass/n2d3p9"

describe("computeN2D3P9", (): void => {
    it("returns an approximate rank of the 2,3-free class's popularity", (): void => {
        const twoThreeFreeClass = { monzo: [0, 0, 1, 0, 1] } as TwoThreeFreeClass // 55/1

        const actual = computeN2D3P9(twoThreeFreeClass)

        const expected = 16.805556 as N2D3P9
        expect(actual).toBeCloseToTyped(expected)
    })

    it("yet another example", (): void => {
        const twoThreeFreeClass = { monzo: [0, 0, 2, 2] } as TwoThreeFreeClass  // 1225/1

        const actual = computeN2D3P9(twoThreeFreeClass)

        const expected = 59.548611 as N2D3P9
        expect(actual).toBeCloseToTyped(expected)
    })

    it("yet another 'nother example", (): void => {
        const twoThreeFreeClass = { monzo: [0, 0, 0, 0, -1, 0, 0, 0, 1] } as TwoThreeFreeClass  // 23/11

        const actual = computeN2D3P9(twoThreeFreeClass)

        const expected = 107.759259 as N2D3P9
        expect(actual).toBeCloseToTyped(expected)
    })

    it("errors if given a malformed 2,3-free class, which is not actually 2,3-free", (): void => {
        const twoThreeFreeClass = { monzo: [-4, -1, 1, 0, 1] } as TwoThreeFreeClass // 55/48

        expect((): void => {
            computeN2D3P9(twoThreeFreeClass)
        })
            .toThrowError("N2D3P9 must be given a 2,3-free class (5-rough, n ≥ d); received monzo [  -4  -1   1   0   1 ⟩")
    })

    it("errors if given a malformed 2,3-free class, for which the quotient is not super (n ≥ d)", (): void => {
        const twoThreeFreeClass = { monzo: [0, 0, 0, 0, -2] } as TwoThreeFreeClass  // 1/121

        expect((): void => {
            computeN2D3P9(twoThreeFreeClass)
        })
            .toThrowError("N2D3P9 must be given a 2,3-free class (5-rough, n ≥ d); received monzo [   0   0   0   0  -2 ⟩")
    })

    it("can handle 1/1, the empty 2,3-free class", (): void => {
        const twoThreeFreeClass = {
            monzo: [] as unknown[] as RationalMonzo<{ direction: Direction.SUPER, rough: 5 }>   // 1/1
        } as TwoThreeFreeClass

        const actual = computeN2D3P9(twoThreeFreeClass)

        const expected = 1 as N2D3P9
        expect(actual).toBeCloseToTyped(expected)
    })

    it("in case it receives a non-trimmed monzo, doesn't break", (): void => {
        const twoThreeFreeClass = { monzo: [0, 0, 0, 0] } as TwoThreeFreeClass      // 1/1

        const actual = computeN2D3P9(twoThreeFreeClass)

        const expected = 1 as N2D3P9
        expect(actual).toBeCloseToTyped(expected)
    })
})
