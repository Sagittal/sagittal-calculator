/* tslint:disable:no-reaching-imports */

import {
    computeRationalDecimalGpf,
    Decimal,
    dividesEvenly,
    Filename,
    Io,
    KeyPath,
    LogTarget,
    Numerator,
    parseCommands,
    saveLog,
    sort,
    stringify,
} from "../../../general"
import {
    SortedNumeratorPossibilityWithGreaterGpfThanDenominatorPrimeIncludingN2P,
    SortedNumeratorPossibilityWithLesserGpfThanDenominatorPrimeIncludingN2,
} from "../../../sagittal/ji/two3FreeClass/n2d3p9/primeExponentExtremas/denominator/sortedNumeratorPossibilities"
import { computeN2 } from "../../../sagittal/ji/two3FreeClass/n2d3p9/primeExponentExtremas/denominator/sortedNumeratorPossibilities/n2"
import { ScriptGroup } from "../../types"

// Try out Dave's strategy for getting further along: http://forum.sagittal.org/viewtopic.php?p=2481#p2481

const MAX_NUMERATOR = 9765625

parseCommands(ScriptGroup.POPULAR_2_3_FREE_CLASSES as Filename, [LogTarget.PROGRESS, LogTarget.FINAL])

const n2pResults: SortedNumeratorPossibilityWithGreaterGpfThanDenominatorPrimeIncludingN2P[] =
    [] as unknown[] as SortedNumeratorPossibilityWithGreaterGpfThanDenominatorPrimeIncludingN2P[]
const n2Results: SortedNumeratorPossibilityWithLesserGpfThanDenominatorPrimeIncludingN2[] =
    [] as unknown[] as SortedNumeratorPossibilityWithLesserGpfThanDenominatorPrimeIncludingN2[]

for (
    let numerator = 5 as Numerator & Decimal<{ integer: true }>;
    numerator <= MAX_NUMERATOR;
    numerator = numerator + 2 as Numerator & Decimal<{ integer: true }>
) {
    // 5, 7, _ 11, 13, _, 17, 19
    if (dividesEvenly(numerator, 3)) continue

    const n2 = computeN2(numerator)
    const gpf = computeRationalDecimalGpf(numerator)
    const n2p = n2 * gpf

    if (n2p / 9 > 5298.2) continue

    saveLog(`${numerator}: ${n2p}` as Io, LogTarget.PROGRESS)
    n2Results.push({ numerator, gpf, n2 } as SortedNumeratorPossibilityWithLesserGpfThanDenominatorPrimeIncludingN2)
    n2pResults.push({ numerator, gpf, n2p } as SortedNumeratorPossibilityWithGreaterGpfThanDenominatorPrimeIncludingN2P)
}

sort(n2Results, { by: "n2" as KeyPath })
sort(n2pResults, { by: "n2p" as KeyPath })

saveLog(stringify(n2Results, { multiline: true }) as Io, LogTarget.FINAL)
saveLog(stringify(n2pResults, { multiline: true }) as Io, LogTarget.FINAL)
