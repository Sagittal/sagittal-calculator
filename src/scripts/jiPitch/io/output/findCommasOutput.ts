import {count, formatTable, Io, isEmpty, isUndefined, Maybe, Row, sumTexts, Table} from "@sagittal/general"
import {CommaAnalysis, CommaClassId} from "@sagittal/system"
import {DEFAULT_FIND_COMMAS_OPTIONS, FindCommasOptions} from "../../findCommas"
import {jiPitchScriptGroupSettings} from "../../globals"
import {JI_PITCHES_OR_FIND_COMMAS_FIELD_TITLES} from "../fieldTitles"
import {computeJiPitchesOrFindCommasHeaderRows} from "../headerRows"
import {computeOrderedTableAndAlignment} from "../orderedFields"
import {computeFindCommasRow} from "../row"
import {computeMaxMonzoLength, computeSplitMonzoAndQuotientTableAlignment} from "../splitMonzoAndQuotient"
import {computeFindCommasTableTitle} from "../tableTitles"
import {NO_RESULTS} from "./constants"

const computeFindCommasOutput = (
    commaAnalyses: CommaAnalysis[],
    maybeCommaClassIds: Array<Maybe<CommaClassId>>,
    findCommasOptions: FindCommasOptions = DEFAULT_FIND_COMMAS_OPTIONS,
): Io => {
    const tableTitle = computeFindCommasTableTitle(findCommasOptions)

    if (isEmpty(commaAnalyses)) return sumTexts(tableTitle, NO_RESULTS)

    const maxMonzoLength = computeMaxMonzoLength(commaAnalyses)
    const findCommasHeaderRows = computeJiPitchesOrFindCommasHeaderRows(maxMonzoLength)
    const headerRowCount = count(findCommasHeaderRows)
    let tableAlignment = computeSplitMonzoAndQuotientTableAlignment(findCommasHeaderRows)

    let findCommasTable: Table<CommaAnalysis> = [
        ...findCommasHeaderRows,
        ...commaAnalyses.map((commaAnalysis: CommaAnalysis, index: number): Row<{of: CommaAnalysis}> => {
            return computeFindCommasRow(commaAnalysis, maybeCommaClassIds[index], maxMonzoLength)
        }),
    ]

    if (!isUndefined(jiPitchScriptGroupSettings.orderedFields)) {
        const {
            table: orderedFindCommasTable,
            tableAlignment: orderedTableAlignment,
        } = computeOrderedTableAndAlignment(
            {table: findCommasTable, tableAlignment},
            {maxMonzoLength, fieldTitles: JI_PITCHES_OR_FIND_COMMAS_FIELD_TITLES},
        )
        findCommasTable = orderedFindCommasTable
        tableAlignment = orderedTableAlignment
    }

    return sumTexts(
        tableTitle,
        formatTable(findCommasTable, {headerRowCount, tableAlignment}),
    )
}

export {
    computeFindCommasOutput,
}
