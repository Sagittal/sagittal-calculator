import { N2D3P9 } from "../../../../../../src/general/music/n2d3p9"
import {
    computePrimeExponentExtremasGivenMaximumN2D3P9,
    PrimeExponentExtrema,
} from "../../../../../../src/general/music/n2d3p9/primeExponentExtremas"
import { onlyRunInCi } from "../../../../../helpers/onlyRunInCi"

// TODO: FIVE ROUGH LINK so these are actually five-rough primes... should I acknowledge that in the name?

describe("computePrimeExponentExtremasGivenMaximumN2D3P9", () => {
    it("works for 0", () => {
        const maximumN2D3P9 = 0 as N2D3P9

        const actual = computePrimeExponentExtremasGivenMaximumN2D3P9(maximumN2D3P9)

        const expected = [] as Array<PrimeExponentExtrema>
        expect(actual).toEqual(expected)
    })

    it("works for 1", () => {
        const maximumN2D3P9 = 1 as N2D3P9

        const actual = computePrimeExponentExtremasGivenMaximumN2D3P9(maximumN2D3P9)

        const expected = [] as Array<PrimeExponentExtrema>
        expect(actual).toEqual(expected)
    })

    it("works for 10", () => {
        const maximumN2D3P9 = 10 as N2D3P9

        const actual = computePrimeExponentExtremasGivenMaximumN2D3P9(maximumN2D3P9)

        const expected = [
            [-1, 3],    // 5
            [0, 2],     // 7
            [0, 1],     // 11
            [0, 1],     // 13
        ] as Array<PrimeExponentExtrema>
        expect(actual).toEqual(expected)
    })

    it("works for 136, verifying the hardcoded table we first developed on the forum", () => {
        onlyRunInCi()

        const maximumN2D3P9 = 136 as N2D3P9

        const actual = computePrimeExponentExtremasGivenMaximumN2D3P9(maximumN2D3P9)

        // http://forum.sagittal.org/viewtopic.php?p=2243#p2243
        const expected = [
            [-2, 6],    // 5
            [-2, 4],    // 7
            [-1, 2],    // 11
            [-1, 2],    // 13
            [-1, 1],    // 17
            [-1, 1],    // 19
            [-1, 1],    // 23
            [0, 1],     // 29
            [0, 1],     // 31
            [0, 1],     // 37
            [0, 1],     // 41
            [0, 1],     // 43
            [0, 1],     // 47
        ] as Array<PrimeExponentExtrema>
        expect(actual).toEqual(expected)
    })
})
