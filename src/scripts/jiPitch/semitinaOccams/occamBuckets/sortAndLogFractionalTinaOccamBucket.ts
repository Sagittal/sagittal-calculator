import {Comma, LogTarget, Name, RecordKey, saveLog} from "@sagittal/general"
import {sortAndLogOccamBucket} from "./sortAndLogOccamBucket"
import {Occam} from "./types"

const sortAndLogFractionalTinaOccamBucket = (
    fractionalTinaOccamBucket: Record<RecordKey<Name<Comma>>, Occam>,
): void => {
    saveLog(`CANDIDATES FOR FRACTIONAL TINA`, LogTarget.FINAL)
    sortAndLogOccamBucket(fractionalTinaOccamBucket)
}

export {
    sortAndLogFractionalTinaOccamBucket,
}
