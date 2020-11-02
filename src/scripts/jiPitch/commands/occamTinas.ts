import {
    abs,
    BLANK,
    Cents,
    Comma,
    computeCentsFromPitch,
    computeMonzoMapping,
    computePatentVal,
    computeRange,
    computeSuperScamon,
    Count,
    count,
    Decimal,
    Ed,
    Filename,
    formatCents,
    increment,
    Index,
    isUndefined,
    KeyPath,
    LogTarget,
    max,
    Max,
    Maybe,
    min,
    Monzo,
    Name,
    parseCommands,
    Prime,
    readLines,
    RecordKey,
    saveLog,
    sort,
    stringify,
    subtractRationalScamons,
    Val,
    Window,
} from "../../../general"
import {
    analyzeComma,
    CommaAnalysis,
    CommaClassId,
    computeCommaName,
    computeCommasFrom23FreeRationalMonzo,
    getCommaClass,
    JI_NOTATION,
    N2D3P9,
    TINA,
    Tina,
} from "../../../sagittal"
import {ScriptGroup} from "../../types"

parseCommands(ScriptGroup.JI_PITCH as Filename, [LogTarget.PROGRESS, LogTarget.DETAILS, LogTarget.FINAL])

/***************/
/*  PHASE ONE  */
/***************/

// GATHER ALL THE COMMAS (AND ANALYZE THEM)

const TWO_3_FREE_MONZOS_WITH_N2D3P9_LOWER_THAN_5298 = JSON.parse(
    readLines("src/scripts/jiPitch/input/two3FreeRationalMonzosWithN2D3P9LowerThan5298.txt" as Filename).join(BLANK),
) as Array<Monzo<{rational: true, rough: 5}>>

let commas: Comma[] = []
TWO_3_FREE_MONZOS_WITH_N2D3P9_LOWER_THAN_5298
    .forEach((two3FreeRationalMonzo: Monzo<{rational: true, rough: 5}>): void => {
        commas = commas.concat(
            computeCommasFrom23FreeRationalMonzo(two3FreeRationalMonzo, {maxN2D3P9: 5298.1906468 as Max<N2D3P9>}),
        )
    })
saveLog("commas gathered", LogTarget.PROGRESS)

const commaAnalyses = commas.map((comma: Comma): CommaAnalysis => analyzeComma(comma))
saveLog("commas analyzed", LogTarget.PROGRESS)

sort(commaAnalyses, {by: "cents" as KeyPath})
saveLog("commas sorted", LogTarget.PROGRESS)

// SORT THEM BY SEMITINA ZONE

// TODO: probably I should just actually go by Semitina, like create a new type and all that; then ±range would be 0.5
const SEMITINA_ZONES: Tina[] = computeRange(809 + 1 as Decimal<{integer: true}>)
    .map((t: number): number => t / 2) as number[] as Tina[]
const SEMITINA_PLUS_MINUS_RANGE = 0.25
const MAX_SIZE_PER_SEMITINA_ZONE: Cents[] =
    SEMITINA_ZONES.map((tina: Tina): Cents => TINA * (tina + SEMITINA_PLUS_MINUS_RANGE) as Cents)

const commaAnalysesBySemitinaZone: Record<RecordKey<Tina>, CommaAnalysis[]> = SEMITINA_ZONES.reduce(
    (
        commaAnalysesBySemitinaZone: Record<RecordKey<Tina>, CommaAnalysis[]>,
        semitinaZone: Tina,
    ): Record<RecordKey<Tina>, CommaAnalysis[]> =>
        ({...commaAnalysesBySemitinaZone, [semitinaZone]: []}),
    {} as Record<RecordKey<Tina>, CommaAnalysis[]>,
)

let semitinaZoneIndex = 0 as Index<Tina>
commaAnalyses.forEach((commaAnalysis: CommaAnalysis): void => {
    while (commaAnalysis.cents > MAX_SIZE_PER_SEMITINA_ZONE[semitinaZoneIndex]) {
        semitinaZoneIndex = increment(semitinaZoneIndex)
    }
    commaAnalysesBySemitinaZone[SEMITINA_ZONES[semitinaZoneIndex]].push(commaAnalysis)
})
saveLog("commas grouped by semitina zone", LogTarget.PROGRESS)

// CONVERT RESULTS TO TUPLES OF [SEMITINA ZONE NAMES WHICH ARE ACTUALLY NUMERIC, COMMA ANALYSES] SORTED BY SEMITINA ZONE

