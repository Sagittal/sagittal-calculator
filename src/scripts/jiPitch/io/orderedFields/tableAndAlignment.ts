import {Column, Index} from "../../../../general"
import {jiPitchScriptGroupSettings} from "../../globals"
import {JiPitchScriptGroupField} from "../../types"
import {computeOrderedTableAlignment} from "./alignment"
import {computeOrderedColumnIndex} from "./columnIndex"
import {maybeAppendAdditionalColumnIndicesForSplitField} from "./maybeAppendAdditionalColumnIndicesForSplitField"
import {computeOrderedTable} from "./table"
import {OrderableTableInformation, OrderedTableAndAlignmentOptions} from "./types"

const computeOrderedTableAndAlignment = <T>(
    {table, tableAlignment}: OrderableTableInformation<T>,
    options: OrderedTableAndAlignmentOptions,
): OrderableTableInformation<T> => {
    const {maxMonzoLength, recognizeNameTitleAsBeingFor23FreeClass} = options

    const orderedFields = jiPitchScriptGroupSettings.orderedFields as JiPitchScriptGroupField[]
    const orderedColumnIndices = [] as Array<Index<Column>>
    orderedFields.forEach((orderedField: JiPitchScriptGroupField): void => {
        const columnIndex = computeOrderedColumnIndex(orderedField, options)
        orderedColumnIndices.push(columnIndex)
        maybeAppendAdditionalColumnIndicesForSplitField(
            orderedColumnIndices,
            {
                columnIndex,
                orderedField,
                maxMonzoLength,
                recognizeNameTitleAsBeingFor23FreeClass,
            },
        )
    })

    return {
        table: computeOrderedTable(table, orderedColumnIndices),
        tableAlignment: computeOrderedTableAlignment(tableAlignment, orderedColumnIndices),
    }
}

export {
    computeOrderedTableAndAlignment,
}
