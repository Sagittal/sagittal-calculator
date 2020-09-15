import { Maybe } from "../../general"
import { RevoSymbol, REVO_SYMBOLS } from "../notations"
import { SymbolLongAscii, SymbolUnicode } from "./types"

const unicodeFromAscii = (ascii: SymbolLongAscii): SymbolUnicode => {
    const revoSymbol: Maybe<RevoSymbol> = REVO_SYMBOLS
        .find((revoSymbol: RevoSymbol): boolean => revoSymbol.ascii === ascii)

    if (!revoSymbol) {
        throw new Error(`No symbol found with ascii ${ascii}`)
    }

    return revoSymbol.unicode
}

export {
    unicodeFromAscii,
}
