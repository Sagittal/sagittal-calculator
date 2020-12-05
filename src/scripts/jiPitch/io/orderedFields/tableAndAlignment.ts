import {Column, Index} from "@sagittal/general"
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
    const {maxMonzoLength, recognizeNameTitleAsBeingFor23FreeClass, fieldTitles} = options

    const orderedFields = jiPitchScriptGroupSettings.orderedFields!
        .filter((orderedField: JiPitchScriptGroupField): boolean => {
            return Object.keys(fieldTitles).includes(orderedField)
        }) as JiPitchScriptGroupField[]
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
