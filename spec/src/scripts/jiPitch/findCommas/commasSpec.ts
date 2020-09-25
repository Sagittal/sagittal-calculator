import { Decimal, Max, Min, Monzo, Sopfr } from "../../../../../src/general/math"
import { Comma, Pitch } from "../../../../../src/general/music"
import { computeCommas } from "../../../../../src/scripts/jiPitch/findCommas"

describe("computeCommas", (): void => {
    const max23FreeSopfr = 7 as Max<Sopfr<{ rough: 5 }>>

    it("throws an error if the bounds are on the wrong side of each other, or equal", (): void => {
        expect((): void => {
            computeCommas({
                max23FreeSopfr,
                lowerBound: { decimal: 1.02930223664 as Decimal } as Min<Pitch>,
                upperBound: { decimal: 1.00579294107 as Decimal } as Max<Pitch>,
            })
        }).toThrowError("Lower bound is not less than upper bound; range was 50.000¢ - 10.000¢.")
        expect((): void => {
            computeCommas({
                max23FreeSopfr,
                lowerBound: { decimal: 1.02930223664 as Decimal } as Min<Pitch>,
                upperBound: { decimal: 1.02930223664 as Decimal } as Max<Pitch>,
            })
        }).toThrowError("Lower bound is not less than upper bound; range was 50.000¢ - 50.000¢.")
    })

    it(
        "throws an error if the bounds are outside than the abs value of the max size category bound",
        (): void => {
            expect((): void => {
                computeCommas({
                    max23FreeSopfr,
                    lowerBound: { decimal: 0.84089641525 as Decimal } as Min<Pitch>,
                })
            }).toThrowError("Search range must be within comma size category bounds (±227.370¢); range was -300.000¢ - 56.843¢.")
            expect((): void => {
                computeCommas({
                    max23FreeSopfr,
                    lowerBound: { decimal: 0.79370052598 as Decimal } as Min<Pitch>,
                    upperBound: { decimal: 0.84089641525 as Decimal } as Max<Pitch>,
                })
            }).toThrowError("Search range must be within comma size category bounds (±227.370¢); range was -400.000¢ - -300.000¢.")
            expect((): void => {
                computeCommas({
                    max23FreeSopfr,
                    lowerBound: { decimal: 1.189207115 as Decimal } as Min<Pitch>,
                    upperBound: { decimal: 1.25992104989 as Decimal } as Max<Pitch>,
                })
            }).toThrowError("Search range must be within comma size category bounds (±227.370¢); range was 300.000¢ - 400.000¢.")
            expect((): void => {
                computeCommas({
                    max23FreeSopfr,
                    upperBound: { decimal: 1.189207115 as Decimal } as Max<Pitch>,
                })
            }).toThrowError("Search range must be within comma size category bounds (±227.370¢); range was 0.000¢ - 300.000¢.")
        },
    )

    it("returns commas if the bounds are within the abs value of the max size category bound", (): void => {
        const lowerBound = { decimal: 1.00870198379 as Decimal } as Min<Pitch>
        const upperBound = { decimal: 1.0174796921 as Decimal } as Max<Pitch>

        const actual = computeCommas({ lowerBound, upperBound, max23FreeSopfr })

        const expected: Comma[] = [
            { monzo: [-4, 4, -1] as Monzo },
            { monzo: [6, -2, 0, -1] as Monzo },
            { monzo: [-19, 12] as Monzo },
        ] as Comma[]
        expect(actual).toEqual(expected)
    })
})
