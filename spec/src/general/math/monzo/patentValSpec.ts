import { Ed, Window } from "../../../../../src/general"
import { Max, Prime } from "../../../../../src/general/math"
import { computePatentVal } from "../../../../../src/general/math/monzo/patentVal"
import { Val } from "../../../../../src/general/math/monzo/types"

describe("computePatentVal", (): void => {
    it("given an EDO and a prime limit, returns the patent val", (): void => {
        const ed: Ed<Window<2>> = 12 as Ed<Window<2>>
        const primeLimit: Max<Prime> = 5 as Max<Prime>
        const window: Window<2> = 2 as Window<2>

        const actual: Val = computePatentVal({ ed, window, primeLimit })

        const expected = [12, 19, 28] as Val
        expect(actual).toEqual(expected)
    })
})
