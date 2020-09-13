import { Formatted, Id } from "../../general"
import { getJiSymbol, JiSymbol } from "../notations"
import { computeSmileyFromAscii } from "./smiley"
import { formatSymbolAscii } from "./symbolAscii"
import { SymbolLongAscii, SymbolSmiley } from "./types"

// these options are required by design, to force you to pass it the ioSettings global
const formatSymbol = (
    symbolId: Id<JiSymbol>,
    { forForum }: { forForum?: boolean },
): SymbolSmiley | Formatted<SymbolLongAscii> => {
    const symbol: JiSymbol = getJiSymbol(symbolId)
    const ascii = symbol.ascii

    return forForum ?
        computeSmileyFromAscii(ascii) :
        formatSymbolAscii(ascii)
}

export {
    formatSymbol,
}
