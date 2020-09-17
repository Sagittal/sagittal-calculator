// tslint:disable max-line-length

import { Cents, Io, Monzo, NEWLINE, Prime, Ratio, Sopfr, TwoThreeFreeClass } from "../../../../../../src/general"
import { ApotomeSlope, JiPitchAnalysis } from "../../../../../../src/sagittal"
import { N2D3P9 } from "../../../../../../src/sagittal/comma/evaluation/n2d3p9"
import { compute23FreeClassOutput } from "../../../../../../src/scripts/jiPitch/io"

describe("compute23FreeClassOutput", (): void => {
    const jiPitchAnalysis: JiPitchAnalysis = {
        cents: 11.2 as Cents,
        monzo: [0, -1, 1] as Monzo,
        ratio: [5, 4] as Ratio,
        apotomeSlope: 8.2 as ApotomeSlope,
        primeLimit: 14 as Prime,
        twoThreeFreeClass: { ratio: [5, 1] as Ratio } as TwoThreeFreeClass,
        twoThreeFreeSopfr: 13 as Sopfr<{ rough: 5 }>,
        n2d3p9: 18.4567 as N2D3P9,
    }

    it("formats it in a multi-line output with titles for each line", (): void => {
        const actual = compute23FreeClassOutput(jiPitchAnalysis)

        const expected =
            "   --- 2,3-free class ---" + NEWLINE +
            "" + NEWLINE +
            "prime  \t    \t       \t       " + NEWLINE +
            "limit  \tname\tSoPFR  \tN2D3P9 ".underline + NEWLINE +
            " 14    \t5/1 \t 13    \t 18.457" + NEWLINE as Io
        expect(actual).toEqual(expected)
    })
})
