import { Formatted, Id } from "../../general"
import { CommaClass, getRepresentativeSymbol, SagittalSymbol } from "../notations"
import { formatSymbol } from "./formatSymbol"
import { Glyph } from "./types"

const formatCommaClass = (
    commaClassId: Id<CommaClass>,
    options: { align?: boolean } = {},
): Formatted<Glyph> => {
    const representativeSymbol: SagittalSymbol = getRepresentativeSymbol(commaClassId)

    return formatSymbol(representativeSymbol, options)
}

export {
    formatCommaClass,
}
