import { Ascii, Smiley } from "./types"

const computeSmileyFromAscii = (ascii: Ascii): Smiley => {
    if (ascii === "(|//|)") return "(:h:)" as Smiley

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

    return fixedAccentsOnly + ":" + withoutAccentsAndFixedSlashes + ":" as Smiley
}

export {
    computeSmileyFromAscii,
}
