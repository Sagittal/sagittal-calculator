import {
    Abs,
    Comma,
    computeScamonFromDecimal,
    Decimal,
    Max,
    Min,
    Monzo,
    Prime,
    Scamon,
} from "../../../../../src/general"
import {ApotomeSlope, Ate, computeCommasFrom23FreeRationalMonzo, N2D3P9} from "../../../../../src/sagittal"

describe("computeCommasFrom23FreeRationalMonzo", (): void => {
    const two3FreeRationalMonzo = [0, 0, 3, 5, -1] as Monzo<{rational: true, rough: 5}>
    const lowerBound = computeScamonFromDecimal(1.023374 as Decimal) as Min<Scamon>
    const upperBound = computeScamonFromDecimal(1.023433 as Decimal) as Max<Scamon>
    const maxAte = 12 as Max<Ate>
    const maxN2D3P9 = 40000 as Max<N2D3P9>

    it("returns commas with the prime content from the 2,3-free rational monzo", (): void => {
        const actual = computeCommasFrom23FreeRationalMonzo(two3FreeRationalMonzo, {
            lowerBound,
            upperBound,
            maxAte,
            maxN2D3P9,
        })

        const expected = [{monzo: [-8, -6, 3, 5, -1]} as Comma]
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

            const expected = [{monzo: [-8, -6, 3, 5, -1]} as Comma]
            expect(resultWithHighMaxAas).toEqual(expected)

            const resultWithLowMaxAas = computeCommasFrom23FreeRationalMonzo(two3FreeRationalMonzo, {
                lowerBound,
                upperBound,
                maxAte,
                maxAas: lowMaxAas,
            })

            expect(resultWithLowMaxAas).toEqual([])
        })
    })

    it("trims the monzo if necessary", (): void => {
        const two3FreeRationalMonzo = [0, 0, 0] as Monzo<{rational: true, rough: 5}>
        const lowerBound = computeScamonFromDecimal(1 as Decimal) as Min<Scamon>
        const upperBound = computeScamonFromDecimal(1 as Decimal) as Max<Scamon>

        const actual = computeCommasFrom23FreeRationalMonzo(two3FreeRationalMonzo, {
            lowerBound,
            upperBound,
            maxAte,
            maxN2D3P9,
        })

        const expected = [{monzo: [] as unknown[]} as Comma]
        expect(actual).toEqual(expected)
    })

    it("following the trail of this edge case", (): void => {
        const two3FreeRationalMonzo = [0, 0, -1, 1, 1, 0, 0, 0, 0, 0, 0, -1] as Monzo<{rational: true, rough: 5}>

        const actual = computeCommasFrom23FreeRationalMonzo(two3FreeRationalMonzo)

        const expected = [
            {monzo: [-13, 9, -1, 1, 1, 0, 0, 0, 0, 0, 0, -1]},
        ] as Comma[]
        expect(actual).toEqual(expected)
    })

    it("excludes commas that are beyond the prime limit (I think only important when it is 2)", (): void => {
        const two3FreeRationalMonzo = [] as unknown[] as Monzo<{rational: true, rough: 5}>
        const maxPrimeLimit = 2 as Max<Max<Prime>>

        const actual = computeCommasFrom23FreeRationalMonzo(two3FreeRationalMonzo, {maxPrimeLimit})

        const expected = [
            {monzo: [] as unknown[] as Monzo<{rational: true}>},
        ] as Comma[]
        expect(actual).toEqual(expected)
    })
})
