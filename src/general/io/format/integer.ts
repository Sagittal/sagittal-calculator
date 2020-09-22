import { Integer } from "../../math"
import { alignFormattedNumber } from "./alignFormattedNumber"
import { Formatted } from "./types"

const formatInteger = <T extends Integer>(integer: T, { align = true }: { align?: boolean } = {}): Formatted<T> => {
    const stringifiedInteger = integer.toString()
    
    return align ? 
        alignFormattedNumber(stringifiedInteger + "    " as Formatted<T>) : 
        stringifiedInteger as Formatted<T>
}

export {
    formatInteger,
}
