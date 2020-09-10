import { computeMonzoFromRatio, Direction, Formatted, Monzo, parseRatio, Ratio } from "../../general"
import { TwoThreeFreeClass } from "../types"

const parse23FreeClass = (formatted23FreeClass: Formatted<TwoThreeFreeClass>): TwoThreeFreeClass => {
    const parsed23FreeClass = parseRatio(formatted23FreeClass as Formatted as Formatted<Ratio>)

    return {
        monzo: computeMonzoFromRatio(parsed23FreeClass) as Monzo<{ rough: 5, direction: Direction.SUPER }>,
    } as TwoThreeFreeClass
    // TODO: Okay this is fun. the assumption was that you'd be able to have Formatted<this> where this extends that
    //  but in this case, TwoThreeFreeClass when formatted does look just like a Ratio, but under the hood it is more
    //  like a Comma...
}

export {
    parse23FreeClass,
}
