import { addTexts, Formatted, NEWLINE } from "../../../../general"
import { AnalyzedBound } from "../../types"
import { extractBoundIdentifiers } from "./boundIdentifiers"
import { FormatBoundParameters } from "./types"

const computeFormattedBound = (
    analyzedBound: AnalyzedBound,
    { bound }: FormatBoundParameters,
): Formatted<AnalyzedBound> => {
    const boundIdentifiers = extractBoundIdentifiers(bound)

    const formattedBoundIdentifiers = JSON
        .stringify(boundIdentifiers, undefined, 4)
        .replace(/\\\\/g, "\\")
    const formattedAnalyzedBound = JSON
        .stringify(analyzedBound, undefined, 4)
        .replace(/\\\\/g, "\\")

    return addTexts(formattedBoundIdentifiers, NEWLINE, formattedAnalyzedBound) as Formatted<AnalyzedBound>
}

// TODO: probably should go back and rename things that are called formatThis to computeFormattedThis

export {
    computeFormattedBound,
}
