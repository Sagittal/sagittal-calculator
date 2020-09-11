import { computeMonzoFromRatio, Direction, Monzo, Ratio } from "../math"
import { TwoThreeFreeClass } from "../music"
import { parseRatio } from "./parseRatio"
import { Formatted } from "./types"

const parse23FreeClass = (formatted23FreeClass: Formatted<TwoThreeFreeClass>): TwoThreeFreeClass => {
    const parsed23FreeClass = parseRatio(formatted23FreeClass as Formatted as Formatted<Ratio>)

    return {
        monzo: computeMonzoFromRatio(parsed23FreeClass) as Monzo<{ rough: 5, direction: Direction.SUPER }>,
    } as TwoThreeFreeClass
}

export {
    parse23FreeClass,
}
