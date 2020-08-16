import { Cents, Name, Prime, Ratio } from "../../../../src/general"
import { analyzeComma, ApotomeSlope, Monzo, Position, Sopfr } from "../../../../src/general/music"
import { N2D3P9 } from "../../../../src/general/music/types"

describe("analyzeComma", () => {
    it("returns a bundle of analyzed properties of the comma", () => {
        const monzo = [-8, -6, 3, 5, -1] as Monzo

        const result = analyzeComma(monzo)

        expect(result).toEqual({
            cents: 40.02272638304789 as Cents,
            monzo: [-8, -6, 3, 5, -1] as Monzo,
            ratio: [2100875, 2052864] as Ratio,
            name: "2100875/11S" as Name<Position>,
            limit: 11 as Prime,
            apotomeSlope: -8.464345074135046 as ApotomeSlope,
            fiveRoughSopfr: 61 as Sopfr<5>,
            n2d3p9: 36777.47034143518 as N2D3P9,
        })
    })
})
