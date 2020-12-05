import {
    Comma,
    computeCentsFromPitch,
    computeKeyPath,
    count,
    formatCents,
    Index,
    LogTarget,
    max,
    min,
    RecordKey,
    saveLog,
    sort,
} from "@sagittal/general"
import {Semitina} from "../types"

const computeCommasBySemitinaZoneEntries = (
    commasBySemitinaZone: Record<RecordKey<Index<Semitina>>, Comma[]>,
): Array<[Index<Semitina>, Comma[]]> => {
    const commasBySemitinaZoneEntries = sort(
        Object.entries(commasBySemitinaZone)
            .map(([semitinaZone, commas]: [string, Comma[]]): [Index<Semitina>, Comma[]] => {
                return [parseInt(semitinaZone) as Index<Semitina>, commas]
            }),
        {by: computeKeyPath(0)},
    ) as Array<[unknown, Comma[]]> as Array<[Index<Semitina>, Comma[]]>

    commasBySemitinaZoneEntries
        .forEach(([semitinaZone, commas]: [Index<Semitina>, Comma[]]): void => {
            const centsForEachComma = commas.map(computeCentsFromPitch)
            const maxCents = formatCents(max(...centsForEachComma), {align: false})
            const minCents = formatCents(min(...centsForEachComma), {align: false})
            const countCents = count(centsForEachComma)
            saveLog(`${semitinaZone}: ${minCents}-${maxCents}, count ${countCents}`, LogTarget.DETAILS)
        })
    saveLog("commas grouped by semitina zone converted to sorted tuples", LogTarget.PROGRESS)

    return commasBySemitinaZoneEntries
}

export {
    computeCommasBySemitinaZoneEntries,
}
