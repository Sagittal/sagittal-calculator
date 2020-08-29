import { Integer } from "../math"
import { Formatted } from "./types"

const formatInteger = <T extends Integer>(integer: T): Formatted<T> =>
    integer.toString() as Formatted<T>

export {
    formatInteger,
}
