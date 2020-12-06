import {Cents, IRRATIONAL_SCAMON_BASE_MONZO, Ranked, Row} from "@sagittal/general"
import {CommaClassId} from "@sagittal/system"
import {
    BestNotatingCommaProperties,
    computePopular23FreeClassWithBestNotatingCommaRow,
} from "../../../../../../src/scripts/popular23FreeClass/bestNotatingComma"
import {Popular23FreeClass} from "../../../../../../src/scripts/popular23FreeClass/types"
import {rankedPopular23FreeClassFixture} from "../../../../../helpers/src/scripts/popular23FreeClass/fixtures"

describe("computePopular23FreeClassWithBestNotatingCommaRow", (): void => {
    it("works", (): void => {
        const rankedPopular23FreeClassWithBestNotatingComma:
            Ranked<Popular23FreeClass & BestNotatingCommaProperties> = {
            ...rankedPopular23FreeClassFixture,
            bestNotatingCommaCents: 5 as Cents,
            bestNotatingCommaMonzo: IRRATIONAL_SCAMON_BASE_MONZO,
            bestNotatingCommaMaybeCommaClassId: CommaClassId._19_V_5_P_4_7_s,
        } as Ranked<Popular23FreeClass & BestNotatingCommaProperties>

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
