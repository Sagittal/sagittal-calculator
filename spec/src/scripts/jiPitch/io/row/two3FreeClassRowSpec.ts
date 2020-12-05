import {Copfr, Max, Monzo, Prime, Row, Sopfr, Two3FreeClass} from "@sagittal/general"
import {N2D3P9, Two3FreeClassAnalysis} from "@sagittal/system"
import {jiPitchScriptGroupSettings} from "../../../../../../src/scripts/jiPitch/globals"
import {compute23FreeClassRow} from "../../../../../../src/scripts/jiPitch/io/row"
import {JiPitchesOrFindCommasField} from "../../../../../../src/scripts/jiPitch/types"
import {two3FreeClassAnalysisFixture} from "../../../../../helpers/src/scripts/jiPitch/fixtures"

describe("compute23FreeClassRow", (): void => {
    const two3FreeClassAnalysis: Two3FreeClassAnalysis = {
        ...two3FreeClassAnalysisFixture,
        two3FreeClass: {
            monzo: [0, 0, 1] as Monzo<{rational: true}>,
        } as Two3FreeClass,
        two3FreeSopfr: 13 as Sopfr<{rough: 5}>,
        two3FreeCopfr: 3 as Copfr<{rough: 5}>,
        n2d3p9: 18.4567 as N2D3P9,
        two3FreePrimeLimit: 14 as Max<Prime<{rough: 5}>>,
    }

    it("returns a row of information about the JI pitch", (): void => {
        const actual = compute23FreeClassRow(two3FreeClassAnalysis)

        const expected = [
            " 14    ",          // 2,3-free prime limit
            "5",                // 2,3-free class numinator
            "/",                // 2,3-free class vinculum
            "1",                // 2,3-free class diminuator
            "₂,₃",              // 2,3-free class sign
            "  3    ",          // 2,3-free CoPFR
            " 13    ",          // 2,3-free SoPFR
            " 18.457",          // 2,3-free N2D3P9
        ] as Row<{of: Two3FreeClassAnalysis, header: true}>
        expect(actual).toEqual(expected)
    })

    it("can filter the excluded fields", (): void => {
        jiPitchScriptGroupSettings.excludedFields =
            [JiPitchesOrFindCommasField.TWO_3_FREE_COPFR, JiPitchesOrFindCommasField.TWO_3_FREE_PRIME_LIMIT]
        const actual = compute23FreeClassRow(two3FreeClassAnalysis)

        const expected = [
            "5",                // 2,3-free class numinator
            "/",                // 2,3-free class vinculum
            "1",                // 2,3-free class diminuator
            "₂,₃",              // 2,3-free class sign
            " 13    ",          // 2,3-free SoPFR
            " 18.457",          // 2,3-free N2D3P9
        ] as Row<{of: Two3FreeClassAnalysis, header: true}>
        expect(actual).toEqual(expected)
    })
})
