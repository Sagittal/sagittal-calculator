import {Cents, Monzo, Two3FreeClass} from "@sagittal/general"
import {CommaClassId} from "@sagittal/system"
import {
    BestNotatingCommaProperties,
    computeBestNotatingCommaProperties,
} from "../../../../../src/scripts/popular23FreeClass/bestNotatingComma"

describe("computeBestNotatingCommaProperties", (): void => {
    it("returns, for the given 2,3-free class, the best notating comma's monzo, cents, and comma class ID (if any)            ", (): void => {
        const two3FreeClass = {monzo: [0, 0, -1, 1]} as Two3FreeClass

        const actual = computeBestNotatingCommaProperties(two3FreeClass)

        const expected: BestNotatingCommaProperties = {
            bestNotatingCommaCents: 29.217813 as Cents,
            bestNotatingCommaMonzo: [-9, 6, 1, -1] as Monzo<{rational: true}>,
            bestNotatingCommaMaybeCommaClassId: CommaClassId._5_V_7_C,
        }
        expect(actual).toBeCloseToObject(expected)
    })
})
