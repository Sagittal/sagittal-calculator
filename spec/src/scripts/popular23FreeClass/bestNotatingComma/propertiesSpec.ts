import { Id } from "../../../../../src/general"
import { Monzo } from "../../../../../src/general/math/monzo"
import { Cents, TwoThreeFreeClass } from "../../../../../src/general/music"
import { SymbolClass } from "../../../../../src/sagittal/notations"
import {
    BestNotatingCommaProperties,
    computeBestNotatingCommaProperties,
} from "../../../../../src/scripts/popular23FreeClass/bestNotatingComma"

describe("computeBestNotatingCommaProperties", (): void => {
    it(
        "returns, for the given 2,3-free class, the best notating comma's monzo, cents, and symbol class ID (if any)",
        (): void => {
            const twoThreeFreeClass = { monzo: [0, 0, -1, 1] } as TwoThreeFreeClass

            const actual = computeBestNotatingCommaProperties(twoThreeFreeClass)

            const expected: BestNotatingCommaProperties = {
                bestNotatingCommaCents: 29.217813 as Cents,
                bestNotatingCommaMonzo: [-9, 6, 1, -1] as Monzo,
                bestNotatingCommaMaybeSymbolClassId: 62 as Id<SymbolClass>,
            }
            expect(actual).toBeCloseToObject(expected)
        },
    )
})
