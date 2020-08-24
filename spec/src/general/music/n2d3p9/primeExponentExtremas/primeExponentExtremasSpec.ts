import { N2D3P9 } from "../../../../../../src/general/music/n2d3p9"
import {
    computePrimeExponentExtremasGivenMaximumN2D3P9,
    PrimeExponentExtrema,
} from "../../../../../../src/general/music/n2d3p9/primeExponentExtremas"
import { onlyRunInCi } from "../../../../../helpers/onlyRunInCi"

// TODO: I think you should link up with the other to-dos in popularRatios.ts
//  so these are actually five-rough primes... should I acknowledge that in the name?

describe("computePrimeExponentExtremasGivenMaximumN2D3P9", () => {
    // TODO: make this edge case actually work so you can comment out this test
    xit("works for 1", () => {
        const maximumN2D3P9 = 0 as N2D3P9

        const result = computePrimeExponentExtremasGivenMaximumN2D3P9(maximumN2D3P9)

        const expectedResult = [] as Array<PrimeExponentExtrema>
        expect(result).toEqual(expectedResult)
    })

    // TODO: okay i'm thinking that maybe we don't support N2D3P9 = 0 very well either
    //  so write a test for that

    it("works for 10", () => {
        const maximumN2D3P9 = 10 as N2D3P9

        const result = computePrimeExponentExtremasGivenMaximumN2D3P9(maximumN2D3P9)

        const expectedResult = [
            [-1, 3],    // 5
            [0, 2],     // 7
            [0, 1],     // 11
            [0, 1],     // 13
        ] as Array<PrimeExponentExtrema>
        expect(result).toEqual(expectedResult)
    })

    it("works for 136, verifying the hardcoded table we first developed on the forum", () => {
        onlyRunInCi()

        const maximumN2D3P9 = 136 as N2D3P9

        const result = computePrimeExponentExtremasGivenMaximumN2D3P9(maximumN2D3P9)

        // http://forum.sagittal.org/viewtopic.php?p=2243#p2243
        const expectedResult = [
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
        expect(result).toEqual(expectedResult)
    })
})
