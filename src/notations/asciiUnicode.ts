import { JI_SYMBOLS, JiSymbol } from "./ji"
import { SymbolLongAscii, SymbolUnicode } from "./types"

const unicodeFromAscii = (ascii: SymbolLongAscii): SymbolUnicode => {
    const symbol: JiSymbol | undefined = JI_SYMBOLS.find(symbol => symbol.ascii === ascii)

    if (!symbol) {
        throw new Error(`No symbol found with ascii ${ascii}`)
    }

    return symbol.unicode
}

export {
    unicodeFromAscii,
}
