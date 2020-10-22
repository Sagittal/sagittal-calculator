import {Formatted, Id} from "../../../../general"
import {formatSymbol, Glyph, Symbol} from "../../../accidental"
import {getRepresentativeSymbol} from "./representativeSymbol"
import {CommaClass} from "./types"

const formatCommaClass = (commaClassId: Id<CommaClass>, options: {align?: boolean} = {}): Formatted<Glyph> => {
    const representativeSymbol: Symbol = getRepresentativeSymbol(commaClassId)

    return formatSymbol(representativeSymbol, options)
}

export {
    formatCommaClass,
}
