import { Cents, Monzo, Prime, Ratio, Sopfr, TwoThreeFreeClass } from "../../../../src/general"
import { AnalyzedJiPitch, ApotomeSlope, N2D3P9 } from "../../../../src/sagittal"
import { analyzeJiPitch } from "../../../../src/sagittal/comma"

describe("analyzeJiPitch", () => {
    it("returns a bundle of analyzed properties of a comma, given its monzo", () => {
        const jiPitch = { monzo: [-7, -6, 3, 5, -1] as Monzo }

        const actual = analyzeJiPitch(jiPitch)

        const expected = {
            cents: 1240.02272638304789 as Cents,
            monzo: [-7, -6, 3, 5, -1] as Monzo,
            ratio: [2100875, 1026432] as Ratio,
            limit: 11 as Prime,
            apotomeSlope: -82.35271691215704 as ApotomeSlope,
            twoThreeFreeClass: { monzo: [0, 0, 3, 5, -1] } as TwoThreeFreeClass,
            twoThreeFreeSopfr: 61 as Sopfr<{ rough: 5 }>,
            n2d3p9: 36777.470341435175 as N2D3P9,
        } as AnalyzedJiPitch
        expect(actual).toEqual(expected)
    })
})
