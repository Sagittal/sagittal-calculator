import {
    Abs,
    abs,
    Comma,
    computeCentsFromPitch,
    computeSuperScamon,
    Count,
    Index,
    isEven,
    LogTarget,
    Name,
    RecordKey,
    round,
    saveLog,
    subtractRationalScamons,
} from "../../../../general"
import {
    CommaAnalysis,
    CommaClassId,
    computeCommaName,
    getCommaClass,
    JiNotationLevelId,
    JI_NOTATION_LEVELS_COMMA_CLASS_IDS,
} from "../../../../sagittal"
import {inconsistentMetacommas, metacommaNameToMetacommaMap} from "../../globals"
import {SEMITINA} from "../constants"
import {Semitina} from "../types"
import {checkMetacommaConsistency} from "./consistency"
import {Occam, TinaBucket} from "./types"

const computeTinaCandidateBucketOccams = (
    bestCommaPerSemitinaZone: Array<[Index<Semitina>, CommaAnalysis]>,
): Record<RecordKey<TinaBucket>, Record<RecordKey<Name<Comma>>, Occam>> => {
    const tinaCandidateBucketOccams: Record<RecordKey<TinaBucket>, Record<RecordKey<Name<Comma>>, Occam>> = {
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

    JI_NOTATION_LEVELS_COMMA_CLASS_IDS[JiNotationLevelId.ULTRA].forEach((ultraCommaClassId: CommaClassId): void => {
        const ultraComma = getCommaClass(ultraCommaClassId).pitch

        bestCommaPerSemitinaZone.forEach(([semitinaZone, bestComma]: [Index<Semitina>, CommaAnalysis]): void => {
            const metacomma =
                computeSuperScamon(subtractRationalScamons(ultraComma, bestComma.pitch)) as unknown as Comma
            const metacommaName = computeCommaName(metacomma)

            const ultraCommaSemitinaZone = round(computeCentsFromPitch(ultraComma) / SEMITINA) as Index<Semitina>
            const metacommaSemitinaZoneJump = abs(ultraCommaSemitinaZone - semitinaZone) as Abs<Count<Index<Semitina>>>

            saveLog(`The metacomma between the Extreme comma ${ultraCommaClassId} and the best comma in semitina zone ${semitinaZone} ${bestComma.name} is ${metacommaName} with size ${metacommaSemitinaZoneJump}`, LogTarget.DETAILS)

            if (
                metacommaSemitinaZoneJump >= 2
                && metacommaSemitinaZoneJump <= 18
                && isEven(metacommaSemitinaZoneJump)
            ) {
                const tinaBucket = metacommaSemitinaZoneJump / 2 as TinaBucket

                checkMetacommaConsistency(metacomma, tinaBucket)

                metacommaNameToMetacommaMap[metacommaName] = metacomma

                tinaCandidateBucketOccams[tinaBucket][metacommaName] =
                    tinaCandidateBucketOccams[tinaBucket][metacommaName] || 0 as Occam
                tinaCandidateBucketOccams[tinaBucket][metacommaName] =
                    tinaCandidateBucketOccams[tinaBucket][metacommaName] + 1 as Occam
            }
        })
    })

    saveLog("metacommas gathered", LogTarget.PROGRESS)

    return tinaCandidateBucketOccams
}

export {
    computeTinaCandidateBucketOccams,
}
