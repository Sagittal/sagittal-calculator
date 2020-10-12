import { Formatted, Id } from "../../general"
import { CommaClass, getRepresentativeSymbol, NotationCaptureZoneAccidental } from "../notations"
import { formatSymbol } from "./formatSymbol"
import { Glyph } from "./types"

const formatCommaClass = (
    commaClassId: Id<CommaClass>,
    options: { align?: boolean } = {},
): Formatted<Glyph> => {
    // TODO: needs work
    const representativeSymbol: NotationCaptureZoneAccidental = getRepresentativeSymbol(commaClassId)

    return formatSymbol(representativeSymbol, options)
}

export {
    formatCommaClass,
}
