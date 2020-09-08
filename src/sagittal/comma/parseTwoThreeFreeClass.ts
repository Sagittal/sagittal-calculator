import { Formatted, parseRatio } from "../../general"
import { TwoThreeFreeClass } from "./types"

const parseTwoThreeFreeClass = (formattedTwoThreeFreeClass: Formatted<TwoThreeFreeClass>): TwoThreeFreeClass => {
    return parseRatio(formattedTwoThreeFreeClass)
}

export {
    parseTwoThreeFreeClass,
}
