import { Copfr, Direction, Io, NEWLINE, Prime, RationalQuotient, Sopfr } from "../../../../../../src/general"
import { TwoThreeFreeClassAnalysis } from "../../../../../../src/sagittal/ji/twoThreeFreeClass"
import { N2D3P9 } from "../../../../../../src/sagittal/ji/twoThreeFreeClass/n2d3p9"
import { compute23FreeClassOutput } from "../../../../../../src/scripts/jiPitch/io"

describe("compute23FreeClassOutput", (): void => {
    const twoThreeFreeClassAnalysis = {
        twoThreeFreePrimeLimit: 14 as Prime,
        quotient: [5, 1] as RationalQuotient<{ rough: 5, direction: Direction.SUPER }>,
        twoThreeFreeCopfr: 2 as Copfr<{ rough: 5 }>,
        twoThreeFreeSopfr: 13 as Sopfr<{ rough: 5 }>,
        n2d3p9: 18.4567 as N2D3P9,
    } as TwoThreeFreeClassAnalysis

    it("formats it in a multi-line output with titles for each line", (): void => {
        const actual = compute23FreeClassOutput(twoThreeFreeClassAnalysis)

        const expected =
            "   --- 2,3-free class ---" + NEWLINE +
            "" + NEWLINE +
            "prime  \t    \t       \t       \t       " + NEWLINE +
            "limit  \tname\tCoPFR  \tSoPFR  \tN2D3P9 ".underline + NEWLINE +
            " 14    \t5/1 \t  2    \t 13    \t 18.457" + NEWLINE as Io
        expect(actual).toEqual(expected)
    })
})
