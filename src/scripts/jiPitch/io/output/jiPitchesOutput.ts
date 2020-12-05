import {count, formatTable, Io, isUndefined, Maybe, Row, Table} from "@sagittal/general"
import {CommaClassId, JiPitchAnalysis, PotentiallyCommaAnalysis} from "@sagittal/system"
import {jiPitchScriptGroupSettings} from "../../globals"
import {JI_PITCHES_OR_FIND_COMMAS_FIELD_TITLES} from "../fieldTitles"
import {computeJiPitchesOrFindCommasHeaderRows} from "../headerRows"
import {computeOrderedTableAndAlignment} from "../orderedFields"
import {computeJiPitchesRow} from "../row"
import {computeMaxMonzoLength, computeSplitMonzoAndQuotientTableAlignment} from "../splitMonzoAndQuotient"

const computeJiPitchesOutput = (
    potentiallyCommaAnalyses: PotentiallyCommaAnalysis[],
    maybeCommaClassIds: Array<Maybe<CommaClassId>>,
): Io => {
    const maxMonzoLength = computeMaxMonzoLength(potentiallyCommaAnalyses)
    const jiPitchesHeaderRows = computeJiPitchesOrFindCommasHeaderRows(maxMonzoLength)
    const headerRowCount = count(jiPitchesHeaderRows)
    let tableAlignment = computeSplitMonzoAndQuotientTableAlignment(jiPitchesHeaderRows)

    let jiPitchesTable: Table<JiPitchAnalysis> = [
        ...jiPitchesHeaderRows,
        ...potentiallyCommaAnalyses.map(
            (
                potentiallyCommaAnalysis: PotentiallyCommaAnalysis,
                index: number,
            ): Row<{of: PotentiallyCommaAnalysis}> => {
                return computeJiPitchesRow(potentiallyCommaAnalysis, maybeCommaClassIds[index], maxMonzoLength)
            },
        ),
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
