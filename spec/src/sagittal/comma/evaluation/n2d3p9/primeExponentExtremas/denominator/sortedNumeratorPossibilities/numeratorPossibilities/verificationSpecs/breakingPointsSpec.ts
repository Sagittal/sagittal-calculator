import { Index } from "../../../../../../../../../../../src/general"
import { increment } from "../../../../../../../../../../../src/general/code"
import { Exponent, Max, Numerator, Prime, PRIMES } from "../../../../../../../../../../../src/general/math"
import { N2D3P9 } from "../../../../../../../../../../../src/sagittal/comma/evaluation/n2d3p9"

describe("breaking points of max N2D3P9 per numerator prime", (): void => {
    const expected: Array<Array<Max<N2D3P9>>> = [
        [],
        [],
        [1, 1.388888, 3.472222, 8.680555, 21.701388, 54.253472, 135.633680, 339.084201, 847.710503, 2119.276258],
        [1, 2.722222, 9.527777, 33.347222, 116.715277, 408.503472, 1429.762152],
        [1, 6.722222, 36.972222, 203.347222, 1118.409722],
        [1, 9.388888, 61.027777, 396.680555, 2578.423611],
        [1, 16.055555, 136.472222, 1160.013888],
        [1, 20.055555, 190.527777, 1810.013888],
        [1, 29.388888, 337.972222, 3886.680555],
        [1, 46.722222, 677.472222],
        [1, 53.388888, 827.527777],
        [1, 76.055555, 1407.027777],
        [1, 93.388888, 1914.472222],
        [1, 102.722222, 2208.527777],
        [1, 122.722222, 2883.972222],
        [1, 156.055555, 4135.472222],
        [1, 193.388888],
        [1, 206.722222],
        [1, 249.388888],
        [1, 280.055555],
        [1, 296.055555],
        [1, 346.722222],
        [1, 382.722222],
        [1, 440.055555],
        [1, 522.722222],
        [1, 566.722222],
        [1, 589.388888],
        [1, 636.055555],
        [1, 660.055555],
        [1, 709.388888],
        [1, 896.055555],
        [1, 953.388888],
        [1, 1042.722222],
        [1, 1073.388888],
        [1, 1233.388888],
        [1, 1266.722222],
        [1, 1369.388888],
        [1, 1476.055555],
        [1, 1549.388888],
        [1, 1662.722222],
        [1, 1780.055555],
        [1, 1820.055555],
        [1, 2026.722222],
        [1, 2069.388888],
        [1, 2156.055555],
        [1, 2200.055555],
        [1, 2473.388888],
        [1, 2762.722222],
        [1, 2862.722222],
        [1, 2913.388888],
        [1, 3016.055555],
        [1, 3173.388888],
        [1, 3226.722222],
        [1, 3500.055555],
        [1, 3669.388888],
        [1, 3842.722222],
        [1, 4020.055555],
        [1, 4080.055555],
        [1, 4262.722222],
        [1, 4386.722222],
        [1, 4449.388888],
        [1, 4769.388888],
    ] as Array<Array<Max<N2D3P9>>>

    it("okay, here is where we are going to figure this out", (): void => {
        const computeMaxN2D3P9GivenMaxNumeratorPrimeExponent = (
            prime: Prime,
            maxNumeratorPrimeExponent: Max<Numerator & Exponent<Prime>>,
        ): Max<N2D3P9> => {
            return maxNumeratorPrimeExponent === 0 ?
                1 as Max<N2D3P9> :
                (1 / 9) * prime * (prime / 2) ** maxNumeratorPrimeExponent as Max<N2D3P9>
        }

        const MAX_REASONABLE_MAX_N2D3P9 = 5000 as Max<Max<N2D3P9>>

        const breakingPoints = [[], []] as Array<Array<Max<N2D3P9>>>
        let primeIndex: Index<Prime> = 2 as Index<Prime>

        while (true) {
            breakingPoints.push([] as Array<Max<N2D3P9>>)
            const numeratorPrime = PRIMES[ primeIndex ] as Numerator & Prime

            let maxNumeratorPrimeExponent = 0 as Max<Numerator & Exponent<Prime>>
            while (true) {
                const maxN2D3P9 =
                    computeMaxN2D3P9GivenMaxNumeratorPrimeExponent(numeratorPrime, maxNumeratorPrimeExponent)

                if (maxN2D3P9 > MAX_REASONABLE_MAX_N2D3P9) {
                    break
                }
                breakingPoints[ primeIndex ].push(maxN2D3P9)

                maxNumeratorPrimeExponent = increment(maxNumeratorPrimeExponent)
            }

            if (breakingPoints[ primeIndex ].length === 1) {
                breakingPoints.pop()
                break
            }

            primeIndex = increment(primeIndex)
        }

        expect(breakingPoints).toBeCloseToObject(expected)
    })
})

