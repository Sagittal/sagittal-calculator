import { computeMonzoFromRatio, Direction, Monzo, Ratio } from "../../math"
import { TwoThreeFreeClass } from "../../music"
import { Formatted } from "../format"
import { parseRatio } from "./ratio"

const parse23FreeClass = (formatted23FreeClass: Formatted<TwoThreeFreeClass>): TwoThreeFreeClass => {
    const parsed23FreeClass = parseRatio(formatted23FreeClass as Formatted as Formatted<Ratio<{ unreduced: true }>>)

    return {
        monzo: computeMonzoFromRatio(parsed23FreeClass) as Monzo<{ rough: 5, direction: Direction.SUPER }>,
    } as TwoThreeFreeClass
}

export {
    parse23FreeClass,
}
