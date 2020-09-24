import { computeMonzoFromRatio, Direction, Monzo } from "../../math"
import { TwoThreeFreeClass } from "../../music"
import { Io } from "../types"
import { parseRatio } from "./ratio"

const parse23FreeClass = (twoThreeFreeClassIo: Io): TwoThreeFreeClass => {
    const parsed23FreeClass = parseRatio(twoThreeFreeClassIo)

    return {
        monzo: computeMonzoFromRatio(parsed23FreeClass) as Monzo<{ rough: 5, direction: Direction.SUPER }>,
    } as TwoThreeFreeClass
}

export {
    parse23FreeClass,
}
