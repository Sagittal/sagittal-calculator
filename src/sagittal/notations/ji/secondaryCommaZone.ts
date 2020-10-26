import {Zone} from "../../../general"
import {CommaClass, CommaClassId} from "../../ji"
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
