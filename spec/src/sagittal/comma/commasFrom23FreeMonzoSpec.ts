import { Abs, Cents, Exponent, Integer, Max, Min, Monzo, Prime } from "../../../../src/general"
import { ApotomeSlope, computeCommasFrom23FreeMonzo, N2D3P9 } from "../../../../src/sagittal"

describe("computeCommasFrom23FreeMonzo", () => {
    const twoThreeFreeMonzo: Monzo<{ rough: 5 }> = [0, 0, 3, 5, -1] as Monzo<{ rough: 5 }>
    const minCents = 40 as Min<Cents>
    const maxCents = 40.1 as Max<Cents>
    const maxAbsolute3Exponent = 12 as Max<Abs<Integer & Exponent<Prime>>>
    const maxN2D3P9 = 40000 as Max<N2D3P9>

    it("returns commas with the prime content from the two-three-free monzo", () => {
        const actual = computeCommasFrom23FreeMonzo(twoThreeFreeMonzo, {
            minCents,
            maxCents,
            maxAbsolute3Exponent,
            maxN2D3P9,
        })

        const expected = [{ monzo: [-8, -6, 3, 5, -1] as Monzo<{ comma: true }> }]
        expect(actual).toEqual(expected)
    })

    describe("max apotome slope", () => {
        it("does not include commas with apotome slope greater than it", () => {
            const highMaxAbsoluteApotomeSlope = 10 as Max<Abs<ApotomeSlope>>
            const lowMaxAbsoluteApotomeSlope = 8 as Max<Abs<ApotomeSlope>>

            const resultWithHighMaxAbsoluteApotomeSlope = computeCommasFrom23FreeMonzo(twoThreeFreeMonzo, {
                minCents,
                maxCents,
                maxAbsolute3Exponent,
                maxAbsoluteApotomeSlope: highMaxAbsoluteApotomeSlope,
                maxN2D3P9,
            })

            const expected = [{ monzo: [-8, -6, 3, 5, -1] as Monzo<{ comma: true }> }]
            expect(resultWithHighMaxAbsoluteApotomeSlope).toEqual(expected)

            const resultWithLowMaxAbsoluteApotomeSlope = computeCommasFrom23FreeMonzo(twoThreeFreeMonzo, {
                minCents,
                maxCents,
                maxAbsolute3Exponent,
                maxAbsoluteApotomeSlope: lowMaxAbsoluteApotomeSlope,
            })

            expect(resultWithLowMaxAbsoluteApotomeSlope).toEqual(jasmine.arrayWithExactContents([]))
        })
    })
})