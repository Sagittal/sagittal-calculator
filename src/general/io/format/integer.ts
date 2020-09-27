import { Integer } from "../../math"
import { alignFormattedDecimal } from "./alignFormattedDecimal"
import { Formatted } from "./types"

const formatInteger = <T extends Integer>(integer: T, { align }: { align?: boolean } = {}): Formatted<T> => {
    const stringifiedInteger = integer.toString()

    return align ?
        alignFormattedDecimal(stringifiedInteger + "    " as Formatted<T>) :
        stringifiedInteger as Formatted<T>
}

export {
    formatInteger,
}
