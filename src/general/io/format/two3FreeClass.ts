import { computeRationalQuotientFromRatio } from "../../math"
import { Two3FreeClass } from "../../music"
import { formatQuotient } from "./quotient"
import { Formatted } from "./types"

const format23FreeClass = (two3FreeClass: Two3FreeClass): Formatted<Two3FreeClass> => {
    const quotient = computeRationalQuotientFromRatio(two3FreeClass)

    return formatQuotient(quotient) as Formatted as Formatted<Two3FreeClass>
}

export {
    format23FreeClass,
}
