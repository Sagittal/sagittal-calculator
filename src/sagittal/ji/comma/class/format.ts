import {Formatted, Id} from "../../../../general"
import {Ascii, formatSymbol, Smiley, Symbol, Unicode} from "../../../accidental"
import {getRepresentativeSymbol} from "./representativeSymbol"
import {CommaClass} from "./types"

const formatCommaClass = (
    commaClassId: Id<CommaClass>,
    options: {align?: boolean} = {},
): Formatted<Ascii | Unicode | Smiley> => {
    const representativeSymbol: Symbol = getRepresentativeSymbol(commaClassId)

    return formatSymbol(representativeSymbol, options)
}

export {
    formatCommaClass,
}
