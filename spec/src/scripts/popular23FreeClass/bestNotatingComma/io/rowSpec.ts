import {Direction, Monzo, Name, Popularity, Row, Two3FreeClass, Votes} from "../../../../../../src/general"
import {Rank, Ranked} from "../../../../../../src/general/code"
import {IRRATIONAL_SCAMON_BASE_MONZO} from "../../../../../../src/general/math/irrational/scamon/constants"
import {Cents} from "../../../../../../src/general/music"
import {N2D3P9} from "../../../../../../src/sagittal/ji/metrics"
import {CommaClassId} from "../../../../../../src/sagittal/notation"
import {BestNotatingCommaProperties} from "../../../../../../src/scripts/popular23FreeClass/bestNotatingComma"
import {computePopular23FreeClassWithBestNotatingCommaRow} from "../../../../../../src/scripts/popular23FreeClass/bestNotatingComma/io"
import {Popular23FreeClass} from "../../../../../../src/scripts/popular23FreeClass/types"
import {two3FreeClassAnalysisFixture} from "../../../../../helpers/src/scripts/jiPitch/fixtures"

describe("computePopular23FreeClassWithBestNotatingCommaRow", (): void => {
    it("works", (): void => {
        const rankedPopular23FreeClassWithBestNotatingComma:
            Ranked<Popular23FreeClass & BestNotatingCommaProperties> = {
            ...two3FreeClassAnalysisFixture,
            name: "{7/5}₂,₃" as Name<Two3FreeClass>,
            rank: 4 as Rank<Popular23FreeClass & BestNotatingCommaProperties>,
            bestNotatingCommaCents: 5 as Cents,
            bestNotatingCommaMonzo: IRRATIONAL_SCAMON_BASE_MONZO,
            bestNotatingCommaMaybeCommaClassId: CommaClassId._19_4375_s,
            n2d3p9: 2 as N2D3P9,
            votes: 7 as Votes,
            popularityRank: 3 as Rank<Popularity>,
            two3FreeClass: {
                monzo: [0, 0, -1, 1] as Monzo<{rational: true, rough: 5, direction: Direction.SUPER}>,
            } as Two3FreeClass,
        }

        const actual = computePopular23FreeClassWithBestNotatingCommaRow(rankedPopular23FreeClassWithBestNotatingComma)

        const expected = [
            "{7/5}₂,₃",         // 2,3-free class name
            "4",                // Estimated rank
            "         5.000¢",  // Best notating comma cents
            "[   1 ⟩",          // Best notating comma monzo
            "   ,)|  ",         // Best notating comma maybe flacco
        ] as Row<{of: Popular23FreeClass & BestNotatingCommaProperties, header: true}>
        expect(actual).toEqual(expected)
    })
})
