import { addTexts, Formatted, NEWLINE, stringify } from "../../../../../general"
import { AnalyzedBound } from "../../../types"
import { extractBoundIdentifiers } from "../boundIdentifiers"
import { FormatBoundOptions } from "./types"

const computeFormattedBound = (
    analyzedBound: AnalyzedBound,
    { bound }: FormatBoundOptions,
): Formatted<AnalyzedBound> => {
    const boundIdentifiers = extractBoundIdentifiers(bound)

    const formattedBoundIdentifiers = stringify(boundIdentifiers, { multiline: true })
        .replace(/\\\\/g, "\\")
    const formattedAnalyzedBound = stringify(analyzedBound, { multiline: true })
        .replace(/\\\\/g, "\\")

    return addTexts(formattedBoundIdentifiers, NEWLINE, formattedAnalyzedBound) as Formatted<AnalyzedBound>
}

// TODO: probably should go back and rename things that are called formatThis to computeFormattedThis

export {
    computeFormattedBound,
}
