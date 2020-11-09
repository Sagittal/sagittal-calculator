import {
    Comma,
    Index,
    indexOfFinalElement,
    LogTarget,
    Name,
    RecordKey,
    saveLog,
    stringify,
    subtractRationalScamons,
} from "../../../../general"
import {computeCommaName} from "../../../../sagittal"
import {metacommaNameToMetacommaMap} from "../../globals"
import {Semitina} from "../types"
import {checkMetacommaConsistency} from "./consistency"
import {logTopCandidatesByOccamForBucket} from "./logTopCandidatesByOccamForBucket"
import {Occam, TinaBucket} from "./types"

const logSemitinaCandidates = (bestCommaPerSemitinaZone: Array<[Index<Semitina>, Comma]>): void => {
    const semitinaCandidateOccams: Record<RecordKey<Name<Comma>>, Occam> = {}

    saveLog(`CANDIDATES FOR SEMITINA`, LogTarget.FINAL)
    bestCommaPerSemitinaZone
        .forEach((bestCommaPerSemitinaZoneEntry: [Index<Semitina>, Comma], index: number): void => {
            if (index === indexOfFinalElement(bestCommaPerSemitinaZone)) return

            const [semitinaZone, bestCommaInThisSemitinaZone] = bestCommaPerSemitinaZoneEntry

            const subsequentBestCommaInThatSemitinaZone = bestCommaPerSemitinaZone[index + 1][1]

            const metacommaBetweenConsecutiveBestCommas = subtractRationalScamons(
                subsequentBestCommaInThatSemitinaZone,
                bestCommaInThisSemitinaZone,
            ) as Comma
            const metacommaName = computeCommaName(metacommaBetweenConsecutiveBestCommas)
            semitinaCandidateOccams[metacommaName] = semitinaCandidateOccams[metacommaName] || 0 as Occam
            semitinaCandidateOccams[metacommaName] = semitinaCandidateOccams[metacommaName] + 1 as Occam

            checkMetacommaConsistency(metacommaBetweenConsecutiveBestCommas, 0 as TinaBucket)

            metacommaNameToMetacommaMap[metacommaName] = metacommaBetweenConsecutiveBestCommas

            saveLog(
                `semitina zone ${semitinaZone}: ${stringify(metacommaBetweenConsecutiveBestCommas)}`,
                LogTarget.DETAILS,
            )
        })

    saveLog(stringify(metacommaNameToMetacommaMap, {multiline: true}), LogTarget.DETAILS)

    logTopCandidatesByOccamForBucket(semitinaCandidateOccams)
}

export {
    logSemitinaCandidates,
}
