// tslint:disable no-reaching-imports max-line-length

import {
    abs,
    Abs,
    BLANK,
    Cents,
    Comma,
    computeCentsFromPitch,
    computeRange,
    computeSuperScamon,
    Count,
    count,
    Decimal,
    Exponent,
    Filename,
    formatCents,
    isUndefined,
    KeyPath,
    LogTarget,
    max,
    Max,
    Maybe,
    min,
    Min,
    Monzo,
    Name,
    parseCommands,
    Prime,
    readLines,
    RecordKey,
    saveLog,
    Scamon,
    sort,
    stringify,
} from "../general"
import {subtractRationalScamons} from "../general/math/rational/scamon"
import {
    ApotomeSlope,
    CommaClassId,
    computeCommaName,
    getCommaClass,
    HALF_APOTOME,
    JI_NOTATION,
    N2D3P9,
} from "../sagittal"
import {analyzeComma, CommaAnalysis, computeCommasFrom23FreeRationalMonzo} from "../sagittal/ji/comma"
import {TINA, Tina} from "../sagittal/notations/ji"
import {ScriptGroup} from "./types"

parseCommands(ScriptGroup.TMP as Filename, [LogTarget.DETAILS, LogTarget.FINAL])

// This is a great place to paste stuff you need to run without Jasmine swallowing the stacktrace!
// Just paste whatever you need here and run `npm run tmp`.

const MONZOS_TO_CHECK =
    JSON.parse(readLines("src/scripts/tmp.txt" as Filename).join(BLANK)) as Array<Monzo<{rational: true, rough: 5}>>

let commas: Comma[] = []

MONZOS_TO_CHECK.forEach((two3FreeRationalMonzoToCheck: Monzo<{rational: true, rough: 5}>): void => {
    commas = commas.concat(
        computeCommasFrom23FreeRationalMonzo(
            two3FreeRationalMonzoToCheck,
            {
                lowerBound: {monzo: [] as unknown[]} as Min<Scamon>,
                upperBound: HALF_APOTOME as Scamon as Max<Scamon>,
                maxAte: 15 as Max<Abs<Decimal<{integer: true}> & Exponent<3 & Prime>>>,
                maxAas: 14 as Max<Abs<ApotomeSlope>>,
                maxN2D3P9: 5298.1906468 as Max<N2D3P9>,
            },
        ),
    )
})

const TINAS_TO_CHECK_FOR_THIS: Tina[] = computeRange(809 + 1 as Decimal<{integer: true}>)
    .map((t: number): number => t / 2) as number[] as Tina[]
const TINA_COMMAS_PLUS_MINUS_RANGE_FOR_THIS = 0.25

const MAX_TINA_SIZES_FOR_THIS: Cents[] =
    TINAS_TO_CHECK_FOR_THIS.map((tina: Tina): Cents => TINA * (tina + TINA_COMMAS_PLUS_MINUS_RANGE_FOR_THIS) as Cents)

const commaAnalyses = commas.map((comma: Comma): CommaAnalysis => analyzeComma(comma))
sort(commaAnalyses, {by: "cents" as KeyPath})

const commaAnalysesByTina: Record<RecordKey<Tina>, CommaAnalysis[]> = TINAS_TO_CHECK_FOR_THIS.reduce(
    (
        commaAnalysesByTina: Record<RecordKey<Tina>, CommaAnalysis[]>,
        tina: Tina,
    ): Record<RecordKey<Tina>, CommaAnalysis[]> =>
        ({...commaAnalysesByTina, [tina]: []}),
    {} as Record<RecordKey<Tina>, CommaAnalysis[]>,
)
// Console.log(Object.keys(commaAnalysesByTina))

let currentTina = 0
commaAnalyses.forEach((commaAnalysis: CommaAnalysis): void => {
    while (commaAnalysis.cents > MAX_TINA_SIZES_FOR_THIS[currentTina * 2]) {
        currentTina = currentTina + 0.5
    }
    // If (currentTina > 400) console.log(currentTina)
    commaAnalysesByTina[currentTina].push(commaAnalysis)
})

