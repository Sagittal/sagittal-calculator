import { Cents, Monzo, Name, Prime, Ratio, Sopfr } from "../../../../../src/general"
import { AnalyzedRationalPitch, ApotomeSlope } from "../../../../../src/sagittal"
import { N2D3P9 } from "../../../../../src/sagittal/commaEvaluation/n2d3p9"
import { formatRationalPitch } from "../../../../../src/scripts/pitch/io"

describe("formatRationalPitch", () => {
    const rationalPitch: AnalyzedRationalPitch = {
        cents: 11.2 as Cents,
        monzo: [0, -1, 1] as Monzo,
        ratio: [5, 4] as Ratio,
        name: "6j" as Name<AnalyzedRationalPitch>,
        limit: 14 as Prime,
        apotomeSlope: 8.2 as ApotomeSlope,
        fiveRoughSopfr: 13 as Sopfr<5>,
        n2d3p9: 18.4567 as N2D3P9,
    } as AnalyzedRationalPitch

    it("formats it in a multi-line output with titles for each line", () => {
        const actual = formatRationalPitch(rationalPitch)

        const expected =
            "ratio:        \t5/4\n" +
            "monzo:        \t[   0  -1   1 ⟩\n" +
            "cents:        \t 11.200\n" +
            "limit:        \t 14    \n" +
            "5-rough sopfr:\t 13    \n" +
            "N2D3P9:       \t 18.457\n" +
            "apotome slope:\t  8.200"
        expect(actual).toEqual(expected)
    })
})
