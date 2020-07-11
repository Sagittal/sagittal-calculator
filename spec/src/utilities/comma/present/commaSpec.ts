import { presentComma } from "../../../../../src/utilities/comma/present/comma"
import { Comma, CommaName, Monzo, Sopfr } from "../../../../../src/utilities/comma/types"
import { Cents, Prime, Ratio } from "../../../../../src/utilities/types"
import { ApotomeSlope } from "../../../../../src/notations/ji/types"

describe("presentComma", () => {
    const comma: Comma = {
        cents: 11.2 as Cents,
        monzo: [0, -1, 1] as Monzo,
        ratio: [5, 4] as Ratio,
        commaName: "6j" as CommaName,
        limit: 14 as Prime,
        apotomeSlope: 8.2 as ApotomeSlope,
        fiveRoughSopfr: 13 as Sopfr<5>,
    }

    it("formats it in a nice single line in the default summary mode", () => {
        const result = presentComma(comma)

        expect(result).toEqual("6j\t14\t13\t11.2\t[ 0 -1 1 ⟩\t5/4\t8.2")
    })

    it("can also format it in a details mode with lines with titles for each line", () => {
        const result = presentComma(comma, { mode: "DETAILS" })

        expect(result).toEqual(
            "comma name:   \t6j\n" +
            "limit:        \t14\n" +
            "5-rough sopfr:\t13\n" +
            "cents:        \t11.2\n" +
            "monzo:        \t[ 0 -1 1 ⟩\n" +
            "ratio:        \t5/4\n" +
            "apotome slope:\t8.2",
        )
    })
})
