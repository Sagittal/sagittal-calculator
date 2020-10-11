import { Cents } from "../../music"
import { TableFormat } from "../table"
import { formatDecimal } from "./decimal"
import { Formatted } from "./types"

const formatCents = (
    cents: Cents,
    options: { tableFormat?: TableFormat, align?: boolean } = {},
): Formatted<Cents> => {
    let formattedCents = formatDecimal(cents, options)

    formattedCents = formattedCents + "¢" as Formatted<Cents>

    if (options.align && options.tableFormat !== TableFormat.SPREADSHEET) {
        while (formattedCents.length < 15) {
            formattedCents = " " + formattedCents as Formatted<Cents>
        }
    }

    return formattedCents as Formatted<Cents>
}

export {
    formatCents,
}
