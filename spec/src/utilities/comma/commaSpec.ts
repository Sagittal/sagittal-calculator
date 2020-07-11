import { analyzeComma } from "../../../../src/utilities/comma/comma"
import { CommaName, Monzo, Sopfr } from "../../../../src/utilities/comma/types"
import { Cents, Prime, Ratio } from "../../../../src/utilities/types"
import { ApotomeSlope } from "../../../../src/notations/ji/types"

describe("analyzeComma", () => {
    it("returns a bundle of analyzed properties of the comma", () => {
        const monzo = [-8, -6, 3, 5, -1] as Monzo

        const result = analyzeComma(monzo)

        expect(result).toEqual({
            cents: 40.02272638304789 as Cents,
            monzo: [-8, -6, 3, 5, -1] as Monzo,
            ratio: [2100875, 2052864] as Ratio,
            commaName: "2100875/11S" as CommaName,
            limit: 11 as Prime,
            apotomeSlope: -8.464345074135046 as ApotomeSlope,
            fiveRoughSopfr: 61 as Sopfr<5>,
        })
    })
})
