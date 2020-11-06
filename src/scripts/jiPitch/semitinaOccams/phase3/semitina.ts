import {
    Comma,
    Index,
    indexOfFinalElement,
    ioSettings,
    KeyPath,
    LogTarget,
    Name,
    RecordKey,
    saveLog,
    sort,
    stringify,
    subtractRationalScamons,
    time,
} from "../../../../general"
import {CommaAnalysis, computeCommaName} from "../../../../sagittal"
import {metacommaNameToMetacommaMap} from "../../globals"
import {Occam} from "../phase2"
import {Semitina} from "../types"

const logSemitinaCandidates = (bestCommaPerSemitinaZone: Array<[Index<Semitina>, CommaAnalysis]>): void => {
    const semitinaCandidateOccams: Record<RecordKey<Name<Comma>>, Occam> = {}

    saveLog(`CANDIDATES FOR SEMITINA`, LogTarget.FINAL)
    bestCommaPerSemitinaZone
        .forEach((bestCommaPerSemitinaZoneEntry: [Index<Semitina>, CommaAnalysis], index: number): void => {
            if (index === indexOfFinalElement(bestCommaPerSemitinaZone)) return

            const [semitinaZone, bestCommaInThisSemitinaZone] = bestCommaPerSemitinaZoneEntry

            const subsequentBestCommaInThatSemitinaZone = bestCommaPerSemitinaZone[index + 1][1]

            const metacommaBetweenConsecutiveBestCommas = subtractRationalScamons(
                subsequentBestCommaInThatSemitinaZone.pitch,
                bestCommaInThisSemitinaZone.pitch,
            ) as Comma
            const metacommaName = computeCommaName(metacommaBetweenConsecutiveBestCommas)
            semitinaCandidateOccams[metacommaName] = semitinaCandidateOccams[metacommaName] || 0 as Occam
            semitinaCandidateOccams[metacommaName] = semitinaCandidateOccams[metacommaName] + 1 as Occam

            // TODO: should map to 0 here!
            //  Also, how about in the final output, giving an *inconsistent; maps to 1 or whatever
            // CheckMetacommaConsistency(metacomma, tinaBucket)

            metacommaNameToMetacommaMap[metacommaName] = metacommaBetweenConsecutiveBestCommas

            saveLog(
                `semitina zone ${semitinaZone}: ${stringify(metacommaBetweenConsecutiveBestCommas)}`,
                LogTarget.DETAILS,
            )
        })

    saveLog(stringify(metacommaNameToMetacommaMap, {multiline: true}), LogTarget.DETAILS)

    const semitinaCandidateOccamEntries = Object.entries(semitinaCandidateOccams) as Array<[Name<Comma>, Occam]>
    sort(semitinaCandidateOccamEntries, {by: [1] as KeyPath, descending: true})

    // TODO: try to DRY this up with the above once you get to breaking this script down into parts
    const bestOccamInThisBucket = semitinaCandidateOccamEntries[0][1]
    const occamThreshold = bestOccamInThisBucket * 0.8

    for (const [commaName, occam] of semitinaCandidateOccamEntries) {
        if (occam < occamThreshold) break
        saveLog(`${commaName}\t${occam}`, LogTarget.FINAL)
    }

    if (ioSettings.time) saveLog(`\n\nTOOK ${time()}`, LogTarget.FINAL)

}

export {
    logSemitinaCandidates,
}
