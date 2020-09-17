import { addTexts, Comma, formatTable, Id, Io, JiPitch, Table } from "../../../general"
import {
    addMaybeSymbolClassId,
    analyzeComma,
    CommaAnalysis,
    computeExactlyNotatingCommas,
    SymbolClass,
} from "../../../sagittal"
import { jiPitchScriptGroupSettings } from "../globals"
import { FindCommasOptions } from "../types"
import { computeExactlyNotatingCommaWithMaybeSagittalSymbolClassRow } from "./exactlyNotatingCommaRow"
import { EXACTLY_NOTATING_COMMA_WITH_MAYBE_SAGITTAL_SYMBOLS_HEADER_ROW } from "./headerRows"
import { EXACTLY_NOTATING_COMMAS_TABLE_TITLE } from "./titles"

const computeExactlyNotatingCommasOutput = (
    jiPitch: JiPitch,
    findCommasOptions: Partial<FindCommasOptions> = {},
): Io => {
    const exactlyNotatingCommas: Comma[] =
        computeExactlyNotatingCommas(jiPitch, { ...jiPitchScriptGroupSettings, ...findCommasOptions })
    const exactlyNotatingCommasWithMaybeSagittalSymbolClassIds =
        exactlyNotatingCommas.map(addMaybeSymbolClassId)
    const exactlyNotatingCommasWithMaybeSagittalSymbolClassIdsAnalyses =
        exactlyNotatingCommasWithMaybeSagittalSymbolClassIds.map((comma: Comma): CommaAnalysis => {
            return analyzeComma(comma, jiPitchScriptGroupSettings.commaNameOptions)
        })
    const maybeExactlyNotatingCommasWithMaybeSagittalSymbolsTable:
        Table<CommaAnalysis & { symbolClassId?: Id<SymbolClass> }> =
        exactlyNotatingCommasWithMaybeSagittalSymbolClassIdsAnalyses
            .map(computeExactlyNotatingCommaWithMaybeSagittalSymbolClassRow)
    maybeExactlyNotatingCommasWithMaybeSagittalSymbolsTable
        .unshift(EXACTLY_NOTATING_COMMA_WITH_MAYBE_SAGITTAL_SYMBOLS_HEADER_ROW)

    return addTexts(
        EXACTLY_NOTATING_COMMAS_TABLE_TITLE,
        formatTable(maybeExactlyNotatingCommasWithMaybeSagittalSymbolsTable),
    )
}

export {
    computeExactlyNotatingCommasOutput,
}
