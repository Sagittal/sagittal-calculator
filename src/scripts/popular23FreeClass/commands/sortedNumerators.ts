/* tslint:disable:no-reaching-imports */

import {
    computeRationalDecimalGpf,
    Decimal,
    dividesEvenly,
    Filename,
    formatTime,
    KeyPath,
    LogTarget,
    Ms,
    now,
    Numerator,
    parseCommands,
    saveLog,
    sort,
    stringify,
    TimePrecision,
} from "../../../general"
import {
    SortedNumeratorPossibilityWithGreaterGpfThanDenominatorPrimeIncludingN2P,
    SortedNumeratorPossibilityWithLesserGpfThanDenominatorPrimeIncludingN2,
} from "../../../sagittal/ji/two3FreeClass/n2d3p9/primeExponentExtremas/denominator/sortedNumeratorPossibilities"
import {computeN2} from "../../../sagittal/ji/two3FreeClass/n2d3p9/primeExponentExtremas/denominator/sortedNumeratorPossibilities/n2"
import {ScriptGroup} from "../../types"

// Try out Dave's strategy for getting further along: http://forum.sagittal.org/viewtopic.php?p=2481#p2481

const MAX_NUMERATOR = 9765625

parseCommands(ScriptGroup.POPULAR_2_3_FREE_CLASSES as Filename, [LogTarget.PROGRESS, LogTarget.FINAL])

const n2pResults: SortedNumeratorPossibilityWithGreaterGpfThanDenominatorPrimeIncludingN2P[] =
    [] as unknown[] as SortedNumeratorPossibilityWithGreaterGpfThanDenominatorPrimeIncludingN2P[]
const n2Results: SortedNumeratorPossibilityWithLesserGpfThanDenominatorPrimeIncludingN2[] =
    [] as unknown[] as SortedNumeratorPossibilityWithLesserGpfThanDenominatorPrimeIncludingN2[]

let previousTime = now()
let time
let previousSuccessfulNumerator = 1

let checkInPoint = 10000

for (
    let numerator = 5 as Numerator & Decimal<{integer: true}>;
    numerator <= MAX_NUMERATOR;
    numerator = numerator + 2 as Numerator & Decimal<{integer: true}>
) {
    // 5, 7, _ 11, 13, _, 17, 19
    if (dividesEvenly(numerator, 3)) continue

    if (numerator > checkInPoint) {
        checkInPoint = checkInPoint + 10000
        saveLog(`(past check-in point ${checkInPoint})`, LogTarget.PROGRESS)
    }

    const n2 = computeN2(numerator)
    const gpf = computeRationalDecimalGpf(numerator)
    const n2p = n2 * gpf

    if (n2p / 9 > 5298.2) continue

    time = now()
    const delta = time - previousTime
    previousTime = time

    const numeratorsChecked = (numerator - previousSuccessfulNumerator) / 3
    previousSuccessfulNumerator = numerator

    const averageTimeSpentPerNumeratorSincePreviousSuccess = delta / numeratorsChecked
    const numeratorsRemaining = (MAX_NUMERATOR - numerator) / 3
    const timeRemainingEstimate = formatTime(
        numeratorsRemaining * averageTimeSpentPerNumeratorSincePreviousSuccess as Ms,
        TimePrecision.M,
    )

    saveLog(`${numerator}: ${n2p} (~${timeRemainingEstimate} remaining; avg/num since previous success ${formatTime(averageTimeSpentPerNumeratorSincePreviousSuccess as Ms)})`, LogTarget.PROGRESS)
    n2Results.push({numerator, gpf, n2} as SortedNumeratorPossibilityWithLesserGpfThanDenominatorPrimeIncludingN2)
    n2pResults.push({numerator, gpf, n2p} as SortedNumeratorPossibilityWithGreaterGpfThanDenominatorPrimeIncludingN2P)
}

sort(n2Results, {by: "n2" as KeyPath})
sort(n2pResults, {by: "n2p" as KeyPath})

// TODO: Alright, this failed overnight because of this:
//  Error: This integer 8368831 contains primes which are too big; remainder is 8368831
//  So you'll need to add more primes to the list, say, up to 10 million
//  And because the script has been designed to only sort and spit out output if it makes it to the very end, you'll
//  Need to revise things here a little bit so it can work with the results thus far, since it got so close to finishing
//  (Well, maybe it still had like 6 hours left, since it just keeps getting slower and slower as it goes higher).
//  Those results have been saved in `sortedNumeratorsPreCrash.txt`. I wouldn't recommend revising this script to
//  Work other than to need to make it to the end in order to spit out final output, since, of course, you do need to
//  Sort it, so it just doesn't make any sense to have it be able to cut off at any moment and that be okay. But you
//  Will need to recalculate the n2 and n2p results for the numerators up to 8368831 which you already determined were
//  The desired ones, and I think that the determination was the super expensive part and parsing those and computing
//  N2 and N2P will be relatively speedy.
saveLog(stringify(n2Results, {multiline: true}), LogTarget.FINAL)
saveLog(stringify(n2pResults, {multiline: true}), LogTarget.FINAL)
