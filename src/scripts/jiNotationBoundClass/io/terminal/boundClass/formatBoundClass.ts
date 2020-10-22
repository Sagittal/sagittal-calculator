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
import {JiNotationBoundClassAnalysis} from "../../../boundClass"
import {extractJiNotationBoundClassIdentifiers} from "../boundClassIdentifiers"
import {FormatJiNotationBoundOptions} from "./types"

const roundIfNumeric = (value: unknown, precision: Precision): unknown =>
    isNumber(value) ? round(value, precision) : value

const formatJiNotationBoundClass = (
    jiNotationBoundClassAnalysis: JiNotationBoundClassAnalysis,
    {jiNotationBoundClass}: FormatJiNotationBoundOptions,
): Formatted<JiNotationBoundClassAnalysis> => {
    const jiNotationBoundIdentifiers = deepMap(
        extractJiNotationBoundClassIdentifiers(jiNotationBoundClass),
        roundIfNumeric,
        DEFAULT_PRECISION,
    )

    const formattedJiNotationBoundIdentifiers = stringify(jiNotationBoundIdentifiers, {multiline: true})
        .replace(/\\\\/g, "\\")
    const formattedJiNotationBoundClassAnalysis = stringify(jiNotationBoundClassAnalysis, {multiline: true})
        .replace(/\\\\/g, "\\")

    return sumTexts(
        formattedJiNotationBoundIdentifiers,
        NEWLINE,
        formattedJiNotationBoundClassAnalysis,
    ) as Formatted<JiNotationBoundClassAnalysis>
}

export {
    formatJiNotationBoundClass,
}
