import { Cents, Direction, Io, Monzo, NEWLINE, Prime, Ratio, Sopfr } from "../../../../../../src/general"
import { ApotomeSlope, JiPitchAnalysis } from "../../../../../../src/sagittal"
import { N2D3P9 } from "../../../../../../src/sagittal/ji/twoThreeFreeClass/n2d3p9"
import { computeJiPitchOutput } from "../../../../../../src/scripts/jiPitch/io"

describe("computeJiPitchOutput", (): void => {
    const jiPitchAnalysis: JiPitchAnalysis = {
        cents: 11.2 as Cents,
        monzo: [0, -1, 1] as Monzo,
        ratio: [5, 4] as Ratio,
        apotomeSlope: 8.2 as ApotomeSlope,
        twoThreeFreeClassAnalysis: {
            twoThreeFreePrimeLimit: 14 as Prime,
            ratio: [5, 1] as Ratio<{ rough: 5, direction: Direction.SUPER }>,
            twoThreeFreeSopfr: 13 as Sopfr<{ rough: 5 }>,
            n2d3p9: 18.4567 as N2D3P9,
        },
    }

    it("formats it in a multi-line output with titles for each line", (): void => {
        const actual = computeJiPitchOutput(jiPitchAnalysis)

        const expected =
            "   --- JI pitch ---" + NEWLINE +
            "" + NEWLINE +
            "     \t               \t       \tapotome" + NEWLINE +
            "ratio\tmonzo          \tcents  \tslope  ".underline + NEWLINE +
            "5/4  \t[   0  -1   1 ⟩\t 11.200\t  8.200" + NEWLINE as Io
        expect(actual).toEqual(expected)
    })
})
