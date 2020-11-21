import {Column, Index} from "../../../../general"
import {jiPitchScriptGroupSettings} from "../../globals"
import {JiPitchScriptGroupField} from "../../types"
import {computeOrderedColumnIndex} from "./columnIndex"
import {computeOrderedJustification} from "./justification"
import {maybeAppendAdditionalColumnIndicesForSplitField} from "./maybeAppendAdditionalColumnIndicesForSplitField"
import {computeOrderedTable} from "./table"
import {OrderableTableInformation, OrderedTableAndJustificationOptions} from "./types"

const computeOrderedTableAndJustification = <T>(
    {table, justification}: OrderableTableInformation<T>,
    options: OrderedTableAndJustificationOptions,
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
        justification: computeOrderedJustification(justification, orderedColumnIndices),
    }
}

export {
    computeOrderedTableAndJustification,
}
