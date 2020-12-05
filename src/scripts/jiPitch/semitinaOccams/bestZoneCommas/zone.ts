import {Comma, increment, Index, isScamonGreater, LogTarget, RecordKey, saveLog} from "@sagittal/general"
import {Semitina} from "../types"
import {MAX_SIZE_PER_SEMITINA_ZONE, SEMITINA_ZONES} from "./constants"

const computeCommasBySemitinaZone = (
    commas: Comma[],
): Record<RecordKey<Index<Semitina>>, Comma[]> => {
    const commaBySemitinaZone: Record<RecordKey<Index<Semitina>>, Comma[]> = SEMITINA_ZONES.reduce(
        (
            commaBySemitinaZone: Record<RecordKey<Index<Semitina>>, Comma[]>,
            semitinaZone: Index<Semitina>,
        ): Record<RecordKey<Semitina>, Comma[]> =>
            ({...commaBySemitinaZone, [semitinaZone]: []}),
        {} as Record<RecordKey<Index<Semitina>>, Comma[]>,
    )

    commas.forEach((comma: Comma): void => {
        let semitinaZone = 0 as Index<Semitina>
        while (isScamonGreater(comma, MAX_SIZE_PER_SEMITINA_ZONE[semitinaZone])) {
            semitinaZone = increment(semitinaZone)
        }
        commaBySemitinaZone[semitinaZone].push(comma)
    })
    saveLog("commas grouped by semitina zone", LogTarget.PROGRESS)

    return commaBySemitinaZone
}

export {
    computeCommasBySemitinaZone,
}
