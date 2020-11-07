import {Comma, LogTarget, Name, RecordKey, saveLog} from "../../../../general"
import {logTopCandidatesByOccamForBucket} from "./logTopCandidatesByOccamForBucket"
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
            logTopCandidatesByOccamForBucket(tinaCandidateBucketOccams)
        },
    )

    saveLog("tina candidate buckets sorted and presented", LogTarget.PROGRESS)
}

export {
    logOccamResults,
}
