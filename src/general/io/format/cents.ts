import { Cents } from "../../music"
import { formatDecimal } from "./decimal"
import { Formatted } from "./types"

const formatCents = (cents: Cents, options: { align?: boolean } = {}): Formatted<Cents> => {
    let formattedCents = formatDecimal(cents, options)

    formattedCents = formattedCents + "¢" as Formatted<Cents>

    if (options.align) {
        while (formattedCents.length < 15) {
            formattedCents = " " + formattedCents as Formatted<Cents>
        }
    }

    return formattedCents
}

export {
    formatCents,
}
