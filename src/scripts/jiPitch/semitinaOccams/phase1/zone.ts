import {increment, Index, LogTarget, RecordKey, saveLog} from "../../../../general"
import {CommaAnalysis} from "../../../../sagittal"
import {MAX_SIZE_PER_SEMITINA_ZONE, SEMITINA_ZONES} from "./constants"
import {Semitina} from "../types"

const computeCommaAnalysesBySemitinaZone = (
    commaAnalyses: CommaAnalysis[],
): Record<RecordKey<Index<Semitina>>, CommaAnalysis[]> => {
    const commaAnalysesBySemitinaZone: Record<RecordKey<Index<Semitina>>, CommaAnalysis[]> = SEMITINA_ZONES.reduce(
        (
            commaAnalysesBySemitinaZone: Record<RecordKey<Index<Semitina>>, CommaAnalysis[]>,
            semitinaZone: Index<Semitina>,
        ): Record<RecordKey<Semitina>, CommaAnalysis[]> =>
            ({...commaAnalysesBySemitinaZone, [semitinaZone]: []}),
        {} as Record<RecordKey<Index<Semitina>>, CommaAnalysis[]>,
    )

    let semitinaZone = 0 as Index<Semitina>
    commaAnalyses.forEach((commaAnalysis: CommaAnalysis): void => {
        while (commaAnalysis.cents > MAX_SIZE_PER_SEMITINA_ZONE[semitinaZone]) {
            semitinaZone = increment(semitinaZone)
        }
        commaAnalysesBySemitinaZone[semitinaZone].push(commaAnalysis)
    })
    saveLog("commas grouped by semitina zone", LogTarget.PROGRESS)

    return commaAnalysesBySemitinaZone
}

export {
    computeCommaAnalysesBySemitinaZone,
}
