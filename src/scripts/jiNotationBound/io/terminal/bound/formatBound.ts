import {
    deepMap,
    DEFAULT_PRECISION,
    Formatted,
    isNumber,
    NEWLINE,
    Precision,
    round,
    stringify,
    sumTexts,
} from "../../../../../general"
import { JiNotationBoundAnalysis } from "../../../bound"
import { extractJiNotationBoundIdentifiers } from "../boundIdentifiers"
import { FormatJiNotationBoundOptions } from "./types"

const roundIfNumeric = (value: unknown, precision: Precision): unknown =>
    isNumber(value) ? round(value, precision) : value

const formatJiNotationBound = (
    jiNotationBoundAnalysis: JiNotationBoundAnalysis,
    { jiNotationBound }: FormatJiNotationBoundOptions,
): Formatted<JiNotationBoundAnalysis> => {
    const jiNotationBoundIdentifiers = deepMap(
        extractJiNotationBoundIdentifiers(jiNotationBound),
        roundIfNumeric,
        DEFAULT_PRECISION,
    )

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
