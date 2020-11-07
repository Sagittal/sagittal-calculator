import {Comma, KeyPath, LogTarget, Name, saveLog, sort} from "../../../../general"
import {inconsistentMetacommas} from "../../globals"
import {Occam} from "./types"

const logTopCandidatesByOccamForBucket = (candidateBucketOccams: Record<Name<Comma>, Occam>): void => {
    const candidateBucketOccamEntries = Object.entries(candidateBucketOccams) as Array<[Name<Comma>, Occam]>
    sort(candidateBucketOccamEntries, {by: [1] as KeyPath, descending: true})

    const bestOccamInThisBucket = candidateBucketOccamEntries[0][1]
    const occamThreshold = bestOccamInThisBucket * 0.8

    for (const [commaName, occam] of candidateBucketOccamEntries) {
        if (occam < occamThreshold) break
        const maybeInconsistentMessage = inconsistentMetacommas[commaName] ? `* (maps to ${inconsistentMetacommas[commaName]} tinas)` : ""
        saveLog(`${commaName}\t${occam}${maybeInconsistentMessage}`, LogTarget.FINAL)
    }
}

export {
    logTopCandidatesByOccamForBucket,
}
