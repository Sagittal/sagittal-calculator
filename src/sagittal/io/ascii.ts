import { SagittalSymbol } from "../notations"
import { Ascii } from "./types"

const computeAsciiFromSymbol = (symbol: SagittalSymbol): Ascii => 
    symbol as string as Ascii

export {
    computeAsciiFromSymbol,
}
