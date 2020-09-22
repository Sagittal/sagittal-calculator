import { Max, Min, Monzo, Sopfr } from "../../../../../src/general/math"
import { Cents, Comma } from "../../../../../src/general/music"
import { computeCommas } from "../../../../../src/scripts/jiPitch/findCommas"

describe("computeCommas", (): void => {
    const max23FreeSopfr = 7 as Max<Sopfr<{ rough: 5 }>>

    it("throws an error if the min and max cents are on the wrong side of each other, or equal", (): void => {
        expect((): void => {
            computeCommas({
                max23FreeSopfr,
                minCents: 50 as Min<Cents>,
                maxCents: 10 as Max<Cents>,
            })
        }).toThrowError("Min cents is not less than max cents; range was 50.000 - 10.000.")
        expect((): void => {
            computeCommas({
                max23FreeSopfr,
                minCents: 50 as Min<Cents>,
                maxCents: 50 as Max<Cents>,
            })
        }).toThrowError("Min cents is not less than max cents; range was 50.000 - 50.000.")
    })

    it(
        "throws an error if the min or max cents are outside than the abs value of the max size category bound",
        (): void => {
            expect((): void => {
                computeCommas({
                    max23FreeSopfr,
                    minCents: -300 as Min<Cents>,
                })
            }).toThrowError("Cents range must be within comma size category bounds (±227.370¢); range was -300.000 - 56.843.")
            expect((): void => {
                computeCommas({
                    max23FreeSopfr,
                    minCents: -400 as Min<Cents>,
                    maxCents: -300 as Max<Cents>,
                })
            }).toThrowError("Cents range must be within comma size category bounds (±227.370¢); range was -400.000 - -300.000.")
            expect((): void => {
                computeCommas({
                    max23FreeSopfr,
                    minCents: 300 as Min<Cents>,
                    maxCents: 400 as Max<Cents>,
                })
            }).toThrowError("Cents range must be within comma size category bounds (±227.370¢); range was 300.000 - 400.000.")
            expect((): void => {
                computeCommas({
                    max23FreeSopfr,
                    maxCents: 300 as Max<Cents>,
                })
            }).toThrowError("Cents range must be within comma size category bounds (±227.370¢); range was 0.000 - 300.000.")
        },
    )

    it("returns commas if the min and max cents are within the abs value of the max size category bound", (): void => {
        const minCents = 15 as Min<Cents>
        const maxCents = 30 as Max<Cents>

        const actual = computeCommas({ minCents, maxCents, max23FreeSopfr })

        const expected: Comma[] = [
            { monzo: [-4, 4, -1] as Monzo },
            { monzo: [6, -2, 0, -1] as Monzo },
            { monzo: [-19, 12] as Monzo },
        ] as Comma[]
        expect(actual).toEqual(expected)
    })
})
