import { isUndefined } from "../../code"
import { Num } from "../../math"
import { computeCentsFromDecimal } from "../../music"
import { stringify } from "../stringify"
import { formatCents } from "./cents"
import { formatMonzo } from "./monzo"
import { formatRatio } from "./ratio"
import { Formatted } from "./types"

// TODO: haha this is nuts, this is almost identical to formatNum, just with the cents difference
const formatPitch = (pitch: Num, options: { align?: boolean } = {}): Formatted<Num> => {
    const { ratio, monzo, decimal } = pitch
    if (!isUndefined(ratio)) {
        return formatRatio(ratio) as Formatted as Formatted<Num>
    } else if (!isUndefined(monzo)) {
        return formatMonzo(monzo) as Formatted as Formatted<Num>
    } else if (!isUndefined(decimal)) {
        return formatCents(computeCentsFromDecimal(decimal), options) as Formatted as Formatted<Num>
    }

    throw new Error(`Tried to format pitch ${stringify(pitch)} but it had no numeric members.`)
}

export {
    formatPitch,
}
