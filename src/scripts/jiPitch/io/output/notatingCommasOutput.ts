import {count, formatTable, Io, isUndefined, Maybe, Row, sumTexts} from "../../../../general"
import {CommaAnalysis, CommaClassId} from "../../../../sagittal"
import {jiPitchScriptGroupSettings} from "../../globals"
import {NOTATING_COMMAS_FIELD_TITLES} from "../fieldTitles"
import {computeNotatingCommasHeaderRows} from "../headerRows"
import {computeOrderedTableAndJustification} from "../orderedFields"
import {computeNotatingCommasRow} from "../row"
import {computeMaxMonzoLength, computeMonzoAndQuotientJustification} from "../splitMonzoAndQuotient"
import {NOTATING_COMMAS_TABLE_TITLE} from "../tableTitles"

const computeNotatingCommasOutput = (
    notatingCommaAnalyses: CommaAnalysis[],
    maybeCommaClassIds: Array<Maybe<CommaClassId>>,
): Io => {
    const maxMonzoLength = computeMaxMonzoLength(notatingCommaAnalyses)
    const notatingCommasHeaderRows = computeNotatingCommasHeaderRows(maxMonzoLength)
    const headerRowCount = count(notatingCommasHeaderRows)
    let justification = computeMonzoAndQuotientJustification(notatingCommasHeaderRows)

    let notatingCommasTable = [
        ...notatingCommasHeaderRows,
        ...notatingCommaAnalyses
            .map((notatingCommaAnalysis: CommaAnalysis, index: number): Row<{of: CommaAnalysis}> => {
                return computeNotatingCommasRow(notatingCommaAnalysis, maybeCommaClassIds[index], maxMonzoLength)
            }),
    ]

    if (!isUndefined(jiPitchScriptGroupSettings.orderedFields)) {
        const {
            table: orderedNotatingCommasTable,
            justification: orderedJustification,
        } = computeOrderedTableAndJustification(
            {table: notatingCommasTable, justification},
            {maxMonzoLength, fieldTitles: NOTATING_COMMAS_FIELD_TITLES},
        )
        notatingCommasTable = orderedNotatingCommasTable
        justification = orderedJustification
    }

    return sumTexts(
        NOTATING_COMMAS_TABLE_TITLE,
        formatTable(notatingCommasTable, {headerRowCount, justification}),
    )
}

export {
    computeNotatingCommasOutput,
}
