import { addTexts, Formatted, NEWLINE, stringify } from "../../../../../general"
import { AnalyzedBound } from "../../../analyzeBound"
import { extractBoundIdentifiers } from "../boundIdentifiers"
import { FormatBoundOptions } from "./types"

const formatBound = (analyzedBound: AnalyzedBound, { bound }: FormatBoundOptions): Formatted<AnalyzedBound> => {
    const boundIdentifiers = extractBoundIdentifiers(bound)

    const formattedBoundIdentifiers = stringify(boundIdentifiers, { multiline: true })
        .replace(/\\\\/g, "\\")
    const formattedAnalyzedBound = stringify(analyzedBound, { multiline: true })
        .replace(/\\\\/g, "\\")

    return addTexts(formattedBoundIdentifiers, NEWLINE, formattedAnalyzedBound) as Formatted<AnalyzedBound>
}

export {
    formatBound,
}
