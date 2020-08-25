import { Cents, Monzo, Name, Prime, Ratio, Sopfr } from "../../../src/general"
import { ApotomeSlope, N2D3P9 } from "../../../src/general/music"
import { presentComma, SagittalComma } from "../../../src/notations"

describe("presentComma", () => {
    const comma: SagittalComma = {
        cents: 11.2 as Cents,
        monzo: [0, -1, 1] as Monzo,
        ratio: [5, 4] as Ratio,
        name: "6j" as Name<SagittalComma>,
        limit: 14 as Prime,
        apotomeSlope: 8.2 as ApotomeSlope,
        fiveRoughSopfr: 13 as Sopfr<5>,
        n2d3p9: 18.4567 as N2D3P9,
    }

    it("formats it in a nice single line in the default summary mode", () => {
        const actual = presentComma(comma)

        const expected = "6j\t14\t13\t11.2\t[ 0 -1 1 ⟩\t5/4\t8.2\t18.4567"
        expect(actual).toEqual(expected)
    })

    it("can also format it in a details mode with lines with titles for each line", () => {
        const actual = presentComma(comma, { mode: "DETAILS" })

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
