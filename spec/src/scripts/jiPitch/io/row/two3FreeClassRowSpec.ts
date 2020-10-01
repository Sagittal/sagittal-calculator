import { Row } from "../../../../../../src/general/io/table"
import { Copfr, Direction, Prime, RationalQuotient, Sopfr } from "../../../../../../src/general/math"
import { Two3FreeClass } from "../../../../../../src/general/music"
import { N2D3P9, Two3FreeClassAnalysis } from "../../../../../../src/sagittal/ji"
import { jiPitchScriptGroupSettings } from "../../../../../../src/scripts/jiPitch/globals"
import { compute23FreeClassRow } from "../../../../../../src/scripts/jiPitch/io/row"
import { FindCommasField } from "../../../../../../src/scripts/jiPitch/types"

describe("compute23FreeClassRow", (): void => {
    const two3FreeClassAnalysis: Two3FreeClassAnalysis = {
        quotient: [5, 1] as RationalQuotient<{ rough: 5, direction: Direction.SUPER }>,
        two3FreeSopfr: 13 as Sopfr<{ rough: 5 }>,
        two3FreeCopfr: 3 as Copfr<{ rough: 5 }>,
        n2d3p9: 18.4567 as N2D3P9,
        two3FreePrimeLimit: 14 as Prime,
    } as Two3FreeClassAnalysis

    it("returns a row of information about the JI pitch", (): void => {
        const actual = compute23FreeClassRow(two3FreeClassAnalysis)

        const expected = [
            " 14    ",          // Prime limit
            "5/1₍₂,₃₎",         // 2,3-free class name
            "  3    ",          // 2,3-free CoPFR
            " 13    ",          // 2,3-free SoPFR
            " 18.457",          // 2,3-free N2D3P9
        ] as Row<{ of: Two3FreeClass, header: true }>
        expect(actual).toEqual(expected)
    })

    it("can filter excluded fields", (): void => {
        jiPitchScriptGroupSettings.excludedFields =
            [FindCommasField.TWO_3_FREE_COPFR, FindCommasField.TWO_3_FREE_PRIME_LIMIT]
        const actual = compute23FreeClassRow(two3FreeClassAnalysis)

        const expected = [
            "5/1₍₂,₃₎",         // 2,3-free class name
            " 13    ",          // 2,3-free SoPFR
            " 18.457",          // 2,3-free N2D3P9
        ] as Row<{ of: Two3FreeClass, header: true }>
        expect(actual).toEqual(expected)
    })
})
