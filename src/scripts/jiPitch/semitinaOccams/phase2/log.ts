import {Comma, KeyPath, LogTarget, Name, RecordKey, saveLog, sort} from "../../../../general"
import {Occam, TinaBucket} from "./types"

const logOccamResults = (
    tinaCandidateBucketOccams: Record<RecordKey<TinaBucket>, Record<RecordKey<Name<Comma>>, Occam>>,
): void => {
    const tinaCandidateBucketOccamEntries =
        Object.entries(tinaCandidateBucketOccams) as Array<[unknown, Record<Name<Comma>, Occam>]> as
            Array<[TinaBucket, Record<Name<Comma>, Occam>]>

    tinaCandidateBucketOccamEntries.forEach(
        ([tinaCandidateBucket, tinaCandidateBucketOccams]: [TinaBucket, Record<Name<Comma>, Occam>]): void => {
            saveLog(`CANDIDATES FOR TINA ${tinaCandidateBucket}`, LogTarget.FINAL)
            const thisTinaCandidateBucketsOccamEntries =
                Object.entries(tinaCandidateBucketOccams) as Array<[Name<Comma>, Occam]>

            sort(thisTinaCandidateBucketsOccamEntries, {by: [1] as KeyPath, descending: true})

            const bestOccamInThisBucket = thisTinaCandidateBucketsOccamEntries[0][1]
            const occamThreshold = bestOccamInThisBucket * 0.8

            for (const [commaName, occam] of thisTinaCandidateBucketsOccamEntries) {
                if (occam < occamThreshold) break
                saveLog(`${commaName}\t${occam}`, LogTarget.FINAL)
            }
        },
    )

    saveLog("tina candidate buckets sorted and presented", LogTarget.PROGRESS)
}

export {
    logOccamResults,
}