const commaAnalysesEntries = sort(
    Object.entries(commaAnalysesByTina).map(([k, v]: [string, CommaAnalysis[]]): [Tina, CommaAnalysis[]] => {
        return [parseFloat(k) as Tina, v]
    }),
    {by: 0 as KeyPath},
) as Array<[unknown, CommaAnalysis[]]> as Array<[Tina, CommaAnalysis[]]>

commaAnalysesEntries.forEach(([tina, commaAnalyses]: [Tina, CommaAnalysis[]]): void => {
    const centses = commaAnalyses.map((ca: CommaAnalysis): Cents => ca.cents)
    const maxCents = formatCents(max(...centses), {align: false})
    const minCents = formatCents(min(...centses), {align: false})
    const countCents = count(centses)
    // SaveLog(`${tina}: ${minCents}-${maxCents}, count ${countCents}`, LogTarget.DETAILS)
})

const U = 1.5

const bestCommasPerZone = commaAnalysesEntries.map(([tina, commaAnalyses]: [Tina, CommaAnalysis[]]): [Tina, CommaAnalysis] => {
    let bestCommaAnalysis = undefined as Maybe<CommaAnalysis>
    let bestScore = Infinity
    commaAnalyses.forEach((commaAnalysis: CommaAnalysis): void => {
        const n2d3p9 = commaAnalysis.two3FreeClassAnalysis.n2d3p9
        const aas = commaAnalysis.aas
        const ate = commaAnalysis.ate

        const tinas = commaAnalysis.cents / TINA
        const err = abs(2 * tinas - 2 * tina)

        const score = Math.log2(n2d3p9) + (aas / 10) ** 1.5 + 2 ** (ate - 10) + U * err

        if (score < bestScore) {
            bestScore = score
            bestCommaAnalysis = commaAnalysis
        }
    })

    if (isUndefined(bestCommaAnalysis)) throw new Error(`No best comma analysis for tina ${tina}`)

    return [tina, bestCommaAnalysis]
})

// SaveLog(stringify(bestCommasPerZone, {multiline: true}), LogTarget.PROGRESS)

