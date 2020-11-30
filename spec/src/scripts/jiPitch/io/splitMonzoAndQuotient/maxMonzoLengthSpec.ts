import {Count, EMPTY_MONZO, Exponent, Max, Monzo, Prime} from "../../../../../../src/general"
import {JiPitchAnalysis} from "../../../../../../src/sagittal"
import {computeMaxMonzoLength} from "../../../../../../src/scripts/jiPitch/io/splitMonzoAndQuotient"
import {jiPitchAnalysisFixture} from "../../../../../helpers/src/scripts/jiPitch/fixtures"

describe("computeMaxMonzoLength", (): void => {
    it("returns the length of the longest monzo for each of the JI pitch analyses", (): void => {
        const jiPitchAnalyses = [
            {...jiPitchAnalysisFixture, monzo: EMPTY_MONZO},
            {...jiPitchAnalysisFixture, monzo: [0, 3, 1, 0, 0, -1] as Monzo<{rational: true}>},
            {...jiPitchAnalysisFixture, monzo: [5, -4, -1] as Monzo<{rational: true}>},
        ] as JiPitchAnalysis[]

        const actual = computeMaxMonzoLength(jiPitchAnalyses)

        const expected = 6 as Max<Count<Exponent<Prime>>>
        expect(actual).toBe(expected)
    })
})
