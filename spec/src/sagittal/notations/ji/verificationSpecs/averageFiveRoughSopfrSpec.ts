import { computeRoughNumberMonzo, computeSopfr, FIVE_ROUGHNESS, Monzo, Sopfr } from "../../../../../../src/general/math"
import { Average } from "../../../../../../src/general/math/types"
import { getSagittalComma } from "../../../../../../src/sagittal"
import { JI_SYMBOLS } from "../../../../../../src/sagittal/notations/ji"

const AVERAGE_TWO_THREE_FREE_SOPFR: Average<Sopfr<5>> = 22.78523489932886 as Average<Sopfr<5>>

describe("average 2,3-free sopfr", () => {
    it("is about 23", () => {
        const total: number = JI_SYMBOLS.reduce(
            (total23FreeSopfr, symbol) => {
                const primaryComma = getSagittalComma(symbol.primaryCommaId)
                const twoThreeFreeNumberMonzo: Monzo = computeRoughNumberMonzo(primaryComma.monzo, FIVE_ROUGHNESS)
                const twoThreeFreeSopfr = computeSopfr(twoThreeFreeNumberMonzo)

                return total23FreeSopfr + twoThreeFreeSopfr
            },
            0,
        )

        expect(total / JI_SYMBOLS.length).toBeCloseToTyped(AVERAGE_TWO_THREE_FREE_SOPFR)
    })
})
