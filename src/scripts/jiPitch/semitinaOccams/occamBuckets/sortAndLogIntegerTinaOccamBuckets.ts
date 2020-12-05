import {Comma, LogTarget, Name, RecordKey, saveLog} from "@sagittal/general"
import {sortAndLogOccamBucket} from "./sortAndLogOccamBucket"
import {BucketName, Occam} from "./types"

const sortAndLogIntegerTinaOccamBuckets = (
    tinaOccamBuckets: Record<RecordKey<BucketName>, Record<RecordKey<Name<Comma>>, Occam>>,
): void => {
    const tinaOccamBucketEntries =
        Object.entries(tinaOccamBuckets) as Array<[unknown, Record<Name<Comma>, Occam>]> as
            Array<[BucketName, Record<Name<Comma>, Occam>]>

    tinaOccamBucketEntries.forEach(
        ([tinaOccamBucketName, tinaOccamBucket]: [BucketName, Record<Name<Comma>, Occam>]): void => {
            saveLog(`CANDIDATES FOR TINA ${tinaOccamBucketName}`, LogTarget.FINAL)
            sortAndLogOccamBucket(tinaOccamBucket)
        },
    )

    saveLog("integer tina occam buckets sorted and logged", LogTarget.PROGRESS)
}

export {
    sortAndLogIntegerTinaOccamBuckets,
}
