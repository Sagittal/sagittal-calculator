import { Max, Min, Monzo, Sopfr } from "../../../../../src/general/math"
import { Cents, Comma, Pitch } from "../../../../../src/general/music"
import { computeCommas } from "../../../../../src/scripts/jiPitch/findCommas"

describe("computeCommas", (): void => {
    const max23FreeSopfr = 7 as Max<Sopfr<{ rough: 5 }>>

    it("throws an error if the min and max cents are on the wrong side of each other, or equal", (): void => {
        expect((): void => {
            computeCommas({
                max23FreeSopfr,
                lowerBound: { cents: 50 as Cents } as Min<Pitch>,
                upperBound: { cents: 10 as Cents } as Max<Pitch>,
            })
        }).toThrowError("Lower bound is not less than upper bound; range was 50.000¢ - 10.000¢.")
        expect((): void => {
            computeCommas({
                max23FreeSopfr,
                lowerBound: { cents: 50 as Cents } as Min<Pitch>,
                upperBound: { cents: 50 as Cents } as Max<Pitch>,
            })
        }).toThrowError("Lower bound is not less than upper bound; range was 50.000¢ - 50.000¢.")
    })

    it(
        "throws an error if the min or max cents are outside than the abs value of the max size category bound",
        (): void => {
            expect((): void => {
                computeCommas({
                    max23FreeSopfr,
                    lowerBound: { cents: -300 as Cents } as Min<Pitch>,
                })
            }).toThrowError("Search range must be within comma size category bounds (±227.370¢); range was -300.000¢ - 56.843¢.")
            expect((): void => {
                computeCommas({
                    max23FreeSopfr,
                    lowerBound: { cents: -400 as Cents } as Min<Pitch>,
                    upperBound: { cents: -300 as Cents } as Max<Pitch>,
                })
            }).toThrowError("Search range must be within comma size category bounds (±227.370¢); range was -400.000¢ - -300.000¢.")
            expect((): void => {
                computeCommas({
                    max23FreeSopfr,
                    lowerBound: { cents: 300 as Cents } as Min<Pitch>,
                    upperBound: { cents: 400 as Cents } as Max<Pitch>,
                })
            }).toThrowError("Search range must be within comma size category bounds (±227.370¢); range was 300.000¢ - 400.000¢.")
            expect((): void => {
                computeCommas({
                    max23FreeSopfr,
                    upperBound: { cents: 300 as Cents } as Max<Pitch>,
                })
            }).toThrowError("Search range must be within comma size category bounds (±227.370¢); range was 0.000¢ - 300.000¢.")
        },
    )

    it("returns commas if the min and max cents are within the abs value of the max size category bound", (): void => {
        const lowerBound = { cents: 15 as Cents } as Min<Pitch>
        const upperBound = { cents: 30 as Cents } as Max<Pitch>

        const actual = computeCommas({ lowerBound, upperBound, max23FreeSopfr })

        const expected: Comma[] = [
            { monzo: [-4, 4, -1] as Monzo },
            { monzo: [6, -2, 0, -1] as Monzo },
            { monzo: [-19, 12] as Monzo },
        ] as Comma[]
        expect(actual).toEqual(expected)
    })
})
