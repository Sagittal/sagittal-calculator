import { Id, Zone } from "../../../general"
import { CommaClass } from "../types"
import { computeCaptureZone } from "./captureZone"
import { getIntroducingJiNotationLevel } from "./introducingJiNotationLevel"

const computeSecondaryCommaZone = (commaClassId: Id<CommaClass>): Zone<CommaClass> => {
    return computeCaptureZone(
        commaClassId,
        getIntroducingJiNotationLevel(commaClassId),
    ) as Zone<CommaClass>
}

export {
    computeSecondaryCommaZone,
}
