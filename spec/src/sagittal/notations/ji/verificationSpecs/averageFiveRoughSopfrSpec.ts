import { compute23FreeClass, computeRationalScamonSopfr, Id } from "../../../../../../src/general"
import { Mean, MeanType, Sopfr } from "../../../../../../src/general/math"
import { computeArithmeticMean } from "../../../../../../src/general/math/numeric/decimal/typedOperations"
import { getPrimaryComma, JI_NOTATION, SymbolClass } from "../../../../../../src/sagittal"

const AVERAGE_2_3_FREE_SOPFR = 22.785235 as Mean<{ of: Sopfr<{ rough: 5 }>, meanType: MeanType.ARITHMETIC }>

describe("average 2,3-free SoPFR", (): void => {
    it("is about 23", (): void => {
        const two3FreeSopfrs: Array<Sopfr<{ rough: 5 }>> =
            JI_NOTATION.map((symbolClassId: Id<SymbolClass>): Sopfr<{ rough: 5 }> => {
                const primaryComma = getPrimaryComma(symbolClassId)
                const two3FreeClass = compute23FreeClass(primaryComma)

                return computeRationalScamonSopfr(two3FreeClass)
            })

        expect(computeArithmeticMean(...two3FreeSopfrs)).toBeCloseToTyped(AVERAGE_2_3_FREE_SOPFR)
    })
})
