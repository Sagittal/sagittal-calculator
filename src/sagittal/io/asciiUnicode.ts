import { Maybe } from "../../general"
import { Symbol, SYMBOLS } from "../notations"
import { SymbolLongAscii, SymbolUnicode } from "./types"

const unicodeFromAscii = (ascii: SymbolLongAscii): SymbolUnicode => {
    const symbol: Maybe<Symbol> = SYMBOLS.find((symbol: Symbol): boolean => symbol.revoAscii === ascii)

    if (!symbol) {
        throw new Error(`No symbol found with ascii ${ascii}`)
    }

    return symbol.revoUnicode
}

export {
    unicodeFromAscii,
}
