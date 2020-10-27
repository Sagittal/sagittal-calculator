import {Zone} from "../../../general"
import {CommaClass, CommaClassId} from "../../notation"
import {computeJiNotationCaptureZone} from "./captureZone"
import {getIntroducingJiNotationLevel} from "./introducingJiNotationLevel"

const computeSecondaryCommaZone = (commaClassId: CommaClassId): Zone<CommaClass> => {
    return computeJiNotationCaptureZone(
        commaClassId,
        getIntroducingJiNotationLevel(commaClassId),
    ) as Zone<CommaClass>
}

export {
    computeSecondaryCommaZone,
}
