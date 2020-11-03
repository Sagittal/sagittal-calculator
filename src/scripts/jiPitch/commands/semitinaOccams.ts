import {
    Abs,
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
    indexOfFinalElement,
    ioSettings,
    isEven,
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
    round,
    saveLog,
    sort,
    stringify,
    subtractRationalScamons,
    time,
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
    JiNotationLevelId,
    JI_NOTATION_LEVELS_COMMA_CLASS_IDS,
    N2D3P9,
} from "../../../sagittal"
import {ScriptGroup} from "../../types"
import {computeSemitinaError, SEMITINA, Semitina, SemitinaBucket, SemitinaZone} from "../semitinaOccams"

parseCommands(
    ScriptGroup.JI_PITCH as Filename,
    [LogTarget.PROGRESS, LogTarget.DETAILS, LogTarget.FINAL, LogTarget.ERROR],
)

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

const SEMITINA_ZONES: SemitinaZone[] = computeRange(810 as Decimal<{integer: true}>) as number[] as SemitinaZone[]
const SEMITINA_PLUS_MINUS_RANGE = 0.5
const MAX_SIZE_PER_SEMITINA_ZONE: Cents[] = SEMITINA_ZONES.map((semitinaZone: SemitinaZone): Cents => {
    return SEMITINA * (semitinaZone + SEMITINA_PLUS_MINUS_RANGE) as Cents
})

const commaAnalysesBySemitinaZone: Record<RecordKey<SemitinaZone>, CommaAnalysis[]> = SEMITINA_ZONES.reduce(
    (
        commaAnalysesBySemitinaZone: Record<RecordKey<SemitinaZone>, CommaAnalysis[]>,
        semitinaZone: SemitinaZone,
    ): Record<RecordKey<Semitina>, CommaAnalysis[]> =>
        ({...commaAnalysesBySemitinaZone, [semitinaZone]: []}),
    {} as Record<RecordKey<SemitinaZone>, CommaAnalysis[]>,
)

let semitinaZone = 0 as SemitinaZone
commaAnalyses.forEach((commaAnalysis: CommaAnalysis): void => {
    while (commaAnalysis.cents > MAX_SIZE_PER_SEMITINA_ZONE[semitinaZone]) {
        semitinaZone = increment(semitinaZone)
    }
    commaAnalysesBySemitinaZone[semitinaZone].push(commaAnalysis)
})
saveLog("commas grouped by semitina zone", LogTarget.PROGRESS)

// CONVERT RESULTS TO TUPLES OF [SEMITINA ZONE NAMES WHICH ARE ACTUALLY NUMERIC, COMMA ANALYSES] SORTED BY SEMITINA ZONE

const commaAnalysesBySemitinaZoneEntries = sort(
    Object.entries(commaAnalysesBySemitinaZone)
        .map(([semitinaZone, commaAnalyses]: [string, CommaAnalysis[]]): [SemitinaZone, CommaAnalysis[]] => {
            return [parseInt(semitinaZone) as SemitinaZone, commaAnalyses]
        }),
    {by: 0 as KeyPath},
) as Array<[unknown, CommaAnalysis[]]> as Array<[SemitinaZone, CommaAnalysis[]]>

commaAnalysesBySemitinaZoneEntries.forEach(([semitinaZone, commaAnalyses]: [SemitinaZone, CommaAnalysis[]]): void => {
    const centsForEachComma = commaAnalyses.map((ca: CommaAnalysis): Cents => ca.cents)
    const maxCents = formatCents(max(...centsForEachComma), {align: false})
    const minCents = formatCents(min(...centsForEachComma), {align: false})
    const countCents = count(centsForEachComma)
    saveLog(`${semitinaZone}: ${minCents}-${maxCents}, count ${countCents}`, LogTarget.DETAILS)
})
saveLog("commas grouped by semitina zone converted to sorted tuples", LogTarget.PROGRESS)

// FIND THE SINGLE BEST COMMA IN EACH ZONE

const U = 0.8
const INCLUDE_ERROR_IN_PHASE_1_SCORE = true // False

