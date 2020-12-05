import {
    COMMA,
    computeKeyPath,
    computeRationalDecimalGpf,
    Decimal,
    dividesEvenly,
    Filename,
    formatTime,
    ioSettings,
    LogTarget,
    Ms,
    NEWLINE,
    now,
    Numerator,
    readLines,
    saveLog,
    setupScriptAndIo,
    sort,
    stringify,
    sumTexts,
    time,
    TimePrecision,
} from "@sagittal/general"
import {
    computeN2,
    MAX_N2D3P9_FOR_WHICH_POSSIBLE_NUMERATORS_ARE_KNOWN,
    SortedNumeratorPossibilityWithGreaterGpfThanDenominatorPrimeIncludingN2P,
    SortedNumeratorPossibilityWithLesserGpfThanDenominatorPrimeIncludingN2,
} from "@sagittal/system"
import {ScriptGroup} from "../../types"

// Dave's strategy for getting further along: http://forum.sagittal.org/viewtopic.php?p=2481#p2481

const ALREADY_FOUND_NUMERATORS = JSON.parse(`[${readLines("src" as Filename).join(COMMA)}]`)

const ALREADY_SEARCHED_UP_TO_NUMERATOR = 9765625

const MAX_NUMERATOR = 9765625

setupScriptAndIo(ScriptGroup.POPULAR_2_3_FREE_CLASSES as Filename)

const n2pResults: SortedNumeratorPossibilityWithGreaterGpfThanDenominatorPrimeIncludingN2P[] =
    [] as unknown[] as SortedNumeratorPossibilityWithGreaterGpfThanDenominatorPrimeIncludingN2P[]
const n2Results: SortedNumeratorPossibilityWithLesserGpfThanDenominatorPrimeIncludingN2[] =
    [] as unknown[] as SortedNumeratorPossibilityWithLesserGpfThanDenominatorPrimeIncludingN2[]

let previousTime = now()
let currentTime
let previousSuccessfulNumerator = 1

let checkInPoint = ALREADY_SEARCHED_UP_TO_NUMERATOR + 10000

ALREADY_FOUND_NUMERATORS.forEach((numerator: Numerator & Decimal<{integer: true}>): void => {
    const n2 = computeN2(numerator)
    const gpf = computeRationalDecimalGpf(numerator)
    const n2p = n2 * gpf

    saveLog(`${numerator}: ${n2p} (already found numerator)`, LogTarget.PROGRESS)
    n2Results.push({numerator, gpf, n2} as SortedNumeratorPossibilityWithLesserGpfThanDenominatorPrimeIncludingN2)
    n2pResults.push({numerator, gpf, n2p} as SortedNumeratorPossibilityWithGreaterGpfThanDenominatorPrimeIncludingN2P)
})

for (
    let numerator = ALREADY_SEARCHED_UP_TO_NUMERATOR + 2 as Numerator & Decimal<{integer: true}>;
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

    // Haha, well, this name here is a bit goofy, because this is the place which, in fact, determines what the constant
    // Should be thenceforth. I mean, this is the script which finds said numerators such that they become "known".
    if (n2p / 9 > MAX_N2D3P9_FOR_WHICH_POSSIBLE_NUMERATORS_ARE_KNOWN) continue

    currentTime = now()
    const delta = currentTime - previousTime
    previousTime = currentTime

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

sort(n2Results, {by: computeKeyPath("n2")})
sort(n2pResults, {by: computeKeyPath("n2p")})

saveLog(stringify(n2Results, {multiline: true}), LogTarget.FINAL)
saveLog(stringify(n2pResults, {multiline: true}), LogTarget.FINAL)

if (ioSettings.time) saveLog(sumTexts(NEWLINE, `took ${time()}`), LogTarget.FINAL)
