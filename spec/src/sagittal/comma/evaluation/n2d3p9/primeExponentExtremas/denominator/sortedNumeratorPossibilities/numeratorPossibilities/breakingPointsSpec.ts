import { Exponent, Integer, Max, Numerator, Prime, PRIMES } from "../../../../../../../../../../src/general/math"
import { N2D3P9 } from "../../../../../../../../../../src/sagittal/comma/evaluation/n2d3p9"

describe("breaking points of max N2D3P9 per numerator prime", (): void => {
    const expected: Array<Array<Max<N2D3P9>>> = [
        [],
        [],
        [
            1,
            1.3888888888888888,
            3.4722222222222223,
            8.680555555555555,
            21.70138888888889,
            54.25347222222222,
            135.63368055555557,
            339.0842013888889,
            847.7105034722223,
            2119.2762586805557,
        ],
        [
            1,
            2.722222222222222,
            9.527777777777777,
            33.34722222222222,
            116.71527777777776,
            408.5034722222222,
            1429.7621527777776,
        ],
        [
            1,
            6.722222222222221,
            36.97222222222222,
            203.3472222222222,
            1118.4097222222222,
        ],
        [
            1,
            9.38888888888889,
            61.02777777777778,
            396.68055555555554,
            2578.423611111111,
        ],
        [1, 16.055555555555554, 136.47222222222223, 1160.013888888889],
        [1, 20.055555555555557, 190.52777777777777, 1810.013888888889],
        [1, 29.388888888888886, 337.9722222222222, 3886.680555555555],
        [1, 46.722222222222214, 677.4722222222222],
        [1, 53.388888888888886, 827.5277777777777],
        [1, 76.05555555555554, 1407.0277777777776],
        [1, 93.38888888888889, 1914.4722222222222],
        [1, 102.72222222222221, 2208.527777777778],
        [1, 122.72222222222223, 2883.972222222222],
        [1, 156.05555555555554, 4135.472222222222],
        [1, 193.38888888888889],
        [1, 206.72222222222223],
        [1, 249.38888888888886],
        [1, 280.05555555555554],
        [1, 296.05555555555554],
        [1, 346.7222222222222],
        [1, 382.7222222222222],
        [1, 440.0555555555555],
        [1, 522.7222222222222],
        [1, 566.7222222222222],
        [1, 589.3888888888889],
        [1, 636.0555555555554],
        [1, 660.0555555555555],
        [1, 709.3888888888889],
        [1, 896.0555555555555],
        [1, 953.3888888888889],
        [1, 1042.7222222222222],
        [1, 1073.3888888888887],
        [1, 1233.3888888888887],
        [1, 1266.7222222222222],
        [1, 1369.3888888888887],
        [1, 1476.0555555555554],
        [1, 1549.3888888888887],
        [1, 1662.7222222222222],
        [1, 1780.0555555555557],
        [1, 1820.0555555555554],
        [1, 2026.7222222222222],
        [1, 2069.3888888888887],
        [1, 2156.0555555555557],
        [1, 2200.0555555555557],
        [1, 2473.3888888888887],
        [1, 2762.7222222222217],
        [1, 2862.722222222222],
        [1, 2913.3888888888887],
        [1, 3016.055555555555],
        [1, 3173.3888888888887],
        [1, 3226.7222222222217],
        [1, 3500.055555555555],
        [1, 3669.3888888888887],
        [1, 3842.722222222222],
        [1, 4020.055555555555],
        [1, 4080.0555555555557],
        [1, 4262.722222222222],
        [1, 4386.722222222222],
        [1, 4449.388888888889],
        [1, 4769.388888888889],
    ] as Array<Array<Max<N2D3P9>>>

    it("okay, here is where we are going to figure this out", (): void => {
        const computeMaxN2D3P9GivenMaxNumeratorPrimeExponent = (
            prime: Prime<Numerator>,
            maxNumeratorPrimeExponent: Max<Integer & Exponent<Prime<Numerator>>>
        ): Max<N2D3P9> => {
            return maxNumeratorPrimeExponent === 0 ?
                1 as Max<N2D3P9> :
                (1/9) * prime * (prime/2) ** maxNumeratorPrimeExponent as Max<N2D3P9>
        }

        const MAX_REASONABLE_MAX_N2D3P9 = 5000 as Max<Max<N2D3P9>>

        const breakingPoints = [[],[]] as Array<Array<Max<N2D3P9>>>
        let primeIndex = 2

        while (true) {
            breakingPoints.push([] as Array<Max<N2D3P9>>)
            const prime = PRIMES[ primeIndex ] as Prime<Numerator>

            let maxNumeratorPrimeExponent = 0 as Max<Integer & Exponent<Prime<Numerator>>>
            while (true) {
                const maxN2D3P9 = computeMaxN2D3P9GivenMaxNumeratorPrimeExponent(prime, maxNumeratorPrimeExponent)

                if (maxN2D3P9 > MAX_REASONABLE_MAX_N2D3P9) {
                    break
                }
                breakingPoints[primeIndex].push(maxN2D3P9)

                // TODO: probably high time for an increment helper
                maxNumeratorPrimeExponent = maxNumeratorPrimeExponent + 1 as Max<Integer & Exponent<Prime<Numerator>>>
            }

            if (breakingPoints[primeIndex].length === 1) {
                breakingPoints.pop()
                break
            }

            primeIndex = primeIndex + 1
        }

        expect(breakingPoints).toEqual(expected)
    })
})