const bestCommaPerSemitinaZone: Array<[SemitinaZone, CommaAnalysis]> = commaAnalysesBySemitinaZoneEntries
    .map(([semitinaZone, commaAnalyses]: [SemitinaZone, CommaAnalysis[]]): [SemitinaZone, CommaAnalysis] => {
        let bestComma = undefined as Maybe<CommaAnalysis>
        let bestScore = Infinity
        commaAnalyses.forEach((commaAnalysis: CommaAnalysis): void => {
            const n2d3p9 = commaAnalysis.two3FreeClassAnalysis.n2d3p9
            const aas = commaAnalysis.aas
            const ate = commaAnalysis.ate

            let score = Math.log2(n2d3p9) + (aas / 9.65) ** 1.7 + 2 ** (ate - 9.65)
            if (INCLUDE_ERROR_IN_PHASE_1_SCORE) {
                const semitinaError = computeSemitinaError(commaAnalysis.cents, semitinaZone)
                score = score + U * semitinaError
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

// COMPUTE METACOMMAS AND BUCKET THEM AS YOU GO (REPORTING INCONSISTENCIES FOR REFERENCE LATER)

// Todo: we don't actually need the odd buckets anymore, and they can be "tinas", and they can be "candidates" again
//  Since they're all candidates now.
const semitinaBuckets: Record<RecordKey<SemitinaBucket>, Record<RecordKey<Name<Comma>>, Count<Comma>>> = {
    [0]: {},
    [1]: {},
    [2]: {},
    [3]: {},
    [4]: {},
    [5]: {},
    [6]: {},
    [7]: {},
    [8]: {},
    [9]: {},
    [10]: {},
    [11]: {},
    [12]: {},
    [13]: {},
    [14]: {},
    [15]: {},
    [16]: {},
    [17]: {},
    [18]: {},
    [19]: {},
}

const INSANE_NOTATION_ZETA_PEAK_VAL: Val =
    // TODO: 281 has no particular meaning, it was just as high as I had on hand. Please verify none exceed that limit.
    computePatentVal({ed: 8539.00834 as Ed<Window<2>>, window: 2 as Window<2>, primeLimit: 281 as Max<Prime>})

const metacommaNameToMetacommaMap: Record<RecordKey<Name<Comma>>, Comma> = {}

JI_NOTATION_LEVELS_COMMA_CLASS_IDS[JiNotationLevelId.ULTRA].forEach((ultraCommaClassId: CommaClassId): void => {
    const ultraComma = getCommaClass(ultraCommaClassId).pitch

    bestCommaPerSemitinaZone.forEach(([semitinaZone, bestComma]: [SemitinaZone, CommaAnalysis]): void => {
        const metacomma = computeSuperScamon(subtractRationalScamons(ultraComma, bestComma.pitch)) as unknown as Comma
        const metacommaName = computeCommaName(metacomma)

        const ultraCommaSemitinaZone = round(computeCentsFromPitch(ultraComma) / SEMITINA) as SemitinaZone
        const metacommaSemitinaZoneJump = abs(ultraCommaSemitinaZone - semitinaZone) as Abs<SemitinaZone>

        saveLog(`The metacomma between the Extreme comma ${ultraCommaClassId} and the best comma in semitina zone ${semitinaZone} ${bestComma.name} is ${metacommaName} with size ${metacommaSemitinaZoneJump}`, LogTarget.DETAILS)

        if (metacommaSemitinaZoneJump <= 19) {
            // Todo extract maybe this whole thing and whatever else needed for this computation
            const tinaMapping = computeMonzoMapping(metacomma.monzo, INSANE_NOTATION_ZETA_PEAK_VAL)
            const metacommaTinaZoneJump = metacommaSemitinaZoneJump / 2
            const insaneZetaPeakEdoConsistent = tinaMapping === metacommaTinaZoneJump
            const isWholeTina = isEven(semitinaZone)
            if (isWholeTina && !insaneZetaPeakEdoConsistent) {
                saveLog(`FYI, this metacomma for a whole tina (which is within 9.5 tinas and therefore we care about it) is inconsistent! ${metacommaName} maps to ${tinaMapping} steps of 8539.00834-EDO despite being bucketed as a semitina zone jump of ${metacommaSemitinaZoneJump}`, LogTarget.ERROR)
            }

            metacommaNameToMetacommaMap[metacommaName] = metacomma

            semitinaBuckets[metacommaSemitinaZoneJump][metacommaName] =
                semitinaBuckets[metacommaSemitinaZoneJump][metacommaName] || 0 as Count<Comma>
            semitinaBuckets[metacommaSemitinaZoneJump][metacommaName] =
                semitinaBuckets[metacommaSemitinaZoneJump][metacommaName] + 1 as Count<Comma>
        }
    })
})

saveLog("metacommas gathered", LogTarget.PROGRESS)

// SORT EACH SEMITINA BUCKET BY DESCENDING OCCAM AND SHARE FINAL RESULT

const semitinaBucketEntries =
    Object.entries(semitinaBuckets) as Array<[unknown, Record<Name<Comma>, Count<Comma>>]> as
        Array<[SemitinaBucket, Record<Name<Comma>, Count<Comma>>]>

semitinaBucketEntries.forEach(
    ([semitinaBucket, semitinaBucketMetacommas]: [SemitinaBucket, Record<Name<Comma>, Count<Comma>>]): void => {
        const semitinaBucketMetacommasEntries =
            Object.entries(semitinaBucketMetacommas) as Array<[Name<Comma>, Count<Comma>]>

        sort(semitinaBucketMetacommasEntries, {by: [1] as KeyPath, descending: true})

        // Todo consider only printing the whole tinas here, and only the top 20%
        saveLog(`CANDIDATES FOR SEMITINA ${semitinaBucket}:\n${stringify(semitinaBucketMetacommasEntries, {multiline: true})}\n\n`, LogTarget.FINAL)
    },
)

saveLog("candidates for semitina presented", LogTarget.PROGRESS)

/*****************/
/*  PHASE THREE  */
/*****************/

// FIND WHICH METACOMMAS ACROSS THE ENTIRE SERIES OF BEST COMMAS FOR EACH SEMITINA ZONE ARE THE MOST COMMON

const metacommaCounts: Record<RecordKey<Name<Comma>>, Count<Comma>> = {}

saveLog(`AND NOW, METAMETACOMMAS`, LogTarget.FINAL)
bestCommaPerSemitinaZone
    .forEach((bestCommaPerSemitinaZoneEntry: [SemitinaZone, CommaAnalysis], index: number): void => {
        if (index === indexOfFinalElement(bestCommaPerSemitinaZone)) return

        const [semitinaZone, bestCommaInThisSemitinaZone] = bestCommaPerSemitinaZoneEntry

        const subsequentBestCommaInThatSemitinaZone = bestCommaPerSemitinaZone[index + 1][1]

        const metametacomma = subtractRationalScamons(
            bestCommaInThisSemitinaZone.pitch,
            subsequentBestCommaInThatSemitinaZone.pitch,
        ) as Comma
        const metametacommaName = computeCommaName(metametacomma)
        metacommaCounts[metametacommaName] = metacommaCounts[metametacommaName] || 0 as Count<Comma>
        metacommaCounts[metametacommaName] = metacommaCounts[metametacommaName] + 1 as Count<Comma>

        metacommaNameToMetacommaMap[metametacommaName] = metametacomma

        saveLog(`semitina zone ${semitinaZone}: ${stringify(metametacomma)}`, LogTarget.DETAILS)
    })

const metametacommaCountEntries = Object.entries(metacommaCounts) as Array<[Name<Comma>, Count<Comma>]>
sort(metametacommaCountEntries, {by: [1] as KeyPath, descending: true})

saveLog(stringify(metacommaNameToMetacommaMap, {multiline: true}), LogTarget.DETAILS)
saveLog(stringify(metametacommaCountEntries, {multiline: true}), LogTarget.FINAL)

if (ioSettings.time) saveLog(`\n\nCOMPUTING SEMITINA OCCAMS TOOK ${time()}`, LogTarget.FINAL)
