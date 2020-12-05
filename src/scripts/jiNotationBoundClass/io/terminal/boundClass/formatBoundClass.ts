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
} from "@sagittal/general"
import {JiNotationBoundClassEntry} from "@sagittal/system"
import {JiNotationBoundClassAnalysis} from "../../../boundClass"
import {extractJiNotationBoundClassIdentifiers} from "../boundClassIdentifiers"

const roundIfNumeric = (value: unknown, precision: Precision): unknown =>
    isNumber(value) ? round(value, precision) : value

const formatJiNotationBoundClass = (
    jiNotationBoundClassAnalysis: JiNotationBoundClassAnalysis,
    jiNotationBoundClassEntry: JiNotationBoundClassEntry,
): Formatted<JiNotationBoundClassAnalysis> => {
    const jiNotationBoundIdentifiers = deepMap(
        extractJiNotationBoundClassIdentifiers(jiNotationBoundClassEntry),
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
