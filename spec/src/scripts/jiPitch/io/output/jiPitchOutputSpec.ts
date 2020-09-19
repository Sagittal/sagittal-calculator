import { Cents, Io, Monzo, NEWLINE, Ratio } from "../../../../../../src/general"
import { ApotomeSlope, JiPitchAnalysis } from "../../../../../../src/sagittal"
import { computeJiPitchOutput } from "../../../../../../src/scripts/jiPitch/io"
import { twoThreeFreeClassAnalysisFixture } from "../../../../../helpers/src/scripts/jiPitch/fixtures"

describe("computeJiPitchOutput", (): void => {
    const jiPitchAnalysis: JiPitchAnalysis = {
        cents: 11.2 as Cents,
        monzo: [0, -1, 1] as Monzo,
        ratio: [5, 4] as Ratio,
        apotomeSlope: 8.2 as ApotomeSlope,
        twoThreeFreeClassAnalysis: twoThreeFreeClassAnalysisFixture,
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
