import { Abs, Comma, Exponent, IntegerDecimal, Max, Min, Prime, RationalMonzo, Real, RealDecimal } from "../../../../../../src/general"
import { ApotomeSlope, computeCommasFrom23FreeRationalMonzo, N2D3P9 } from "../../../../../../src/sagittal"

describe("computeCommasFrom23FreeRationalMonzo", (): void => {
    const two3FreeRationalMonzo: RationalMonzo<{ rough: 5 }> = [0, 0, 3, 5, -1] as RationalMonzo<{ rough: 5 }>
    const lowerBound = { decimal: 1.023374 as RealDecimal } as Min<Real>
    const upperBound = { decimal: 1.023433 as RealDecimal } as Max<Real>
    const maxAte = 12 as Max<Abs<IntegerDecimal & Exponent<3 & Prime>>>
    const maxN2D3P9 = 40000 as Max<N2D3P9>

    it("returns commas with the prime content from the 2,3-free rational monzo", (): void => {
        const actual = computeCommasFrom23FreeRationalMonzo(two3FreeRationalMonzo, {
            lowerBound,
            upperBound,
            maxAte,
            maxN2D3P9,
        })

        const expected = [{ monzo: [-8, -6, 3, 5, -1] as RationalMonzo } as Comma]
        expect(actual).toEqual(expected)
    })

    describe("max AAS", (): void => {
        it("does not include commas with apotome slope greater than it", (): void => {
            const highMaxAas = 10 as Max<Abs<ApotomeSlope>>
            const lowMaxAas = 8 as Max<Abs<ApotomeSlope>>

            const resultWithHighMaxAas = computeCommasFrom23FreeRationalMonzo(two3FreeRationalMonzo, {
                lowerBound,
                upperBound,
                maxAte,
                maxAas: highMaxAas,
                maxN2D3P9,
            })

            const expected = [{ monzo: [-8, -6, 3, 5, -1] as RationalMonzo } as Comma]
            expect(resultWithHighMaxAas).toEqual(expected)

            const resultWithLowMaxAas = computeCommasFrom23FreeRationalMonzo(two3FreeRationalMonzo, {
                lowerBound,
                upperBound,
                maxAte,
                maxAas: lowMaxAas,
            })

            expect(resultWithLowMaxAas).toEqual(jasmine.arrayWithExactContents([]))
        })
    })

    it("trims the monzo if necessary", (): void => {
        const two3FreeRationalMonzo: RationalMonzo<{ rough: 5 }> = [0, 0, 0] as RationalMonzo<{ rough: 5 }>
        const lowerBound = { decimal: 1 as RealDecimal } as Min<Real>
        const upperBound = { decimal: 1 as RealDecimal } as Max<Real>

        const actual = computeCommasFrom23FreeRationalMonzo(two3FreeRationalMonzo, {
            lowerBound,
            upperBound,
            maxAte,
            maxN2D3P9,
        })

        const expected = [{ monzo: [] as unknown[] as RationalMonzo } as Comma]
        expect(actual).toEqual(expected)
    })
})
