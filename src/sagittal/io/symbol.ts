import { Id } from "../../general"
import { getJiSymbol, JiSymbol } from "../notations"
import { computeSmileyFromAscii } from "./smiley"
import { formatSymbolAscii } from "./symbolAscii"

const formatSymbol = (symbolId: Id<JiSymbol>, { forForum }: { forForum?: boolean } = {}) => {
    const symbol: JiSymbol = getJiSymbol(symbolId)
    const ascii = symbol.ascii

    return forForum ?
        computeSmileyFromAscii(ascii) :
        formatSymbolAscii(ascii)
}

export {
    formatSymbol,
}
