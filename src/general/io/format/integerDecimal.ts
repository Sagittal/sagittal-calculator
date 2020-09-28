import { IntegerDecimal } from "../../math"
import { alignFormattedDecimal } from "./alignFormattedDecimal"
import { Formatted } from "./types"

// TODO: and perhaps this should be housed in the same module as decimal too
const formatIntegerDecimal = <T extends IntegerDecimal>(
    integer: T, { align }: { align?: boolean } = {},
): Formatted<T> => {
    const stringifiedInteger = integer.toString()

    return align ?
        alignFormattedDecimal(stringifiedInteger + "    " as Formatted<T>) :
        stringifiedInteger as Formatted<T>
}

export {
    formatIntegerDecimal,
}
