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
} from "@sagittal/general"
import {
    CommaClassId,
    computeCommaName,
    formatComma,
    getCommaClass,
    JiNotationLevelId,
    JI_NOTATION_LEVELS_COMMA_CLASS_IDS,
} from "@sagittal/system"
import {metacommaNameToMetacommaMap} from "../../globals"
import {SEMITINA_CENTS} from "../constants"
import {Semitina} from "../types"
import {checkMetacommaConsistency} from "./consistency"
import {BucketName, Occam} from "./types"

const computeIntegerTinaOccamBuckets = (
    bestCommaPerSemitinaZone: Array<[Index<Semitina>, Comma]>,
): Record<RecordKey<BucketName>, Record<RecordKey<Name<Comma>>, Occam>> => {
    const integerTinaOccamBuckets: Record<RecordKey<BucketName>, Record<RecordKey<Name<Comma>>, Occam>> = {
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

        bestCommaPerSemitinaZone.forEach(([semitinaZone, bestComma]: [Index<Semitina>, Comma]): void => {
            const metacomma =
                computeSuperScamon(subtractRationalScamons(ultraComma, bestComma)) as unknown as Comma
            const metacommaName = computeCommaName(metacomma)

            const ultraCommaSemitinaZone = round(computeCentsFromPitch(ultraComma) / SEMITINA_CENTS) as Index<Semitina>
            const metacommaSemitinaZoneJump = abs(ultraCommaSemitinaZone - semitinaZone) as Abs<Count<Index<Semitina>>>

            saveLog(`The metacomma between the Ultra comma ${ultraCommaClassId} and the best comma in semitina zone ${semitinaZone} ${formatComma(bestComma)} is ${metacommaName} with size ${metacommaSemitinaZoneJump}`, LogTarget.DETAILS)

            if (
                metacommaSemitinaZoneJump >= 2
                && metacommaSemitinaZoneJump <= 18
                && isEven(metacommaSemitinaZoneJump)
            ) {
                const tinaOccamBucketName = metacommaSemitinaZoneJump / 2 as BucketName

                checkMetacommaConsistency(metacomma, tinaOccamBucketName)

                metacommaNameToMetacommaMap[metacommaName] = metacomma

                integerTinaOccamBuckets[tinaOccamBucketName][metacommaName] =
                    integerTinaOccamBuckets[tinaOccamBucketName][metacommaName] || 0 as Occam
                integerTinaOccamBuckets[tinaOccamBucketName][metacommaName] =
                    integerTinaOccamBuckets[tinaOccamBucketName][metacommaName] + 1 as Occam
            }
        })
    })

    saveLog(
        "metacommas between Ultra commas and best commas per semitina zone gathered, and integer tina occams bucketed",
        LogTarget.PROGRESS,
    )

    return integerTinaOccamBuckets
}

export {
    computeIntegerTinaOccamBuckets,
}
