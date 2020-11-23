import {count, formatTable, Io, isUndefined, Maybe, Row, Table} from "../../../../general"
import {CommaClassId, JiPitchAnalysis} from "../../../../sagittal"
import {jiPitchScriptGroupSettings} from "../../globals"
import {JI_PITCHES_OR_FIND_COMMAS_FIELD_TITLES} from "../fieldTitles"
import {computeJiPitchesOrFindCommasHeaderRows} from "../headerRows"
import {computeOrderedTableAndAlignment} from "../orderedFields"
import {computeJiPitchesRow} from "../row"
import {computeMaxMonzoLength, computeSplitMonzoAndQuotientTableAlignment} from "../splitMonzoAndQuotient"

const computeJiPitchesOutput = (
    jiPitchAnalyses: JiPitchAnalysis[],
    maybeCommaClassIds: Array<Maybe<CommaClassId>>,
): Io => {
    const maxMonzoLength = computeMaxMonzoLength(jiPitchAnalyses)
    const jiPitchesHeaderRows = computeJiPitchesOrFindCommasHeaderRows(maxMonzoLength)
    const headerRowCount = count(jiPitchesHeaderRows)
    let tableAlignment = computeSplitMonzoAndQuotientTableAlignment(jiPitchesHeaderRows)

    let jiPitchesTable: Table<JiPitchAnalysis> = [
        ...jiPitchesHeaderRows,
        ...jiPitchAnalyses.map((jiPitchAnalysis: JiPitchAnalysis, index: number): Row<{of: JiPitchAnalysis}> => {
            return computeJiPitchesRow(jiPitchAnalysis, maybeCommaClassIds[index], maxMonzoLength)
        }),
    ]

    if (!isUndefined(jiPitchScriptGroupSettings.orderedFields)) {
        const {
            table: orderedJiPitchesTable,
            tableAlignment: orderedTableAlignment,
        } = computeOrderedTableAndAlignment(
            {table: jiPitchesTable, tableAlignment},
            {maxMonzoLength, fieldTitles: JI_PITCHES_OR_FIND_COMMAS_FIELD_TITLES},
        )
        jiPitchesTable = orderedJiPitchesTable
        tableAlignment = orderedTableAlignment
    }

    return formatTable(jiPitchesTable, {headerRowCount, tableAlignment})
}

export {
    computeJiPitchesOutput,
}
