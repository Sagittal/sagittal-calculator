import { SymbolLongAscii, SymbolSmiley } from "./types"

const computeSmileyFromAscii = (ascii: SymbolLongAscii): SymbolSmiley => {
    const withoutAccentsAndFixedSlashes = ascii
        .replace(/`/g, "")
        .replace(/,/g, "")
        .replace(/'/g, "")
        .replace(/\./g, "")
        .replace(/\/\//g, "/ /")
        .replace(/\\\\/g, "\\ \\")

    const fixedAccentsOnly = ascii
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

    return fixedAccentsOnly + ":" + withoutAccentsAndFixedSlashes + ":" as SymbolSmiley
}

export {
    computeSmileyFromAscii,
}
