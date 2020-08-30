import { Cents, Monzo, Name, Prime, Ratio, Row, Sopfr } from "../../../../../src/general"
import { ApotomeSlope, Comma } from "../../../../../src/sagittal"
import { N2D3P9 } from "../../../../../src/sagittal/commaEvaluation/n2d3p9"
import { computeCommaRow } from "../../../../../src/scripts/findCommas/io/commaRow"

describe("computeCommaRow", () => {
    const comma: Comma = {
        cents: 11.2 as Cents,
        monzo: [0, -1, 1] as Monzo,
        ratio: [5, 4] as Ratio,
        name: "6j" as Name<Comma>,
        limit: 14 as Prime,
        apotomeSlope: 8.2 as ApotomeSlope,
        fiveRoughSopfr: 13 as Sopfr<5>,
        n2d3p9: 18.4567 as N2D3P9,
    } as Comma

    it("takes the properties of the comma and puts them in order in a row", () => {
        const actual = computeCommaRow(comma)

        const expected = ["6j", "14", "13", "11.200", "[   0  -1   1 ⟩", "5/4", "8.200", "18.46"] as Row<Comma>
        expect(actual).toEqual(expected)
    })
})
