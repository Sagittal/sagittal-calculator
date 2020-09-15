import { addTexts, Comma, formatTable, Id, Io, JiPitch, Table } from "../../../general"
import {
    addMaybeJiNotationSymbolClassId,
    analyzeComma,
    CommaAnalysis,
    computeNotatingCommas,
    SymbolClass,
} from "../../../sagittal"
import { jiPitchScriptGroupSettings } from "../globals"
import { FindCommasOptions } from "../types"
import { NOTATING_COMMA_WITH_MAYBE_SAGITTAL_SYMBOLS_HEADER_ROW } from "./headerRows"
import { computeNotatingCommaWithMaybeSagittalSymbolClassRow } from "./notatingCommaRow"
import { NOTATING_COMMAS_TABLE_TITLE } from "./titles"

const computeNotatingCommasOutput = (jiPitch: JiPitch, findCommasOptions: Partial<FindCommasOptions> = {}): Io => {
    const notatingCommas: Comma[] =
        computeNotatingCommas(jiPitch, { ...jiPitchScriptGroupSettings, ...findCommasOptions })
    const notatingCommasWithMaybeSagittalSymbolClassIds = notatingCommas.map(addMaybeJiNotationSymbolClassId)
    const notatingCommasWithMaybeSagittalSymbolClassIdsAnalyses =
        notatingCommasWithMaybeSagittalSymbolClassIds.map((comma: Comma): CommaAnalysis => {
            return analyzeComma(comma, jiPitchScriptGroupSettings.commaNameOptions)
        })
    const maybeNotatingCommasWithMaybeSagittalSymbolsTable: Table<CommaAnalysis & { symbolClassId?: Id<SymbolClass> }> =
        notatingCommasWithMaybeSagittalSymbolClassIdsAnalyses.map(computeNotatingCommaWithMaybeSagittalSymbolClassRow)
    maybeNotatingCommasWithMaybeSagittalSymbolsTable.unshift(NOTATING_COMMA_WITH_MAYBE_SAGITTAL_SYMBOLS_HEADER_ROW)

    return addTexts(NOTATING_COMMAS_TABLE_TITLE, formatTable(maybeNotatingCommasWithMaybeSagittalSymbolsTable))
}

export {
    computeNotatingCommasOutput,
}