const commaAnalysesBySemitinaZoneEntries = sort(
    Object.entries(commaAnalysesBySemitinaZone)
        .map(([semitinaZone, commaAnalyses]: [string, CommaAnalysis[]]): [Tina, CommaAnalysis[]] => {
            return [parseFloat(semitinaZone) as Tina, commaAnalyses]
        }),
    {by: 0 as KeyPath},
) as Array<[unknown, CommaAnalysis[]]> as Array<[Tina, CommaAnalysis[]]>

commaAnalysesBySemitinaZoneEntries.forEach(([tina, commaAnalyses]: [Tina, CommaAnalysis[]]): void => {
    const centsForEachComma = commaAnalyses.map((ca: CommaAnalysis): Cents => ca.cents)
    const maxCents = formatCents(max(...centsForEachComma), {align: false})
    const minCents = formatCents(min(...centsForEachComma), {align: false})
    const countCents = count(centsForEachComma)
    saveLog(`${tina}: ${minCents}-${maxCents}, count ${countCents}`, LogTarget.DETAILS)
})
saveLog("commas grouped by semitina zone converted to sorted tuples", LogTarget.PROGRESS)

// FIND THE SINGLE BEST COMMA IN EACH ZONE

const U = 1.5
const INCLUDE_ERROR_IN_PHASE_1_SCORE = true

const bestCommaPerSemitinaZone = commaAnalysesBySemitinaZoneEntries
    .map(([semitinaZone, commaAnalyses]: [Tina, CommaAnalysis[]]): [Tina, CommaAnalysis] => {
        let bestComma = undefined as Maybe<CommaAnalysis>
        let bestScore = Infinity
        commaAnalyses.forEach((commaAnalysis: CommaAnalysis): void => {
            const n2d3p9 = commaAnalysis.two3FreeClassAnalysis.n2d3p9
            const aas = commaAnalysis.aas
            const ate = commaAnalysis.ate

            let score = Math.log2(n2d3p9) + (aas / 10) ** 1.5 + 2 ** (ate - 10)
            if (INCLUDE_ERROR_IN_PHASE_1_SCORE) {
                const tinas = commaAnalysis.cents / TINA
                const err = abs(2 * tinas - 2 * semitinaZone)
                score = score + U * err
            }

            if (score < bestScore) {
                bestScore = score
                bestComma = commaAnalysis
            }
        })

        if (isUndefined(bestComma)) throw new Error(`No best comma for semitina zone ${semitinaZone}`)

        return [semitinaZone, bestComma]
    })

saveLog(stringify(bestCommaPerSemitinaZone, {multiline: true}), LogTarget.DETAILS)

saveLog("best comma per semitina zone identified", LogTarget.PROGRESS)

/***************/
/*  PHASE TWO  */
/***************/

// COMPUTE METACOMMAS, FILTER FOR CONSISTENCY, AND BUCKET THEM AS YOU GO

const INSANE_NOTATION_ZETA_PEAK_VAL: Val =
    computePatentVal({ed: 8539.00834 as Ed<Window<2>>, window: 2 as Window<2>, primeLimit: 281 as Max<Prime>})

