import { Maybe } from "../../general"
import { JiSymbol, JI_SYMBOLS } from "../notations"
import { SymbolLongAscii, SymbolUnicode } from "./types"

const unicodeFromAscii = (ascii: SymbolLongAscii): SymbolUnicode => {
    const symbol: Maybe<JiSymbol> = JI_SYMBOLS.find((symbol: JiSymbol): boolean => symbol.ascii === ascii)

    if (!symbol) {
        throw new Error(`No symbol found with ascii ${ascii}`)
    }

    return symbol.unicode
}

export {
    unicodeFromAscii,
}
