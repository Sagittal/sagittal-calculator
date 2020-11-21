import {count, formatTable, Io, isUndefined, Maybe, Row, sumTexts, Table} from "../../../../general"
import {CommaAnalysis, CommaClassId} from "../../../../sagittal"
import {DEFAULT_FIND_COMMAS_SETTINGS, FindCommasSettings} from "../../findCommas"
import {jiPitchScriptGroupSettings} from "../../globals"
import {JI_PITCHES_OR_FIND_COMMAS_FIELD_TITLES} from "../fieldTitles"
import {computeJiPitchesOrFindCommasHeaderRows} from "../headerRows"
import {computeOrderedTableAndJustification} from "../orderedFields"
import {computeFindCommasRow} from "../row"
import {computeMaxMonzoLength, computeMonzoAndQuotientJustification} from "../splitMonzoAndQuotient"
import {computeFindCommasTableTitle} from "../tableTitles"

const computeFindCommasOutput = (
    commaAnalyses: CommaAnalysis[],
    maybeCommaClassIds: Array<Maybe<CommaClassId>>,
    findCommasSettings: FindCommasSettings = DEFAULT_FIND_COMMAS_SETTINGS,
): Io => {
    const maxMonzoLength = computeMaxMonzoLength(commaAnalyses)
    const findCommasHeaderRows = computeJiPitchesOrFindCommasHeaderRows(maxMonzoLength)
    const headerRowCount = count(findCommasHeaderRows)
    let justification = computeMonzoAndQuotientJustification(findCommasHeaderRows)

    let findCommasTable: Table<CommaAnalysis> = [
        ...findCommasHeaderRows,
        ...commaAnalyses.map((commaAnalysis: CommaAnalysis, index: number): Row<{of: CommaAnalysis}> => {
            return computeFindCommasRow(commaAnalysis, maybeCommaClassIds[index], maxMonzoLength)
        }),
    ]

    if (!isUndefined(jiPitchScriptGroupSettings.orderedFields)) {
        const {
            table: orderedFindCommasTable,
            justification: orderedJustification,
        } = computeOrderedTableAndJustification(
            {table: findCommasTable, justification},
            {maxMonzoLength, fieldTitles: JI_PITCHES_OR_FIND_COMMAS_FIELD_TITLES},
        )
        findCommasTable = orderedFindCommasTable
        justification = orderedJustification
    }

    return sumTexts(
        computeFindCommasTableTitle(findCommasSettings),
        formatTable(findCommasTable, {headerRowCount, justification}),
    )
}

export {
    computeFindCommasOutput,
}
