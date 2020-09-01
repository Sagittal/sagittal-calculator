import { Integer } from "../math"
import { alignFormattedNumber } from "./alignFormattedNumber"
import { Formatted } from "./types"

const formatInteger = <T extends Integer>(integer: T): Formatted<T> =>
    alignFormattedNumber(integer.toString() + "    " as Formatted<T>)

export {
    formatInteger,
}
