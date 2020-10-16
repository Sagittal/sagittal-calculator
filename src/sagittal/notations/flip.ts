import { PARENTHETICAL_CONVENTIONAL_NATURAL_SYMBOL } from "../constants"
import { SHAFT_DOWN } from "./elements"
import { SagittalSymbol } from "./types"

const flipAccents = (symbol: SagittalSymbol): SagittalSymbol => {
    return symbol
        .replace(/`/g, "_")
        .replace(/,/g, "`")
        .replace(/_/g, ",")
        .replace(/'/g, "_")
        .replace(/\./g, "'")
        .replace(/_/g, ".") as SagittalSymbol
}

const flipBarbs = (symbol: SagittalSymbol): SagittalSymbol => {
    return symbol
        .replace(/\//g, "_")
        .replace(/\\/g, "/")
        .replace(/_/g, "\\") as SagittalSymbol
}

const flipShafts = (symbol: SagittalSymbol): SagittalSymbol => {
    return symbol
        .replace(/\|/g, SHAFT_DOWN)
        .replace(/X/g, "Y") as SagittalSymbol
}

const flipSymbol = (symbol: SagittalSymbol): SagittalSymbol => {
    if (symbol === PARENTHETICAL_CONVENTIONAL_NATURAL_SYMBOL) return symbol

    return flipAccents(flipBarbs(flipShafts(symbol)))
}

export {
    flipSymbol,
    flipAccents,
}
