// tslint:disable max-line-length

import { Cents, Io, Monzo, NEWLINE, Prime, Ratio, Sopfr, TwoThreeFreeClass } from "../../../../../src/general"
import { AnalyzedJiPitch, ApotomeSlope } from "../../../../../src/sagittal"
import { N2D3P9 } from "../../../../../src/sagittal/comma/evaluation/n2d3p9"
import { formatJiPitch } from "../../../../../src/scripts/pitch/io"

describe("formatJiPitch", () => {
    const jiPitch: AnalyzedJiPitch = {
        cents: 11.2 as Cents,
        monzo: [0, -1, 1] as Monzo,
        ratio: [5, 4] as Ratio,
        limit: 14 as Prime,
        apotomeSlope: 8.2 as ApotomeSlope,
        twoThreeFreeClass: { ratio: [5, 1] as Ratio } as TwoThreeFreeClass,
        twoThreeFreeSopfr: 13 as Sopfr<5>,
        n2d3p9: 18.4567 as N2D3P9,
    }

    it("formats it in a multi-line output with titles for each line", () => {
        const actual = formatJiPitch(jiPitch)

        const expected =
            "   --- JI pitch ---" + NEWLINE +
            "" + NEWLINE +
            "        \t       \tratio     \tmonzo          \tcents  \tapotome slope\tlimit  \t2,3-free sopfr\t2,3-free class N2D3P9".underline + NEWLINE +
            "        \t       \t5/4       \t[   0  -1   1 ⟩\t 11.200\t  8.200      \t 14    \t 13           \t 18.457              " + NEWLINE as Io
        expect(actual).toEqual(expected)
    })
})
