import { computeRationalQuotientFromRatio } from "../../math"
import { Two3FreeClass } from "../../music"
import { formatQuotient } from "./quotient"
import { Formatted } from "./types"

// TODO: use the subscript technique Dave suggested here: http://forum.sagittal.org/viewtopic.php?p=2451#p2451
//  And reconcile this with the Name<Two3FreeClass> which does basically the same thing

const format23FreeClass = (two3FreeClass: Two3FreeClass): Formatted<Two3FreeClass> => {
    const quotient = computeRationalQuotientFromRatio(two3FreeClass)

    return formatQuotient(quotient) as Formatted as Formatted<Two3FreeClass>
}

export {
    format23FreeClass,
}
