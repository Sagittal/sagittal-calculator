import { Cents, Monzo, Name, Prime, Ratio, Sopfr } from "../../../../../src/general"
import { Comma } from "../../../../../src/sagittal"
import { N2D3P9 } from "../../../../../src/sagittal/n2d3p9"
import { ApotomeSlope } from "../../../../../src/sagittal/types"
import { formatComma } from "../../../../../src/scripts/analyzeComma/io"

describe("formatComma", () => {
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

    it("formats it in a multi-line output with titles for each line", () => {
        const actual = formatComma(comma)

        const expected =
            "comma name:   \t6j\n" +
            "limit:        \t14\n" +
            "5-rough sopfr:\t13\n" +
            "cents:        \t11.2\n" +
            "monzo:        \t[ 0 -1 1 ⟩\n" +
            "ratio:        \t5/4\n" +
            "apotome slope:\t8.2\n" +
            "N2D3P9:       \t18.4567"
        expect(actual).toEqual(expected)
    })
})
