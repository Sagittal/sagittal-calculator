import {formatQuotient, Formatted, ioSettings, Quotient, TableFormat} from "../../../../general"
import {JiPitchAnalysis} from "../../../../sagittal"

const formatSplitQuotient = (quotient: Quotient): Array<Formatted<JiPitchAnalysis>> => {
    const formattedQuotient = formatQuotient(quotient)
    if (ioSettings.tableFormat === TableFormat.FORUM) {
        return [formattedQuotient] as Array<Formatted> as Array<Formatted<JiPitchAnalysis>>
    } else {
        let [formattedNumerator, formattedDenominator] =
            formattedQuotient.split("/") as Array<Formatted<JiPitchAnalysis>>

        formattedDenominator = formattedDenominator || "1" as Formatted<JiPitchAnalysis>

        return [formattedNumerator, "/" as Formatted<JiPitchAnalysis>, formattedDenominator]
    }
}

export {
    formatSplitQuotient,
}
