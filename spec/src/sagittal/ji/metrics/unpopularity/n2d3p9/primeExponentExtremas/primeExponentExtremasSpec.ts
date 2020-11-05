import {Decimal, Exponent, Extrema, Max, Prime} from "../../../../../../../../src/general"
import {N2D3P9} from "../../../../../../../../src/sagittal/ji/metrics/unpopularity/n2d3p9"
import {computePrimeExponentExtremasGivenMaxN2D3P9} from "../../../../../../../../src/sagittal/ji/metrics/unpopularity/n2d3p9/primeExponentExtremas"
import {onlyRunInCi} from "../../../../../../../helpers/onlyRunInCi"

describe("computePrimeExponentExtremasGivenMaxN2D3P9", (): void => {
    it("works for 0", (): void => {
        const maxN2D3P9 = 0 as Max<N2D3P9>

        const actual = computePrimeExponentExtremasGivenMaxN2D3P9(maxN2D3P9)

        const expected = [
            [0, 0],   // 2
            [0, 0],   // 3
        ] as Array<Extrema<Decimal<{integer: true}> & Exponent<Prime>>>
        expect(actual).toEqual(expected)
    })

    it("works for 1", (): void => {
        const maxN2D3P9 = 1 as Max<N2D3P9>

        const actual = computePrimeExponentExtremasGivenMaxN2D3P9(maxN2D3P9)

        const expected = [
            [0, 0],   // 2
            [0, 0],   // 3
        ] as Array<Extrema<Decimal<{integer: true}> & Exponent<Prime>>>
        expect(actual).toEqual(expected)
    })

    it("works for 10", (): void => {
        const maxN2D3P9 = 10 as Max<N2D3P9>

        const actual = computePrimeExponentExtremasGivenMaxN2D3P9(maxN2D3P9)

        const expected = [
            [0, 0],   // 2
            [0, 0],   // 3
            [-1, 3],    // 5
            [0, 2],     // 7
            [0, 1],     // 11
            [0, 1],     // 13
        ] as Array<Extrema<Decimal<{integer: true}> & Exponent<Prime>>>
        expect(actual).toEqual(expected)
    })

    it("works for 136, verifying the hardcoded table we first developed on the forum", (): void => {
        onlyRunInCi()

        const maxN2D3P9 = 136 as Max<N2D3P9>

        const actual = computePrimeExponentExtremasGivenMaxN2D3P9(maxN2D3P9)

        // See: http://forum.sagittal.org/viewtopic.php?p=2243#p2243
        const expected = [
            [0, 0],   // 2
            [0, 0],   // 3
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
        ] as Array<Extrema<Decimal<{integer: true}> & Exponent<Prime>>>
        expect(actual).toEqual(expected)
    })
})
