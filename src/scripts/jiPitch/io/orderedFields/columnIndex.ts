import {Column, Count, Decimal, Exponent, Index, Max, Offset, offset, Prime} from "@sagittal/general"
import {JiPitchesOrFindCommasField, JiPitchField, JiPitchScriptGroupField, Two3FreeClassField} from "../../types"
import {
    ADDITIONAL_COLUMNS_FOR_SPLIT_2_3_FREE_CLASS_FIELD,
    ADDITIONAL_COLUMNS_FOR_SPLIT_QUOTIENT_FIELD,
    computeAdditionalColumnCountForSplitMonzoField,
} from "./additionalColumnsForSplitFields"
import {OffsetColumnIndexOffsetOptions, OrderedTableAndAlignmentOptions} from "./types"

const offsetColumnIndexOffset = (
    options: OffsetColumnIndexOffsetOptions,
): Offset<Offset<Index<Column>>> => {
    const {field, maxMonzoLength = 0 as Max<Count<Exponent<Prime>>>, recognizeNameTitleAsBeingFor23FreeClass} = options
    switch (field) {
        case JiPitchField.MONZO:
            return computeAdditionalColumnCountForSplitMonzoField(maxMonzoLength) as
                Decimal<{integer: true}> as Offset<Offset<Index<Column>>>
        case JiPitchField.QUOTIENT:
            return ADDITIONAL_COLUMNS_FOR_SPLIT_QUOTIENT_FIELD as
                Decimal<{integer: true}> as Offset<Offset<Index<Column>>>
        case JiPitchesOrFindCommasField.TWO_3_FREE_CLASS_NAME:
            return ADDITIONAL_COLUMNS_FOR_SPLIT_2_3_FREE_CLASS_FIELD as
                Decimal<{integer: true}> as Offset<Offset<Index<Column>>>
        case Two3FreeClassField.TWO_3_FREE_CLASS_NAME:
            return recognizeNameTitleAsBeingFor23FreeClass ?
                ADDITIONAL_COLUMNS_FOR_SPLIT_2_3_FREE_CLASS_FIELD as
                    Decimal<{integer: true}> as Offset<Offset<Index<Column>>> :
                0 as Offset<Offset<Index<Column>>>
        default:
            return 0 as Offset<Offset<Index<Column>>>
    }
}

const computeOrderedColumnIndex = (
    orderedField: JiPitchScriptGroupField,
    {fieldTitles, maxMonzoLength, recognizeNameTitleAsBeingFor23FreeClass}: OrderedTableAndAlignmentOptions,
): Index<Column> => {
    let columnIndexOffset = 0 as Offset<Index<Column>>

    const fields = Object.keys(fieldTitles) as JiPitchScriptGroupField[]
    const fieldIndex = fields.findIndex((field: JiPitchScriptGroupField): boolean => {
        if (orderedField === field) return true

        columnIndexOffset = offset(
            columnIndexOffset,
            offsetColumnIndexOffset({
                field,
                maxMonzoLength,
                recognizeNameTitleAsBeingFor23FreeClass,
            }),
        )

        return false
    }) as Index<JiPitchScriptGroupField>

    return offset(fieldIndex as Index as Index<Column>, columnIndexOffset)
}

export {
    computeOrderedColumnIndex,
}
