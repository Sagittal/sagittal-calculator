import { Cents, Monzo, Name, Prime, Ratio, Sopfr } from "../../../../src/general"
import { analyzeComma, ApotomeSlope, Comma } from "../../../../src/sagittal"
import { N2D3P9 } from "../../../../src/sagittal/commaEvaluation/n2d3p9"

describe("analyzeComma", () => {
    it("returns a bundle of analyzed properties of a comma, given its monzo", () => {
        const monzo = [-8, -6, 3, 5, -1] as Monzo

        const actual = analyzeComma(monzo)

        const expected = {
            cents: 40.02272638304789 as Cents,
            monzo: [-8, -6, 3, 5, -1] as Monzo,
            ratio: [2100875, 2052864] as Ratio,
            name: "2100875/11S" as Name<Comma>,
            limit: 11 as Prime,
            apotomeSlope: -8.464345074135046 as ApotomeSlope,
            fiveRoughSopfr: 61 as Sopfr<5>,
            n2d3p9: 36777.470341 as N2D3P9,
        } as Comma
        expect(actual).toEqual(expected)
    })
})
