import {
    computeTrimmedArray,
    Exponent,
    Integer,
    Io,
    isUndefined,
    LogTarget,
    Max,
    Monzo,
    Prime,
    rank,
    Ranked,
    RankStrategy,
    saveLog,
    shallowClone,
    stringify,
} from "../../general"
import { computePrimeExponentExtremasGivenMaxN2D3P9, N2D3P9 } from "../../sagittal"
import { POPULAR_RATIOS_SCRIPT_GROUP } from "./constants"
import { computeMaybePopularRatioWithBestNotatingComma } from "./maybePopularRatioWithBestNotatingComma"
import { PopularRatioWithBestNotatingComma } from "./types"

const computePopularRatiosWithBestNotatingCommas = (
    maxN2D3P9: Max<N2D3P9>,
): Array<Ranked<PopularRatioWithBestNotatingComma>> => {
    saveLog(
        "About to calculate prime exponent extremas given max N2D3P9" as Io,
        LogTarget.PROGRESS,
        POPULAR_RATIOS_SCRIPT_GROUP,
    )
    const primeExponentExtremasGivenMaxN2D3P9 = computePrimeExponentExtremasGivenMaxN2D3P9(maxN2D3P9)
    saveLog(
        `prime exponent extremas given max N2D3P9: ${stringify(primeExponentExtremasGivenMaxN2D3P9)}` as Io,
        LogTarget.PROGRESS,
        POPULAR_RATIOS_SCRIPT_GROUP,
    )

    const initialMonzo: Monzo = primeExponentExtremasGivenMaxN2D3P9.map(([minPrimeExponent, _]) => minPrimeExponent)
    const finalMonzo: Monzo = primeExponentExtremasGivenMaxN2D3P9.map(([_, maxPrimeExponent]) => maxPrimeExponent)
    let monzo: Monzo = shallowClone(initialMonzo)

    const popularRatios = [] as Array<PopularRatioWithBestNotatingComma>
    while (true) {
        // do the work
        const maybePopularRatio = computeMaybePopularRatioWithBestNotatingComma(computeTrimmedArray(monzo), maxN2D3P9)

        if (!isUndefined(maybePopularRatio)) {
            saveLog(stringify(maybePopularRatio) as Io, LogTarget.PROGRESS, POPULAR_RATIOS_SCRIPT_GROUP)
            popularRatios.push(maybePopularRatio)
        }

        // figure out which index is the first one which hasn't reached its max
        let indexToTick = 0
        // we have reached the max for this term for now (and haven't exceeded the end of the monzo)
        while (indexToTick < monzo.length && monzo[ indexToTick ] === finalMonzo[ indexToTick ]) {
            indexToTick = indexToTick + 1
        }

        // ok so now we're at the first term which isn't at its max
        saveLog(`have now reached prime index ${indexToTick}` as Io, LogTarget.PROGRESS, POPULAR_RATIOS_SCRIPT_GROUP)

        // quit now if apparently ALL the terms are at their maxes
        if (indexToTick === monzo.length) {
            break
        }

        // otherwise increment the term at this not-yet-maxed index toward its max
        monzo[ indexToTick ] = monzo[ indexToTick ] + 1 as Integer & Exponent<Prime>

        // and reset the term at every other index before this one to its min,
        // so we can repeat everything we've done so far but for this index being one higher than it was previously
        let i = 0
        while (i < indexToTick) {
            monzo[ i ] = initialMonzo[ i ]
            i = i + 1
        }
    }

    return rank(popularRatios, { by: "n2d3p9", strategy: RankStrategy.FRACTIONAL })
}

export {
    computePopularRatiosWithBestNotatingCommas,
}
