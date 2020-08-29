import { round } from "../math"
import { IO_PRECISION } from "./constants"
import { Formatted } from "./types"

const formatNumber = (number: number): Formatted<number> =>
    round(number, IO_PRECISION)
        .toPrecision(5)
        .replace(/\.(\d\d\d)0*$/, ".$1") as Formatted<number>

export {
    formatNumber,
}
