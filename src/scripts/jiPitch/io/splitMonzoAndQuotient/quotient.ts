import { formatQuotient, Formatted, ioSettings, Quotient, TableFormat } from "../../../../general"
import { JiPitchAnalysis } from "../../../../sagittal"

const formatSplitQuotient = (quotient: Quotient): Array<Formatted<JiPitchAnalysis>> => {
    const formattedQuotient = formatQuotient(quotient)
    // TODO: or perhaps if you request split you could, and 2,3-free classes should be splittable like quotients
    if (ioSettings.tableFormat === TableFormat.FORUM) {
        return [formattedQuotient] as Array<Formatted> as Array<Formatted<JiPitchAnalysis>>
    } else {
        const [formattedNumerator, formattedDenominator] =
            formattedQuotient.split("/") as Array<Formatted<JiPitchAnalysis>>
        return [formattedNumerator, "/" as Formatted<JiPitchAnalysis>, formattedDenominator]
    }
}

export {
    formatSplitQuotient,
}
