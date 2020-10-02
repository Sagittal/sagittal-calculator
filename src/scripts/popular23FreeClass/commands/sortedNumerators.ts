/* tslint:disable:no-reaching-imports */

import {
    compute23FreeClass,
    computeGpf,
    dividesEvenly,
    IntegerNumerator,
    Io,
    ioSettings,
    KeyPath,
    LogTarget,
    saveLog,
    sort,
    stringify,
} from "../../../general"
import { computeN2D3P9 } from "../../../sagittal/ji/two3FreeClass/n2d3p9"
import {
    SortedNumeratorPossibilityWithGreaterGpfThanDenominatorPrimeIncludingN2P,
    SortedNumeratorPossibilityWithLesserGpfThanDenominatorPrimeIncludingN2,
} from "../../../sagittal/ji/two3FreeClass/n2d3p9/primeExponentExtremas/denominator/sortedNumeratorPossibilities"
import { computeN2 } from "../../../sagittal/ji/two3FreeClass/n2d3p9/primeExponentExtremas/denominator/sortedNumeratorPossibilities/n2"
import { computeN2P } from "../../../sagittal/ji/two3FreeClass/n2d3p9/primeExponentExtremas/denominator/sortedNumeratorPossibilities/n2p"


const MAX_NUMERATOR = 9765625

ioSettings.logTargets.progress = true   // TODO: this didn't default to true
ioSettings.logTargets.final = true

const n2pResults: SortedNumeratorPossibilityWithGreaterGpfThanDenominatorPrimeIncludingN2P[] =
    [] as unknown[] as SortedNumeratorPossibilityWithGreaterGpfThanDenominatorPrimeIncludingN2P[]
const n2Results: SortedNumeratorPossibilityWithLesserGpfThanDenominatorPrimeIncludingN2[] =
    [] as unknown[] as SortedNumeratorPossibilityWithLesserGpfThanDenominatorPrimeIncludingN2[]

for (
    let numerator = 5 as IntegerNumerator;
    numerator <= MAX_NUMERATOR;
    numerator = numerator + 2 as IntegerNumerator
) {
    // 5, 7, _ 11, 13, _, 17, 19
    if (dividesEvenly(numerator, 3)) continue

    // TODO: isn't this just the same as n2p, and could save some calc?
    const n2d3p9 = computeN2D3P9(compute23FreeClass({ decimal: numerator }))

    if (n2d3p9 < 3501) {
        saveLog(`${numerator}: ${n2d3p9}` as Io, LogTarget.PROGRESS)
        const gpf = computeGpf(numerator)
        n2pResults.push({
            numerator,
            gpf,
            n2p: computeN2P(numerator),
        } as SortedNumeratorPossibilityWithGreaterGpfThanDenominatorPrimeIncludingN2P)
        n2Results.push({
            numerator,
            gpf,
            n2: computeN2(numerator),
        } as SortedNumeratorPossibilityWithLesserGpfThanDenominatorPrimeIncludingN2)
    }
}

sort(n2pResults, { by: "n2p" as KeyPath })
sort(n2Results, { by: "n2" as KeyPath })

saveLog(stringify(n2pResults, { multiline: true }) as Io, LogTarget.FINAL)
saveLog(stringify(n2Results, { multiline: true }) as Io, LogTarget.FINAL)
