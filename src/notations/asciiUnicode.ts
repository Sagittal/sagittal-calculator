import { SYMBOLS } from "./ji/symbols"
import { SagittalSymbol } from "./ji/types"

const unicodeFromAscii: (ascii: string) => string =
    (ascii: string): string => {
        const symbol: SagittalSymbol | undefined = SYMBOLS.find(symbol => symbol.ascii === ascii)

        if (!symbol) throw new Error(`No symbol found with ascii ${ascii}`)

        return symbol.unicode
    }

export {
    unicodeFromAscii,
}
