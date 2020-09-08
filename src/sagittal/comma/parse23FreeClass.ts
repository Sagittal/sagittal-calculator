import { Formatted, parseRatio } from "../../general"
import { TwoThreeFreeClass } from "./types"

const parse23FreeClass = (formatted23FreeClass: Formatted<TwoThreeFreeClass>): TwoThreeFreeClass => {
    return parseRatio(formatted23FreeClass)
}

export {
    parse23FreeClass,
}
