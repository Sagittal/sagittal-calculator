import { alignTable, computeMonzoFromCommand, formatMonzo, formatNumber, formatRatio, Id } from "../../../general"
import { computeNotatingJiSymbolIds, getJiSymbol, getSagittalComma, JiSymbol } from "../../../notations"

// TODO: it might be nice to share the logic from formatSymbolAscii
//  for centering symbols on shafts, ratios on slash, and monzos on terms
//  into the alignTable method

// TODO: this is technically notating JI symbols... but it would be pretty cool if it could return all possible
//  notating symbols and just not provide an ID if they aren't in Sagittal

const monzo = computeMonzoFromCommand()

const notatingSymbolIds = computeNotatingJiSymbolIds(monzo)

// TODO: extract this
const notatingSymbolTableData = notatingSymbolIds.map((jiSymbolId: Id<JiSymbol>) => {
    const { primaryCommaId, ascii: symbol } = getJiSymbol(jiSymbolId)
    const { name, monzo, cents, ratio } = getSagittalComma(primaryCommaId)

    const formattedRatio = formatRatio(ratio)
    const formattedMonzo = formatMonzo(monzo)
    const formattedCents = formatNumber(cents)

    return `${symbol}\t${name}\t${formattedRatio}\t${formattedMonzo}\t${formattedCents}`
})

const NOTATING_SYMBOLS_HEADER_ROW = ["symbol", "name", "ratio", "monzo", "cents"].join("\t")
notatingSymbolTableData.unshift(NOTATING_SYMBOLS_HEADER_ROW)

console.log(alignTable(notatingSymbolTableData).join("\n"))
