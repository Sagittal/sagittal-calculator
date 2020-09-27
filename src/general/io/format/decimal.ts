import { round } from "../../math"
import { IO_PRECISION } from "../constants"
import { alignFormattedDecimal } from "./alignFormattedDecimal"
import { Formatted } from "./types"

const formatDecimal = <T extends number>(decimal: T, { align }: { align?: boolean } = {}): Formatted<T> => {
    const roundedDecimal = round(decimal, IO_PRECISION)
        .toFixed(3)
        .replace(/\.(\d\d\d)0*$/, ".$1") as Formatted<T>

    return align ? alignFormattedDecimal(roundedDecimal) : roundedDecimal
}

export {
    formatDecimal,
}
