import { Cents, Comma, Monzo, Name, Prime, Ratio, Sopfr, TwoThreeFreeClass } from "../../../../src/general"
import { AnalyzedComma, ApotomeSlope, N2D3P9 } from "../../../../src/sagittal"
import { analyzeComma } from "../../../../src/sagittal/comma"

describe("analyzeComma", () => {
    it("returns a bundle of analyzed properties of a comma, given its monzo", () => {
        const comma = { monzo: [-8, -6, 3, 5, -1] as Monzo } as Comma

        const actual = analyzeComma(comma)

        const expected = {
            cents: 40.02272638304789 as Cents,
            monzo: [-8, -6, 3, 5, -1] as Monzo,
            ratio: [2100875, 2052864] as Ratio,
            name: "2100875/11S" as Name<Comma>,
            limit: 11 as Prime,
            apotomeSlope: -8.464345074135046 as ApotomeSlope,
            twoThreeFreeClass: { monzo: [0, 0, 3, 5, -1] } as TwoThreeFreeClass,
            twoThreeFreeSopfr: 61 as Sopfr<{ rough: 5 }>,
            n2d3p9: 36777.470341435175 as N2D3P9,
        } as AnalyzedComma
        expect(actual).toEqual(expected)
    })
})
