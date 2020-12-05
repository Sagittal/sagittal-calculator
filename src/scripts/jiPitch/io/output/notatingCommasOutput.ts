import {
    BLANK,
    computeExampleElement,
    count,
    formatTable,
    Io,
    isEmpty,
    isUndefined,
    Maybe,
    Row,
    sumTexts,
} from "@sagittal/general"
import {CommaAnalysis, CommaClassId} from "@sagittal/system"
import {jiPitchScriptGroupSettings} from "../../globals"
import {COMMA_FIELD_TITLES} from "../fieldTitles"
import {computeNotatingCommasHeaderRows} from "../headerRows"
import {computeOrderedTableAndAlignment} from "../orderedFields"
import {computeNotatingCommasRow} from "../row"
import {computeMaxMonzoLength, computeSplitMonzoAndQuotientTableAlignment} from "../splitMonzoAndQuotient"
import {NOTATING_COMMAS_TABLE_TITLE} from "../tableTitles"
import {NO_RESULTS} from "./constants"

const computeNotatingCommasOutput = (
    notatingCommaAnalyses: CommaAnalysis[],
    maybeCommaClassIds: Array<Maybe<CommaClassId>>,
): Io => {
    if (isEmpty(notatingCommaAnalyses)) return sumTexts(NOTATING_COMMAS_TABLE_TITLE, NO_RESULTS)

    const maxMonzoLength = computeMaxMonzoLength(notatingCommaAnalyses)
    const notatingCommasHeaderRows = computeNotatingCommasHeaderRows(maxMonzoLength)
    const headerRowCount = count(notatingCommasHeaderRows)
    let tableAlignment = computeSplitMonzoAndQuotientTableAlignment(notatingCommasHeaderRows)

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
            tableAlignment: orderedTableAlignment,
        } = computeOrderedTableAndAlignment(
            {table: notatingCommasTable, tableAlignment},
            {maxMonzoLength, fieldTitles: COMMA_FIELD_TITLES},
        )
        notatingCommasTable = orderedNotatingCommasTable
        tableAlignment = orderedTableAlignment
    }

    if (isEmpty(computeExampleElement(notatingCommasTable))) return BLANK

    return sumTexts(
        NOTATING_COMMAS_TABLE_TITLE,
        formatTable(notatingCommasTable, {headerRowCount, tableAlignment}),
    )
}

export {
    computeNotatingCommasOutput,
}
