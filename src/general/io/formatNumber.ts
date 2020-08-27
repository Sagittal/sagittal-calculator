import { round } from "../math"
import { FORMATATIONAL_PRECISION } from "./constants"
import { Formatted } from "./types"

const formatNumber = (number: number): Formatted<number> =>
    round(number, FORMATATIONAL_PRECISION)
        .toPrecision(5)
        .replace(/\.(\d\d\d)0*$/, ".$1") as Formatted<number>

export {
    formatNumber,
}
