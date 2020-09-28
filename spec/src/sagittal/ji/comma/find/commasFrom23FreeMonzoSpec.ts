import { Abs, Comma, Decimal, Exponent, Integer, Max, Min, Num, Prime, RationalMonzo } from "../../../../../../src/general"
import { ApotomeSlope, computeCommasFrom23FreeMonzo, N2D3P9 } from "../../../../../../src/sagittal"

describe("computeCommasFrom23FreeMonzo", (): void => {
    const twoThreeFreeMonzo: RationalMonzo<{ rough: 5 }> = [0, 0, 3, 5, -1] as RationalMonzo<{ rough: 5 }>
    const lowerBound = { decimal: 1.023374 as Decimal } as Min<Num>
    const upperBound = { decimal: 1.023433 as Decimal } as Max<Num>
    const maxAte = 12 as Max<Abs<Integer & Exponent<3 & Prime>>>
    const maxN2D3P9 = 40000 as Max<N2D3P9>

    it("returns commas with the prime content from the two-three-free monzo", (): void => {
        const actual = computeCommasFrom23FreeMonzo(twoThreeFreeMonzo, {
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

            const resultWithHighMaxAas = computeCommasFrom23FreeMonzo(twoThreeFreeMonzo, {
                lowerBound,
                upperBound,
                maxAte,
                maxAas: highMaxAas,
                maxN2D3P9,
            })

            const expected = [{ monzo: [-8, -6, 3, 5, -1] as RationalMonzo } as Comma]
            expect(resultWithHighMaxAas).toEqual(expected)

            const resultWithLowMaxAas = computeCommasFrom23FreeMonzo(twoThreeFreeMonzo, {
                lowerBound,
                upperBound,
                maxAte,
                maxAas: lowMaxAas,
            })

            expect(resultWithLowMaxAas).toEqual(jasmine.arrayWithExactContents([]))
        })
    })

    it("trims the monzo if necessary", (): void => {
        const twoThreeFreeMonzo: RationalMonzo<{ rough: 5 }> = [0, 0, 0] as RationalMonzo<{ rough: 5 }>
        const lowerBound = { decimal: 1 as Decimal } as Min<Num>
        const upperBound = { decimal: 1 as Decimal } as Max<Num>

        const actual = computeCommasFrom23FreeMonzo(twoThreeFreeMonzo, {
            lowerBound,
            upperBound,
            maxAte,
            maxN2D3P9,
        })

        const expected = [{ monzo: [] as unknown[] as RationalMonzo } as Comma]
        expect(actual).toEqual(expected)
    })
})
