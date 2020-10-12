import { Id, Zone } from "../../../general"
import { CommaClass, PrimaryComma } from "../types"
import { computeCaptureZone } from "./captureZone"
import { getIntroducingJiNotationLevel } from "./introducingJiNotationLevel"

const computeSecondaryCommaZone = (commaClassId: Id<CommaClass>): Zone<PrimaryComma> => {
    return computeCaptureZone(
        commaClassId,
        getIntroducingJiNotationLevel(commaClassId),
    ) as Zone<PrimaryComma>
}

export {
    computeSecondaryCommaZone,
}
