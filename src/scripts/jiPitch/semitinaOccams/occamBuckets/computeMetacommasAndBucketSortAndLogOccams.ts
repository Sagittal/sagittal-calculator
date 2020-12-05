import {Comma, Index, LogTarget, saveLog, stringify} from "@sagittal/general"
import {metacommaNameToMetacommaMap} from "../../globals"
import {Semitina} from "../types"
import {computeFractionalTinaOccamBucket} from "./fractionalTina"
import {computeIntegerTinaOccamBuckets} from "./integerTinas"
import {sortAndLogFractionalTinaOccamBucket} from "./sortAndLogFractionalTinaOccamBucket"
import {sortAndLogIntegerTinaOccamBuckets} from "./sortAndLogIntegerTinaOccamBuckets"

const computeMetacommasAndBucketSortAndLogOccams = (
    bestCommaPerSemitinaZone: Array<[Index<Semitina>, Comma]>,
): void => {
    saveLog("(* indicates inconsistent commas)", LogTarget.FINAL)

    const integerTinaOccamBuckets = computeIntegerTinaOccamBuckets(bestCommaPerSemitinaZone)
    sortAndLogIntegerTinaOccamBuckets(integerTinaOccamBuckets)

    const fractionalTinaOccamBucket = computeFractionalTinaOccamBucket(bestCommaPerSemitinaZone)
    sortAndLogFractionalTinaOccamBucket(fractionalTinaOccamBucket)

    saveLog(stringify(metacommaNameToMetacommaMap, {multiline: true}), LogTarget.DETAILS)
}

export {
    computeMetacommasAndBucketSortAndLogOccams,
}
