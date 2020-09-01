// tslint:disable max-line-length

import { Cents, Io, Monzo, Name, NEWLINE, Prime, Ratio, Sopfr } from "../../../../../src/general"
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
            "        \t       \tratio     \tmonzo          \tcents  \tapotome slope\tlimit  \t5-rough sopfr\tN2D3P9 ".underline + NEWLINE +
            "        \t       \t5/4       \t[   0  -1   1 ⟩\t 11.200\t  8.200      \t 14    \t 13          \t 18.457" + NEWLINE as Io
        expect(actual).toEqual(expected)
    })
})
