import { Name } from "../../../../src/general"
import { AnalyzedRationalPitch, SymbolLongAscii } from "../../../../src/sagittal"
import { getMaybeSagittalSymbolWithPrimaryCommaName } from "../../../../src/scripts/pitch/maybeSagittalSymbolFromCommaName"

describe("getMaybeSagittalSymbolWithPrimaryCommaName", () => {
    it(
        `returns the ASCII for a Sagittal symbol if there is one whose primary comma has this name`,
        () => {
            const name = "11M" as Name<AnalyzedRationalPitch>

            const actual = getMaybeSagittalSymbolWithPrimaryCommaName(name)

            const expected = "/|\\" as SymbolLongAscii
            expect(actual).toBe(expected)
        },
    )

    it(
        `returns undefined if there is no Sagittal symbol whose primary comma has this name`,
        () => {
            const name = "49/95C" as Name<AnalyzedRationalPitch>

            const actual = getMaybeSagittalSymbolWithPrimaryCommaName(name)

            expect(actual).toBeUndefined()
        },
    )
})
