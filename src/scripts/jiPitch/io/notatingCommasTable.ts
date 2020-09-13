import { addTexts, Comma, formatTable, Id, JiPitch, Table } from "../../../general"
import {
    addMaybeJiSymbol,
    analyzeComma,
    CommaAnalysis,
    computeNotatingCommas,
    JiSymbol,
} from "../../../sagittal"
import { jiPitchScriptGroupSettings } from "../globals"
import { NOTATING_COMMA_WITH_MAYBE_SAGITTAL_SYMBOLS_HEADER_ROW } from "./headerRows"
import { computeNotatingCommaWithMaybeSagittalSymbolRow } from "./notatingCommaRow"
import { NOTATING_COMMAS_TABLE_TITLE } from "./titles"

const computeNotatingCommasTable = (jiPitch: JiPitch) => {
    const notatingCommas: Comma[] = computeNotatingCommas(jiPitch, jiPitchScriptGroupSettings)
    const notatingCommasWithMaybeSagittalSymbols = notatingCommas.map(addMaybeJiSymbol)
    const notatingCommasWithMaybeSagittalSymbolsAnalyses = notatingCommasWithMaybeSagittalSymbols.map(comma => {
        return analyzeComma(comma, jiPitchScriptGroupSettings.commaNameOptions)
    })
    const maybeNotatingCommasWithMaybeSagittalSymbolsTable: Table<CommaAnalysis & { symbolId?: Id<JiSymbol> }> =
        notatingCommasWithMaybeSagittalSymbolsAnalyses.map(computeNotatingCommaWithMaybeSagittalSymbolRow)
    maybeNotatingCommasWithMaybeSagittalSymbolsTable.unshift(NOTATING_COMMA_WITH_MAYBE_SAGITTAL_SYMBOLS_HEADER_ROW)

    return addTexts(NOTATING_COMMAS_TABLE_TITLE, formatTable(maybeNotatingCommasWithMaybeSagittalSymbolsTable))
}

export {
    computeNotatingCommasTable,
}
