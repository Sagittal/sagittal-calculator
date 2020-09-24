import { isUndefined } from "../../code"
import { Num } from "../../math"
import { Pitch } from "../../music"
import { stringify } from "../stringify"
import { formatDecimal } from "./decimal"
import { formatMonzo } from "./monzo"
import { formatRatio } from "./ratio"
import { Formatted } from "./types"

const formatNum = (num: Num, options: { align?: boolean } = {}): Formatted<Num> => {
    const { ratio, monzo, decimal } = num
    if (!isUndefined(ratio)) {
        return formatRatio(ratio) as Formatted as Formatted<Pitch>
    } else if (!isUndefined(monzo)) {
        return formatMonzo(monzo) as Formatted as Formatted<Pitch>
    } else if (!isUndefined(decimal)) {
        return formatDecimal(decimal, options) as Formatted as Formatted<Pitch>
    }

    throw new Error(`Tried to format pitch ${stringify(num)} but it had no numeric members.`)
}

export {
    formatNum,
}
