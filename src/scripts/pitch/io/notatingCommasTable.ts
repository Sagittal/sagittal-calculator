import { addTexts, formatTable, Id, Monzo, Table } from "../../../general"
import { AnalyzedRationalPitch, JiSymbol } from "../../../sagittal"
import { addMaybeSagittalSymbol } from "../addMaybeSagittalSymbol"
import { pitchScriptGroupSettings } from "../globals"
import { computeNotatingCommas } from "../notatingCommas"
import { NOTATING_COMMAS_TABLE_TITLE } from "./constants"
import { NOTATING_COMMA_WITH_MAYBE_SAGITTAL_SYMBOLS_HEADER_ROW } from "./headerRows"
import { computeNotatingCommaWithMaybeSagittalSymbolRow } from "./notatingCommaRow"

const computeNotatingCommasTable = (monzo: Monzo) => {
    const notatingCommas = computeNotatingCommas(monzo, pitchScriptGroupSettings)
    const notatingCommaWithMaybeSagittalSymbols = notatingCommas.map(addMaybeSagittalSymbol)
    const maybeNotatingCommaWithMaybeSagittalSymbolsTable: Table<AnalyzedRationalPitch & { symbolId?: Id<JiSymbol> }> =
        notatingCommaWithMaybeSagittalSymbols.map(computeNotatingCommaWithMaybeSagittalSymbolRow)
    maybeNotatingCommaWithMaybeSagittalSymbolsTable.unshift(NOTATING_COMMA_WITH_MAYBE_SAGITTAL_SYMBOLS_HEADER_ROW)

    return addTexts(NOTATING_COMMAS_TABLE_TITLE, formatTable(maybeNotatingCommaWithMaybeSagittalSymbolsTable))
}

export {
    computeNotatingCommasTable,
}
