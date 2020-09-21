import { Formatted, Id } from "../../general"
import { getRepresentativeSymbol, RevoSymbol, SymbolClass } from "../notations"
import { computeSmileyFromAscii } from "./smiley"
import { formatSymbolAscii } from "./symbolAscii"
import { SymbolLongAscii, SymbolSmiley } from "./types"

// these options are required by design, to force you to pass it the ioSettings global
const formatSymbolClass = (
    symbolClassId: Id<SymbolClass>,
    { forForum, forTable = true }: { forForum?: boolean, forTable?: boolean },
): Formatted<SymbolSmiley | SymbolLongAscii> => {
    const representativeSymbol: RevoSymbol = getRepresentativeSymbol(symbolClassId)
    const ascii = representativeSymbol.ascii

    return forForum ?
        computeSmileyFromAscii(ascii) as string as Formatted<SymbolSmiley> :
        forTable ? formatSymbolAscii(ascii) : ascii as string as Formatted<SymbolLongAscii>
}

export {
    formatSymbolClass,
}
