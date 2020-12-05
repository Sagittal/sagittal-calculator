import {Comma, computeScamonFromDecimal, Max, Min, Monzo, Prime, Scamon, Sopfr} from "@sagittal/general"
import {findCommas} from "../../../../../src/scripts/jiPitch/findCommas"

describe("findCommas", (): void => {
    const max23FreeSopfr = 7 as Max<Sopfr<{rough: 5}>>

    it("throws an error if the bounds are on the wrong side of each other, or equal", (): void => {
        expect((): void => {
            findCommas({
                max23FreeSopfr,
                zone: {
                    extrema: [
                        computeScamonFromDecimal(1.02930223664) as Min<Scamon>,
                        computeScamonFromDecimal(1.00579294107) as Max<Scamon>,
                    ],
                },
            })
        }).toThrowError("Lower bound is not less than upper bound; range was 50.000¢ - 10.000¢.")
        expect((): void => {
            findCommas({
                max23FreeSopfr,
                zone: {
                    extrema: [
                        computeScamonFromDecimal(1.02930223664) as Min<Scamon>,
                        computeScamonFromDecimal(1.02930223664) as Max<Scamon>,
                    ],
                },
            })
        }).toThrowError("Lower bound is not less than upper bound; range was 50.000¢ - 50.000¢.")
    })

    it("throws an error if the bounds are outside than the abs value of the max size category bound", (): void => {
        expect((): void => {
            findCommas({
                max23FreeSopfr,
                zone: {
                    extrema: [
                        computeScamonFromDecimal(0.84089641525) as Min<Scamon>,
                        undefined,
                    ],
                },
            })
        })
            .toThrowError("Search range must be within comma size category bounds (±227.370¢); range was -300.000¢ - [ -11   7 ⟩(1/2).")
        expect((): void => {
            findCommas({
                max23FreeSopfr,
                zone: {
                    extrema: [
                        computeScamonFromDecimal(0.79370052598) as Min<Scamon>,
                        computeScamonFromDecimal(0.84089641525) as Max<Scamon>,
                    ],
                },
            })
        })
            .toThrowError("Search range must be within comma size category bounds (±227.370¢); range was -400.000¢ - -300.000¢.")
        expect((): void => {
            findCommas({
                max23FreeSopfr,
                zone: {
                    extrema: [
                        computeScamonFromDecimal(1.189207115) as Min<Scamon>,
                        computeScamonFromDecimal(1.25992104989) as Max<Scamon>,
                    ],
                },
            })
        })
            .toThrowError("Search range must be within comma size category bounds (±227.370¢); range was 300.000¢ - 400.000¢.")
        expect((): void => {
            findCommas({
                max23FreeSopfr,
                zone: {
                    extrema: [
                        undefined,
                        computeScamonFromDecimal(1.189207115) as Max<Scamon>,
                    ],
                },
            })
        })
            .toThrowError("Search range must be within comma size category bounds (±227.370¢); range was [  ⟩ - 300.000¢.")
    })

    it("returns commas if the bounds are within the abs value of the max size category bound (and the max N2D3P9 is less than the maximum N2D3P9 for which numerators are known)", (): void => {
        const lowerBound = computeScamonFromDecimal(1.00870198379) as Min<Scamon>
        const upperBound = computeScamonFromDecimal(1.0174796921) as Max<Scamon>

        const actual = findCommas({zone: {extrema: [lowerBound, upperBound]}, max23FreeSopfr})

        const expected: Comma[] = [
            {monzo: [-4, 4, -1]},
            {monzo: [6, -2, 0, -1]},
            {monzo: [-19, 12]},
            {monzo: [-34, 20, 1]},
        ] as Comma[]
        expect(actual).toBeArrayWithDeepEqualContents(expected)
    })

    it("excludes 3-limit commas when the max prime limit is 2", (): void => {
        const maxPrimeLimit = 2 as Max<Max<Prime>>

        const actual = findCommas({maxPrimeLimit})

        const expected: Comma[] = [
            {monzo: [] as unknown[] as Monzo<{rational: true}>},
        ] as Comma[]
        expect(actual).toBeArrayWithDeepEqualContents(expected)
    })
})
