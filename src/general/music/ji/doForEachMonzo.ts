import { computeTrimmedArray, increment, isUndefined, Maybe, shallowClone } from "../../code"
import { Io, LogTarget, saveLog, stringify } from "../../io"
import { Exponent, IntegerDecimal, IntegerMonzo, NumericProperties, Prime, RationalMonzo } from "../../math"
import { Extrema } from "../../types"

const doForEachMonzo: {
    <T extends NumericProperties, U>(
        primeExponentExtremas: Array<Extrema<IntegerDecimal & Exponent<Prime>>>,
        workFunction: (integerMonzo: IntegerMonzo<T>, ...args: any) => Maybe<U>,
        ...args: any
    ): U[],
    <T extends NumericProperties, U>(
        primeExponentExtremas: Array<Extrema<IntegerDecimal & Exponent<Prime>>>,
        workFunction: (rationalMonzo: RationalMonzo<T>, ...args: any) => Maybe<U>,
        ...args: any
    ): U[],
} = <T extends NumericProperties, U>(
    primeExponentExtremas: Array<Extrema<IntegerDecimal & Exponent<Prime>>>,
    workFunction: (rationalMonzo: RationalMonzo<T>, ...args: any) => Maybe<U>,
    ...args: any
): U[] => {
    saveLog(`prime exponent extremas: ${stringify(primeExponentExtremas)}` as Io, LogTarget.PROGRESS)

    const monzoCount = primeExponentExtremas.reduce(
        (total: number, [min, max]: [number, number]): number => total * (max - min + 1),
        1,
    )
    saveLog(`total monzos to check: ${monzoCount}` as Io, LogTarget.PROGRESS)
    let monzosCheckedCount = 0

    const initialMonzo = primeExponentExtremas.map(
        (
            [minPrimeExponent, _]: Extrema<IntegerDecimal & Exponent<Prime>>,
        ): IntegerDecimal & Exponent<Prime> => minPrimeExponent,
    ) as RationalMonzo
    const finalMonzo = primeExponentExtremas.map(
        (
            [_, maxPrimeExponent]: Extrema<IntegerDecimal & Exponent<Prime>>,
        ): IntegerDecimal & Exponent<Prime> => maxPrimeExponent,
    ) as RationalMonzo

    let currentMonzo = shallowClone(initialMonzo) as RationalMonzo

    const results = [] as U[]
    while (true) {
        // Do the work (trimming has the extra win of shallow cloning, disconnecting from this ticking process)
        const monzoForWork = computeTrimmedArray(currentMonzo)
        const result = workFunction(monzoForWork as RationalMonzo<T>, ...args)
        if (!isUndefined(result)) {
            results.push(result)
        }

        // Log progress
        monzosCheckedCount = increment(monzosCheckedCount)
        if (monzosCheckedCount % 1000000 === 0) {
            saveLog(`done: ${monzosCheckedCount} (${100 * monzosCheckedCount / monzoCount}%)` as Io, LogTarget.PROGRESS)
        }

        // Figure out which index is the first one which hasn't reached its max
        let indexToTick = 0
        // We have reached the max for this c for now (and haven't exceeded the end of the monzo)
        while (indexToTick < currentMonzo.length && currentMonzo[ indexToTick ] === finalMonzo[ indexToTick ]) {
            indexToTick = increment(indexToTick)
        }

        // Ok so now we're at the first prime exponent which isn't at its max

        // Quit now if apparently ALL the terms are at their maxes
        if (indexToTick === currentMonzo.length) {
            break
        }

        // Otherwise increment the prime exponent at this not-yet-maxed index toward its max
        currentMonzo[ indexToTick ] = increment(currentMonzo[ indexToTick ])

        // And reset the prime exponent at every other index before this one to its min,
        // So we can repeat everything we've done so far but for this index being one higher than it was previously
        let i = 0
        while (i < indexToTick) {
            currentMonzo[ i ] = initialMonzo[ i ]
            i = increment(i)
        }
    }

    return results 
}

export {
    doForEachMonzo,
}
