import {Zone} from "@sagittal/general"
import {CommaClass, CommaClassId} from "../../notation"
import {computeJiNotationCaptureZone} from "./captureZone"
import {getIntroducingJiNotationLevel} from "./introducingJiNotationLevel"

const computeSecondaryCommaZone = (commaClassId: CommaClassId): Zone<{of: CommaClass}> => {
    return computeJiNotationCaptureZone(
        commaClassId,
        getIntroducingJiNotationLevel(commaClassId),
    ) as Zone<{of: CommaClass}>
}

export {
    computeSecondaryCommaZone,
}
