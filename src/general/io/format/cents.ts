import { Cents } from "../../music"
import { formatDecimal } from "./decimal"
import { Formatted } from "./types"

const formatCents = (cents: Cents, { align = true }: { align?: boolean } = {}): Formatted<Cents> => {
    let formattedCents = formatDecimal(cents, { align: false })

    formattedCents = formattedCents + "¢" as Formatted<Cents>

    if (align) {
        while (formattedCents.length < 15) {
            formattedCents = " " + formattedCents as Formatted<Cents>
        }
    }

    return formattedCents
}

export {
    formatCents,
}
