import { Formatted, Id } from "../../general"
import { getRepresentativeSymbol, Symbol, SymbolClass } from "../notations"
import { computeSmileyFromAscii } from "./smiley"
import { formatSymbolAscii } from "./symbolAscii"
import { SymbolLongAscii, SymbolSmiley } from "./types"

// these options are required by design, to force you to pass it the ioSettings global
const formatSymbolClass = (
    symbolClassId: Id<SymbolClass>,
    { forForum, forTable = true }: { forForum?: boolean, forTable?: boolean },
): Formatted<SymbolSmiley | SymbolLongAscii> => {
    const representativeSymbol: Symbol = getRepresentativeSymbol(symbolClassId)
    const ascii = representativeSymbol.revoAscii

    return forForum ?
        computeSmileyFromAscii(ascii) as string as Formatted<SymbolSmiley> :
        forTable ? formatSymbolAscii(ascii) : ascii as string as Formatted<SymbolLongAscii>
}

export {
    formatSymbolClass,
}
