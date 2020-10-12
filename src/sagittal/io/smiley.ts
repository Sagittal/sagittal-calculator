import { SagittalSymbol } from "../notations"
import { Smiley } from "./types"

const computeSmileyFromSymbol = (symbol: SagittalSymbol): Smiley => {
    if (symbol === "(|//|)") return "(:h:)" as Smiley

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
