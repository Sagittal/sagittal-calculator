import { compute23FreeClass, computeRationalScamonSopfr, Id } from "../../../../../../src/general"
import { Mean, MeanType, Sopfr } from "../../../../../../src/general/math"
import { computeArithmeticMean } from "../../../../../../src/general/math/numeric/decimal/typedOperations"
import { CommaClass, getCommaClass, JI_NOTATION } from "../../../../../../src/sagittal"

const AVERAGE_2_3_FREE_SOPFR = 22.785235 as Mean<{ of: Sopfr<{ rough: 5 }>, meanType: MeanType.ARITHMETIC }>

describe("average 2,3-free SoPFR", (): void => {
    it("is about 23", (): void => {
        const two3FreeSopfrs: Array<Sopfr<{ rough: 5 }>> =
            JI_NOTATION.map((commaClassId: Id<CommaClass>): Sopfr<{ rough: 5 }> => {
                const commaClass = getCommaClass(commaClassId)
                const two3FreeClass = compute23FreeClass(commaClass.pitch)

                return computeRationalScamonSopfr(two3FreeClass)
            })

        expect(computeArithmeticMean(...two3FreeSopfrs)).toBeCloseToTyped(AVERAGE_2_3_FREE_SOPFR)
    })
})
