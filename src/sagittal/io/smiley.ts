import { PARENTHETICAL_CONVENTIONAL_NATURAL_SMILEY, PARENTHETICAL_CONVENTIONAL_NATURAL_SYMBOL } from "../constants"
import { SagittalSymbol } from "../notations"
import { Smiley } from "./types"

const computeSmileyFromSymbol = (symbol: SagittalSymbol): Smiley => {
    if (symbol === PARENTHETICAL_CONVENTIONAL_NATURAL_SYMBOL) return PARENTHETICAL_CONVENTIONAL_NATURAL_SMILEY

    const withoutAccentsAndFixedSlashes = symbol
        .replace(/`/g, "")
        .replace(/,/g, "")
        .replace(/'/g, "")
        .replace(/\./g, "")
        .replace(/\/\//g, "/ /")
        .replace(/\\\\/g, "\\ \\")

    const fixedAccentsOnly = symbol
        .replace(/``/g, ":``:")
        .replace(/,,/g, ":,,:")
        .replace(/`([^:`])/g, ":`:$1")
        .replace(/,([^:,])/g, ":,:$1")
        .replace(/'/g, ":':")
        .replace(/\./g, ":.:")
        .replace(/\|/g, "")
        .replace(/!/g, "")
        .replace(/\\/g, "")
        .replace(/\//g, "")
        .replace(/\(/g, "")
        .replace(/\)/g, "")
        .replace(/~/g, "")

    return fixedAccentsOnly + ":" + withoutAccentsAndFixedSlashes + ":" as Smiley
}

export {
    computeSmileyFromSymbol,
}
