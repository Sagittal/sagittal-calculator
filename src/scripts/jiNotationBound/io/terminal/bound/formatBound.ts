import { Formatted, NEWLINE, stringify, sumTexts } from "../../../../../general"
import { JiNotationBoundAnalysis } from "../../../bound"
import { extractJiNotationBoundIdentifiers } from "../boundIdentifiers"
import { FormatJiNotationBoundOptions } from "./types"

const formatJiNotationBound = (
    jiNotationBoundAnalysis: JiNotationBoundAnalysis,
    { jiNotationBound }: FormatJiNotationBoundOptions,
): Formatted<JiNotationBoundAnalysis> => {
    const jiNotationBoundIdentifiers = extractJiNotationBoundIdentifiers(jiNotationBound)

    const formattedJiNotationBoundIdentifiers = stringify(jiNotationBoundIdentifiers, { multiline: true })
        .replace(/\\\\/g, "\\")
    const formattedJiNotationBoundAnalysis = stringify(jiNotationBoundAnalysis, { multiline: true })
        .replace(/\\\\/g, "\\")

    return sumTexts(
        formattedJiNotationBoundIdentifiers,
        NEWLINE,
        formattedJiNotationBoundAnalysis,
    ) as Formatted<JiNotationBoundAnalysis>
}

export {
    formatJiNotationBound,
}
