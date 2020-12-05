import {BLANK, Comma, computeKeyPath, LogTarget, Name, saveLog, sort} from "@sagittal/general"
import {inconsistentMetacommas} from "../../globals"
import {OCCAM_COMMONALITY_THRESHOLD} from "./constants"
import {Occam} from "./types"

const sortAndLogOccamBucket = (occamBucket: Record<Name<Comma>, Occam>): void => {
    const occamBucketEntries = Object.entries(occamBucket) as Array<[Name<Comma>, Occam]>
    sort(occamBucketEntries, {by: computeKeyPath(1), descending: true})

    const bestOccamInThisBucket = occamBucketEntries[0][1]
    const occamThreshold = bestOccamInThisBucket * OCCAM_COMMONALITY_THRESHOLD

    for (const [commaName, occam] of occamBucketEntries) {
        if (occam < occamThreshold) break
        const maybeInconsistentMessage = inconsistentMetacommas[commaName] ? `* (maps to ${inconsistentMetacommas[commaName]} tinas)` : BLANK
        saveLog(`${commaName}\t${occam}${maybeInconsistentMessage}`, LogTarget.FINAL)
    }
}

export {
    sortAndLogOccamBucket,
}
