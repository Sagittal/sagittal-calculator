import { Cents, Monzo, Name, Prime, Ratio, Sopfr } from "../../../src/general"
import { ApotomeSlope, N2D3P9 } from "../../../src/general/music"
import { analyzeComma, SagittalComma } from "../../../src/notations"

describe("analyzeComma", () => {
    it("returns a bundle of analyzed properties of the comma", () => {
        const monzo = [-8, -6, 3, 5, -1] as Monzo

        const actual = analyzeComma(monzo)

        const expected = {
            cents: 40.02272638304789 as Cents,
            monzo: [-8, -6, 3, 5, -1] as Monzo,
            ratio: [2100875, 2052864] as Ratio,
            name: "2100875/11S" as Name<SagittalComma>,
            limit: 11 as Prime,
            apotomeSlope: -8.464345074135046 as ApotomeSlope,
            fiveRoughSopfr: 61 as Sopfr<5>,
            n2d3p9: 36777.470341 as N2D3P9,
        }
        expect(actual).toEqual(expected)
    })
})
