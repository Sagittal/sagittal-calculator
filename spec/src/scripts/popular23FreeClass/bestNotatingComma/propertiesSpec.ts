import { Id, RationalMonzo } from "../../../../../src/general"
import { Cents, Two3FreeClass } from "../../../../../src/general/music"
import { SymbolClass } from "../../../../../src/sagittal/notations"
import {
    BestNotatingCommaProperties,
    computeBestNotatingCommaProperties,
} from "../../../../../src/scripts/popular23FreeClass/bestNotatingComma"

describe("computeBestNotatingCommaProperties", (): void => {
    it(
        "returns, for the given 2,3-free class, the best notating comma's monzo, cents, and symbol class ID (if any)",
        (): void => {
            const two3FreeClass = { monzo: [0, 0, -1, 1] } as Two3FreeClass

            const actual = computeBestNotatingCommaProperties(two3FreeClass)

            const expected: BestNotatingCommaProperties = {
                bestNotatingCommaCents: 29.217813 as Cents,
                bestNotatingCommaMonzo: [-9, 6, 1, -1] as RationalMonzo,
                bestNotatingCommaMaybeSymbolClassId: 62 as Id<SymbolClass>,
            }
            expect(actual).toBeCloseToObject(expected)
        },
    )
})
