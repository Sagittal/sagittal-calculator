import { Abs, Cents, Comma, Exponent, Integer, Max, Min, Monzo, Prime } from "../../../../../src/general"
import { ApotomeSlope, computeCommasFrom23FreeMonzo, N2D3P9 } from "../../../../../src/sagittal"

describe("computeCommasFrom23FreeMonzo", (): void => {
    const twoThreeFreeMonzo: Monzo<{ rough: 5 }> = [0, 0, 3, 5, -1] as Monzo<{ rough: 5 }>
    const minCents = 40 as Min<Cents>
    const maxCents = 40.1 as Max<Cents>
    const maxAbs3Exponent = 12 as Max<Abs<3 & Integer & Exponent<Prime>>>
    const maxN2D3P9 = 40000 as Max<N2D3P9>

    it("returns commas with the prime content from the two-three-free monzo", (): void => {
        const actual = computeCommasFrom23FreeMonzo(twoThreeFreeMonzo, {
            minCents,
            maxCents,
            maxAbs3Exponent,
            maxN2D3P9,
        })

        const expected = [{ monzo: [-8, -6, 3, 5, -1] as Monzo } as Comma]
        expect(actual).toEqual(expected)
    })

    describe("max apotome slope", (): void => {
        it("does not include commas with apotome slope greater than it", (): void => {
            const highMaxAbsApotomeSlope = 10 as Max<Abs<ApotomeSlope>>
            const lowMaxAbsApotomeSlope = 8 as Max<Abs<ApotomeSlope>>

            const resultWithHighMaxAbsApotomeSlope = computeCommasFrom23FreeMonzo(twoThreeFreeMonzo, {
                minCents,
                maxCents,
                maxAbs3Exponent,
                maxAbsApotomeSlope: highMaxAbsApotomeSlope,
                maxN2D3P9,
            })

            const expected = [{ monzo: [-8, -6, 3, 5, -1] as Monzo } as Comma]
            expect(resultWithHighMaxAbsApotomeSlope).toEqual(expected)

            const resultWithLowMaxAbsApotomeSlope = computeCommasFrom23FreeMonzo(twoThreeFreeMonzo, {
                minCents,
                maxCents,
                maxAbs3Exponent,
                maxAbsApotomeSlope: lowMaxAbsApotomeSlope,
            })

            expect(resultWithLowMaxAbsApotomeSlope).toEqual(jasmine.arrayWithExactContents([]))
        })
    })
})
