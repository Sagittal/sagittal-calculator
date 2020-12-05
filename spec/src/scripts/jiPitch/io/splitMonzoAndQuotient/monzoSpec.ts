import {Count, Exponent, Formatted, Max, Monzo, Prime} from "@sagittal/general"
import {JiPitchAnalysis} from "@sagittal/system"
import {formatSplitMonzo} from "../../../../../../src/scripts/jiPitch/io/splitMonzoAndQuotient"

describe("formatSplitMonzo", (): void => {
    it("splits a monzo into a different cell for each prime exponent", (): void => {
        const monzo = [3, -2, -1] as Monzo<{rational: true}>
        const maxMonzoLength = 4 as Max<Count<Exponent<Prime>>>

        const actual = formatSplitMonzo(monzo, maxMonzoLength)

        const expected = [
            "[",
            "  3    ",
            " -2    ",
            " -1    ",
            "",
            "⟩",
        ] as Array<Formatted<JiPitchAnalysis>>
        expect(actual).toEqual(expected)
    })
})
