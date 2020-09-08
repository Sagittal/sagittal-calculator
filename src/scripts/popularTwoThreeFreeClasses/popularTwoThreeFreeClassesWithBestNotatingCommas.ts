import {
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
import { computePrimeExponentExtremasGivenMaxN2D3P9, computeTwoThreeFreeClass, N2D3P9 } from "../../sagittal"
import { POPULAR_TWO_THREE_FREE_CLASSES_SCRIPT_GROUP } from "./constants"
import { computeMaybePopularTwoThreeFreeClassWithBestNotatingComma } from "./maybePopularTwoThreeFreeClassWithBestNotatingComma"
import { PopularTwoThreeFreeClassWithBestNotatingComma } from "./types"

const computePopularTwoThreeFreeClassesWithBestNotatingCommas = (
    maxN2D3P9: Max<N2D3P9>,
): Array<Ranked<PopularTwoThreeFreeClassWithBestNotatingComma>> => {
    saveLog(
        "About to calculate prime exponent extremas given max N2D3P9" as Io,
        LogTarget.PROGRESS,
        POPULAR_TWO_THREE_FREE_CLASSES_SCRIPT_GROUP,
    )
    const primeExponentExtremasGivenMaxN2D3P9 = computePrimeExponentExtremasGivenMaxN2D3P9(maxN2D3P9)
    saveLog(
        `prime exponent extremas given max N2D3P9: ${stringify(primeExponentExtremasGivenMaxN2D3P9)}` as Io,
        LogTarget.PROGRESS,
        POPULAR_TWO_THREE_FREE_CLASSES_SCRIPT_GROUP,
    )

    const monzoCount = primeExponentExtremasGivenMaxN2D3P9.reduce((total, [min, max]) => total * (max - min + 1), 1)
    saveLog(
        `total monzos to check: ${monzoCount}` as Io,
        LogTarget.PROGRESS,
        POPULAR_TWO_THREE_FREE_CLASSES_SCRIPT_GROUP
    )
    let monzosCheckedCount = 0

    const initialMonzo: Monzo = primeExponentExtremasGivenMaxN2D3P9.map(([minPrimeExponent, _]) => minPrimeExponent)
    const finalMonzo: Monzo = primeExponentExtremasGivenMaxN2D3P9.map(([_, maxPrimeExponent]) => maxPrimeExponent)
    let twoThreeFreeMonzo: Monzo = shallowClone(initialMonzo)

    const popularTwoThreeFreeClassesWithBestNotatingCommas = [] as Array<PopularTwoThreeFreeClassWithBestNotatingComma>
    while (true) {
        // do the work
        const maybePopularTwoThreeFreeClassWithBestNotatingComma =
            computeMaybePopularTwoThreeFreeClassWithBestNotatingComma(
                twoThreeFreeMonzo,
                maxN2D3P9
            )

        // log progress
        monzosCheckedCount = monzosCheckedCount + 1
        if (monzosCheckedCount % 1000000 === 0) {
            saveLog(
                `done: ${monzosCheckedCount} (${100 * monzosCheckedCount / monzoCount}%)` as Io,
                LogTarget.PROGRESS,
                POPULAR_TWO_THREE_FREE_CLASSES_SCRIPT_GROUP,
            )
        }

        if (!isUndefined(maybePopularTwoThreeFreeClassWithBestNotatingComma)) {
            saveLog(
                stringify(maybePopularTwoThreeFreeClassWithBestNotatingComma) as Io,
                LogTarget.PROGRESS,
                POPULAR_TWO_THREE_FREE_CLASSES_SCRIPT_GROUP,
            )
            popularTwoThreeFreeClassesWithBestNotatingCommas.push(maybePopularTwoThreeFreeClassWithBestNotatingComma)
        }

        // figure out which index is the first one which hasn't reached its max
        let indexToTick = 0
        // we have reached the max for this term for now (and haven't exceeded the end of the monzo)
        while (
            indexToTick < twoThreeFreeMonzo.length &&
            twoThreeFreeMonzo[ indexToTick ] === finalMonzo[ indexToTick ]
            ) {
            indexToTick = indexToTick + 1
        }

        // ok so now we're at the first term which isn't at its max

        // quit now if apparently ALL the terms are at their maxes
        if (indexToTick === twoThreeFreeMonzo.length) {
            break
        }

        // otherwise increment the term at this not-yet-maxed index toward its max
        twoThreeFreeMonzo[ indexToTick ] = twoThreeFreeMonzo[ indexToTick ] + 1 as Integer & Exponent<Prime>

        // and reset the term at every other index before this one to its min,
        // so we can repeat everything we've done so far but for this index being one higher than it was previously
        let i = 0
        while (i < indexToTick) {
            twoThreeFreeMonzo[ i ] = initialMonzo[ i ]
            i = i + 1
        }
    }

    return rank(popularTwoThreeFreeClassesWithBestNotatingCommas, { by: "n2d3p9", strategy: RankStrategy.FRACTIONAL })
}

export {
    computePopularTwoThreeFreeClassesWithBestNotatingCommas,
}