const tinaCandidateBuckets: Record<RecordKey<Tina>, Record<Name<Comma>, Count<Comma>>> = {
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

    bestCommaPerSemitinaZone.forEach(([semitinaZone, bestComma]: [Tina, CommaAnalysis]): void => {
        // Todo: wait, do I want to skip the non-integer semitinas here?

        const metacomma =
            // Todo: need to do it vs. the rounded JI Notation comma
            // Todo: need to do it only against Ultra commas
            computeSuperScamon(subtractRationalScamons(comma, bestComma.pitch)) as unknown as Comma
        const metacommaSize = computeCentsFromPitch(metacomma)
        const metacommaName = computeCommaName(metacomma)
        saveLog(`The metacomma between the Extreme comma ${commaClassId} and the best comma in semitina zone ${semitinaZone} ${bestComma.name} is ${metacommaName} with size ${metacommaSize}`, LogTarget.DETAILS)

        // Todo: filter for consistency here before putting into buckets... maybe?
        const mapping = computeMonzoMapping(metacomma.monzo, INSANE_NOTATION_ZETA_PEAK_VAL)

        // Todo: this is the old bucketing method, by actual metacomma size; you want to do it by rounded int dist bucke
        if (metacommaSize > 0.5 * TINA && metacommaSize < 1.5 * TINA) {
            // @ts-ignore
            tinaCandidateBuckets[1 as Tina][metacommaName] = tinaCandidateBuckets[1 as Tina][metacommaName] || 0
            // @ts-ignore
            tinaCandidateBuckets[1 as Tina][metacommaName] = tinaCandidateBuckets[1 as Tina][metacommaName] + 1
        } else if (metacommaSize > 1.5 * TINA && metacommaSize < 2.5 * TINA) {
            // @ts-ignore
            tinaCandidateBuckets[2 as Tina][metacommaName] = tinaCandidateBuckets[2 as Tina][metacommaName] || 0
            // @ts-ignore
            tinaCandidateBuckets[2 as Tina][metacommaName] = tinaCandidateBuckets[2 as Tina][metacommaName] + 1
        } else if (metacommaSize > 2.5 * TINA && metacommaSize < 3.5 * TINA) {
            // @ts-ignore
            tinaCandidateBuckets[3 as Tina][metacommaName] = tinaCandidateBuckets[3 as Tina][metacommaName] || 0
            // @ts-ignore
            tinaCandidateBuckets[3 as Tina][metacommaName] = tinaCandidateBuckets[3 as Tina][metacommaName] + 1
        } else if (metacommaSize > 3.5 * TINA && metacommaSize < 4.5 * TINA) {
            // @ts-ignore
            tinaCandidateBuckets[4 as Tina][metacommaName] = tinaCandidateBuckets[4 as Tina][metacommaName] || 0
            // @ts-ignore
            tinaCandidateBuckets[4 as Tina][metacommaName] = tinaCandidateBuckets[4 as Tina][metacommaName] + 1
        } else if (metacommaSize > 4.5 * TINA && metacommaSize < 5.5 * TINA) {
            // @ts-ignore
            tinaCandidateBuckets[5 as Tina][metacommaName] = tinaCandidateBuckets[5 as Tina][metacommaName] || 0
            // @ts-ignore
            tinaCandidateBuckets[5 as Tina][metacommaName] = tinaCandidateBuckets[5 as Tina][metacommaName] + 1
        } else if (metacommaSize > 5.5 * TINA && metacommaSize < 6.5 * TINA) {
            // @ts-ignore
            tinaCandidateBuckets[6 as Tina][metacommaName] = tinaCandidateBuckets[6 as Tina][metacommaName] || 0
            // @ts-ignore
            tinaCandidateBuckets[6 as Tina][metacommaName] = tinaCandidateBuckets[6 as Tina][metacommaName] + 1
        } else if (metacommaSize > 6.5 * TINA && metacommaSize < 7.5 * TINA) {
            // @ts-ignore
            tinaCandidateBuckets[7 as Tina][metacommaName] = tinaCandidateBuckets[7 as Tina][metacommaName] || 0
            // @ts-ignore
            tinaCandidateBuckets[7 as Tina][metacommaName] = tinaCandidateBuckets[7 as Tina][metacommaName] + 1
        } else if (metacommaSize > 7.5 * TINA && metacommaSize < 8.5 * TINA) {
            // @ts-ignore
            tinaCandidateBuckets[8 as Tina][metacommaName] = tinaCandidateBuckets[8 as Tina][metacommaName] || 0
            // @ts-ignore
            tinaCandidateBuckets[8 as Tina][metacommaName] = tinaCandidateBuckets[8 as Tina][metacommaName] + 1
        } else if (metacommaSize > 8.5 * TINA && metacommaSize < 9.5 * TINA) {
            // @ts-ignore
            tinaCandidateBuckets[9 as Tina][metacommaName] = tinaCandidateBuckets[9 as Tina][metacommaName] || 0
            // @ts-ignore
            tinaCandidateBuckets[9 as Tina][metacommaName] = tinaCandidateBuckets[9 as Tina][metacommaName] + 1
        }
    })
})

saveLog("metacommas gathered", LogTarget.PROGRESS)

// SORT EACH TINA CANDIDATE BUCKET BY DESCENDING OCCAM AND SHARE FINAL RESULT

const tinaCandidateBucketEntries =
    Object.entries(tinaCandidateBuckets) as Array<[unknown, Record<Name<Comma>, Count<Comma>>]> as
        Array<[Tina, Record<Name<Comma>, Count<Comma>>]>

tinaCandidateBucketEntries.forEach(([tina, metacommas]: [Tina, Record<Name<Comma>, Count<Comma>>]): void => {
    saveLog(`CANDIDATES FOR TINA ${tina}`, LogTarget.FINAL)
    const entries = Object.entries(metacommas) as Array<[Name<Comma>, Count<Comma>]>
    sort(entries, {by: [1] as KeyPath, descending: true})
    saveLog(`${stringify(entries, {multiline: true})}\n\n`, LogTarget.FINAL)
})

// Todo: phase "3" - metametacommas for finding the semitina winner