const finalBuckets: Record<RecordKey<Tina>, Record<Name<Comma>, Count<Comma>>> = {
    [0.5]: {},
    [1]: {},
    [2]: {},
    [3]: {},
    [4]: {},
    [5]: {},
    [6]: {},
    [7]: {},
    [8]: {},
    [9]: {},
}
JI_NOTATION.forEach((commaClassId: CommaClassId): void => {
    const comma = getCommaClass(commaClassId).pitch

    // Don't actually need it to still be entries i guess, because it doesn't matter which it is anymore
    bestCommasPerZone.forEach(([tina, bestCommaAnalysis]: [Tina, CommaAnalysis]): void => {
        const metacomma = computeSuperScamon(subtractRationalScamons(comma, bestCommaAnalysis.pitch)) as unknown as Comma
        const size = computeCentsFromPitch(metacomma)
        const name = computeCommaName(metacomma)
        // SaveLog(`extreme comma: ${commaClassId}, best 0.5 tina comma: ${bestCommaAnalysis.name}, metacomma size ${size}, lets see now ${stringify(metacomma)} metacomma name ${name}`, LogTarget.PROGRESS)

        if (size > 0.25 * TINA && size < 0.75 * TINA) {
            // @ts-ignore
            finalBuckets[0.5 as Tina][name] = finalBuckets[0.5 as Tina][name] || 0
            // @ts-ignore
            finalBuckets[0.5 as Tina][name] = finalBuckets[0.5 as Tina][name] + 1
        } else if (size > 0.75 * TINA && size < 1.5 * TINA) {
            // @ts-ignore
            finalBuckets[1 as Tina][name] = finalBuckets[1 as Tina][name] || 0
            // @ts-ignore
            finalBuckets[1 as Tina][name] = finalBuckets[1 as Tina][name] + 1
        } else if (size > 1.5 * TINA && size < 2.5 * TINA) {
            // @ts-ignore
            finalBuckets[2 as Tina][name] = finalBuckets[2 as Tina][name] || 0
            // @ts-ignore
            finalBuckets[2 as Tina][name] = finalBuckets[2 as Tina][name] + 1
        } else if (size > 2.5 * TINA && size < 3.5 * TINA) {
            // @ts-ignore
            finalBuckets[3 as Tina][name] = finalBuckets[3 as Tina][name] || 0
            // @ts-ignore
            finalBuckets[3 as Tina][name] = finalBuckets[3 as Tina][name] + 1
        } else if (size > 3.5 * TINA && size < 4.5 * TINA) {
            // @ts-ignore
            finalBuckets[4 as Tina][name] = finalBuckets[4 as Tina][name] || 0
            // @ts-ignore
            finalBuckets[4 as Tina][name] = finalBuckets[4 as Tina][name] + 1
        } else if (size > 4.5 * TINA && size < 5.5 * TINA) {
            // @ts-ignore
            finalBuckets[5 as Tina][name] = finalBuckets[5 as Tina][name] || 0
            // @ts-ignore
            finalBuckets[5 as Tina][name] = finalBuckets[5 as Tina][name] + 1
        } else if (size > 5.5 * TINA && size < 6.5 * TINA) {
            // @ts-ignore
            finalBuckets[6 as Tina][name] = finalBuckets[6 as Tina][name] || 0
            // @ts-ignore
            finalBuckets[6 as Tina][name] = finalBuckets[6 as Tina][name] + 1
        } else if (size > 6.5 * TINA && size < 7.5 * TINA) {
            // @ts-ignore
            finalBuckets[7 as Tina][name] = finalBuckets[7 as Tina][name] || 0
            // @ts-ignore
            finalBuckets[7 as Tina][name] = finalBuckets[7 as Tina][name] + 1
        } else if (size > 7.5 * TINA && size < 8.5 * TINA) {
            // @ts-ignore
            finalBuckets[8 as Tina][name] = finalBuckets[8 as Tina][name] || 0
            // @ts-ignore
            finalBuckets[8 as Tina][name] = finalBuckets[8 as Tina][name] + 1
        } else if (size > 8.5 * TINA && size < 9.5 * TINA) {
            // @ts-ignore
            finalBuckets[9 as Tina][name] = finalBuckets[9 as Tina][name] || 0
            // @ts-ignore
            finalBuckets[9 as Tina][name] = finalBuckets[9 as Tina][name] + 1
        }
    })
})

saveLog(stringify(finalBuckets, {multiline: true}), LogTarget.FINAL)

const finalBucketEntries =
    Object.entries(finalBuckets) as Array<[unknown, Record<Name<Comma>, Count<Comma>>]> as
        Array<[RecordKey<Tina>, Record<Name<Comma>, Count<Comma>>]>
// FinalBucketEntries.forEach(([tina, metacommas]: [RecordKey<Tina>, Record<Name<Comma>, Count<Comma>>]): void => {
//     Let bestCount = 0
//     Let bestComma = undefined
//     Const entries = Object.entries(metacommas) as Array<[Name<Comma>, Count<Comma>]>
//     Entries.forEach(([metacomma, count]: [Name<Comma>, Count<Comma>]): void => {
//         If (count > bestCount) {
//             BestCount = count
//             BestComma = metacomma
//         }
//     })
//
//     // no i should just sort them yeah?
//     Console.log(`${tina}: ${bestComma} w/ count ${bestCount}`)
// })

finalBucketEntries.forEach(([tina, metacommas]: [RecordKey<Tina>, Record<Name<Comma>, Count<Comma>>]): void => {
    saveLog(`\n\n FINAL RESULT FOR TINA ${tina}`, LogTarget.FINAL)
    const entries = Object.entries(metacommas) as Array<[Name<Comma>, Count<Comma>]>
    sort(entries, {by: [1] as KeyPath, descending: true})
    saveLog(stringify(entries, {multiline: true}), LogTarget.FINAL)
})
