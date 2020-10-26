import {Copfr, Io, Max, Monzo, NEWLINE, Prime, Sopfr, Two3FreeClass} from "../../../../../../src/general"
import {N2D3P9} from "../../../../../../src/sagittal/ji/two3FreeClass/n2d3p9"
import {compute23FreeClassOutput} from "../../../../../../src/scripts/jiPitch/io"
import {two3FreeClassAnalysisFixture} from "../../../../../helpers/src/scripts/jiPitch/fixtures"

describe("compute23FreeClassOutput", (): void => {
    const two3FreeClassAnalysis = {
        ...two3FreeClassAnalysisFixture,
        two3FreeClass: {
            monzo: [0, 0, 1] as Monzo<{rational: true}>,
        } as Two3FreeClass,
        two3FreePrimeLimit: 14 as Max<Prime<{rough: 5}>>,
        two3FreeCopfr: 2 as Copfr<{rough: 5}>,
        two3FreeSopfr: 13 as Sopfr<{rough: 5}>,
        n2d3p9: 18.4567 as N2D3P9,
    }

    it("formats it in a multi-line output with titles for each line", (): void => {
        const actual = compute23FreeClassOutput(two3FreeClassAnalysis)

        const expected =
            "   --- 2,3-free class ---" + NEWLINE +
            "" + NEWLINE +
            "prime  \tname\t \t \t   \t       \t       \t       " + NEWLINE +
            "limit  \t   n\t/\td\t₂,₃\tCoPFR  \tSoPFR  \tN2D3P9 ".underline + NEWLINE +
            " 14    \t   5\t/\t1\t₂,₃\t  2    \t 13    \t 18.457" + NEWLINE as Io
        expect(actual).toEqual(expected)
    })
})
