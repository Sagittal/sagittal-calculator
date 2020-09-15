import { round } from "../../math"
import { IO_PRECISION } from "../constants"
import { alignFormattedNumber } from "./alignFormattedNumber"
import { Formatted } from "./types"

const formatNumber = <T extends number>(number: T): Formatted<T> =>
    alignFormattedNumber(
        round(number, IO_PRECISION)
            .toPrecision(6)
            .replace(/\.(\d\d\d)0*$/, ".$1") as Formatted<T>,
    )

export {
    formatNumber,
}
