import { addTexts, formatTable, Id, Monzo, Table } from "../../../general"
import {
    addMaybeJiSymbol,
    analyzeComma,
    AnalyzedComma,
    Comma,
    CommaNameOptions,
    computeNotatingCommas,
    JiSymbol,
} from "../../../sagittal"
import { pitchScriptGroupSettings } from "../globals"
import { NOTATING_COMMAS_TABLE_TITLE } from "./constants"
import { NOTATING_COMMA_WITH_MAYBE_SAGITTAL_SYMBOLS_HEADER_ROW } from "./headerRows"
import { computeNotatingCommaWithMaybeSagittalSymbolRow } from "./notatingCommaRow"

const computeNotatingCommasTable = (monzo: Monzo, commaNameOptions: CommaNameOptions = {}) => {
    const notatingCommas: Comma[] = computeNotatingCommas(monzo, pitchScriptGroupSettings)
    const notatingCommasWithMaybeSagittalSymbols = notatingCommas.map(addMaybeJiSymbol)
    const analyzedNotatingCommaWithMaybeSagittalSymbols =
        // TODO: is it right to pass this around or grab it off pitchGroup settings her emaybe?
        notatingCommasWithMaybeSagittalSymbols.map(comma => analyzeComma(comma, commaNameOptions))
    const maybeNotatingCommaWithMaybeSagittalSymbolsTable: Table<AnalyzedComma & { symbolId?: Id<JiSymbol> }> =
        analyzedNotatingCommaWithMaybeSagittalSymbols.map(computeNotatingCommaWithMaybeSagittalSymbolRow)
    maybeNotatingCommaWithMaybeSagittalSymbolsTable.unshift(NOTATING_COMMA_WITH_MAYBE_SAGITTAL_SYMBOLS_HEADER_ROW)

    return addTexts(NOTATING_COMMAS_TABLE_TITLE, formatTable(maybeNotatingCommaWithMaybeSagittalSymbolsTable))
}

export {
    computeNotatingCommasTable,
}
