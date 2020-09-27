import { Direction, Id, Popularity, Row, Votes } from "../../../../../../src/general"
import { Rank, Ranked } from "../../../../../../src/general/code"
import { Monzo } from "../../../../../../src/general/math/num/monzo"
import { Cents } from "../../../../../../src/general/music"
import { N2D3P9 } from "../../../../../../src/sagittal/ji/twoThreeFreeClass/n2d3p9"
import { SymbolClass } from "../../../../../../src/sagittal/notations"
import { BestNotatingCommaProperties } from "../../../../../../src/scripts/popular23FreeClass/bestNotatingComma"
import { computePopular23FreeClassWithBestNotatingCommaRow } from "../../../../../../src/scripts/popular23FreeClass/bestNotatingComma/io"
import { Popular23FreeClass } from "../../../../../../src/scripts/popular23FreeClass/types"
import { twoThreeFreeClassFixture } from "../../../../../helpers/src/general/music/fixtures"

describe("computePopular23FreeClassWithBestNotatingCommaRow", (): void => {
    it("works", (): void => {
        const rankedPopular23FreeClassWithBestNotatingComma:
            Ranked<Popular23FreeClass & BestNotatingCommaProperties> = {
            ...twoThreeFreeClassFixture,
            rank: 4 as Rank<Popular23FreeClass & BestNotatingCommaProperties>,
            bestNotatingCommaCents: 5 as Cents,
            bestNotatingCommaMonzo: [1] as Monzo,
            bestNotatingCommaMaybeSymbolClassId: 6 as Id<SymbolClass>,
            n2d3p9: 2 as N2D3P9,
            votes: 7 as Votes,
            popularityRank: 3 as Rank<Popularity>,
            monzo: [0, 0, -1, 1] as Monzo<{ rough: 5, direction: Direction.SUPER }>,
        }

        const actual = computePopular23FreeClassWithBestNotatingCommaRow(rankedPopular23FreeClassWithBestNotatingComma)

        const expected = [
            "7/5",              // 2,3-free class
            "4",                // estimated rank
            "         5.000¢",  // best notating comma cents
            "[   1 ⟩",          // best notating comma monzo
            "   ,)|  ",         // best notating comma maybe symbol class
        ] as Row<{ of: Popular23FreeClass & BestNotatingCommaProperties, header: true }>
        expect(actual).toEqual(expected)
    })
})