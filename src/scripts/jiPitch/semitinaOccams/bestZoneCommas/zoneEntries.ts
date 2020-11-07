import {
    Cents,
    count,
    formatCents,
    Index,
    KeyPath,
    LogTarget,
    max,
    min,
    RecordKey,
    saveLog,
    sort,
} from "../../../../general"
import {CommaAnalysis} from "../../../../sagittal"
import {Semitina} from "../types"

const computeCommaAnalysesBySemitinaZoneEntries = (
    commaAnalysesBySemitinaZone: Record<RecordKey<Index<Semitina>>, CommaAnalysis[]>,
): Array<[Index<Semitina>, CommaAnalysis[]]> => {
    const commaAnalysesBySemitinaZoneEntries = sort(
        Object.entries(commaAnalysesBySemitinaZone)
            .map(([semitinaZone, commaAnalyses]: [string, CommaAnalysis[]]): [Index<Semitina>, CommaAnalysis[]] => {
                return [parseInt(semitinaZone) as Index<Semitina>, commaAnalyses]
            }),
        {by: 0 as KeyPath},
    ) as Array<[unknown, CommaAnalysis[]]> as Array<[Index<Semitina>, CommaAnalysis[]]>

    commaAnalysesBySemitinaZoneEntries
        .forEach(([semitinaZone, commaAnalyses]: [Index<Semitina>, CommaAnalysis[]]): void => {
            const centsForEachComma = commaAnalyses.map((ca: CommaAnalysis): Cents => ca.cents)
            const maxCents = formatCents(max(...centsForEachComma), {align: false})
            const minCents = formatCents(min(...centsForEachComma), {align: false})
            const countCents = count(centsForEachComma)
            saveLog(`${semitinaZone}: ${minCents}-${maxCents}, count ${countCents}`, LogTarget.DETAILS)
        })
    saveLog("commas grouped by semitina zone converted to sorted tuples", LogTarget.PROGRESS)

    return commaAnalysesBySemitinaZoneEntries
}

export {
    computeCommaAnalysesBySemitinaZoneEntries,
}
