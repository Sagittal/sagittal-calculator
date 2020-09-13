import { addTexts, Formatted, NEWLINE, stringify } from "../../../../../general"
import { BoundAnalysis } from "../../../analyzeBound"
import { extractBoundIdentifiers } from "../boundIdentifiers"
import { FormatBoundOptions } from "./types"

const formatBound = (boundAnalysis: BoundAnalysis, { bound }: FormatBoundOptions): Formatted<BoundAnalysis> => {
    const boundIdentifiers = extractBoundIdentifiers(bound)

    const formattedBoundIdentifiers = stringify(boundIdentifiers, { multiline: true })
        .replace(/\\\\/g, "\\")
    const formattedBoundAnalysis = stringify(boundAnalysis, { multiline: true })
        .replace(/\\\\/g, "\\")

    return addTexts(formattedBoundIdentifiers, NEWLINE, formattedBoundAnalysis) as Formatted<BoundAnalysis>
}

export {
    formatBound,
}
