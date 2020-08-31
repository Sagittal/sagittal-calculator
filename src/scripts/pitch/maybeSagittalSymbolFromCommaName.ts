import { isUndefined, Maybe, Name } from "../../general"
import { AnalyzedRationalPitch, getSagittalComma, JI_SYMBOLS, SymbolLongAscii } from "../../sagittal"

// TODO: using the name to find the symbol is bad
//  because you can have the name in a format other than it is stored in the database
//  you should really go back to finding it by the monzo
//  but this is a helfpul step for now I think
//  you should probably write a test that catches and fixes that.
//  but I guess first it should let you ever ask for comma names in another form
const getMaybeSagittalSymbolWithPrimaryCommaName = (name: Name<AnalyzedRationalPitch>): Maybe<SymbolLongAscii> => {
    const jiSymbol = JI_SYMBOLS.find(jiSymbol => {
        const primaryComma = getSagittalComma(jiSymbol.primaryCommaId)

        return primaryComma.name === name
    })

    if (!isUndefined(jiSymbol)) {
        return jiSymbol.ascii
    }

    return undefined
}

export {
    getMaybeSagittalSymbolWithPrimaryCommaName,
}
