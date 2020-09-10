import { Cents, Monzo, Prime, Ratio, Sopfr } from "../../../../src/general"
import { AnalyzedRationalPitch, ApotomeSlope, N2D3P9, TwoThreeFreeClass } from "../../../../src/sagittal"
import { analyzeRationalPitch } from "../../../../src/sagittal/comma"

describe("analyzeRationalPitch", () => {
    it("returns a bundle of analyzed properties of a comma, given its monzo", () => {
        const rationalPitch = { monzo: [-7, -6, 3, 5, -1] as Monzo }

        const actual = analyzeRationalPitch(rationalPitch)

        const expected = {
            cents: 1240.02272638304789 as Cents,
            monzo: [-7, -6, 3, 5, -1] as Monzo,
            ratio: [2100875, 1026432] as Ratio,
            limit: 11 as Prime,
            apotomeSlope: -82.35271691215704 as ApotomeSlope,
            twoThreeFreeClass: { monzo: [0, 0, 3, 5, -1] } as TwoThreeFreeClass,
            twoThreeFreeSopfr: 61 as Sopfr<5>,
            n2d3p9: 36777.470341435175 as N2D3P9,
        } as AnalyzedRationalPitch
        expect(actual).toEqual(expected)
    })
})
