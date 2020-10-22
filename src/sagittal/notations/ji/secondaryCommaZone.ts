import { Id, Zone } from "../../../general"
import { CommaClass } from "../../ji"
import { computeJiNotationCaptureZone } from "./captureZone"
import { getIntroducingJiNotationLevel } from "./introducingJiNotationLevel"

const computeSecondaryCommaZone = (commaClassId: Id<CommaClass>): Zone<CommaClass> => {
    return computeJiNotationCaptureZone(
        commaClassId,
        getIntroducingJiNotationLevel(commaClassId),
    ) as Zone<CommaClass>
}

export {
    computeSecondaryCommaZone,
}
