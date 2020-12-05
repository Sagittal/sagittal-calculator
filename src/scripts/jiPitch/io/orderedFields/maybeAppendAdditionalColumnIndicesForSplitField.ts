import {
    add,
    Column,
    computeRange,
    Count,
    Index,
    ioSettings,
    offset,
    Offset,
    ONE,
    Range,
    TableFormat,
} from "@sagittal/general"
import {JiPitchesOrFindCommasField, JiPitchField, Two3FreeClassField} from "../../types"
import {
    ADDITIONAL_COLUMNS_FOR_SPLIT_2_3_FREE_CLASS_FIELD,
    ADDITIONAL_COLUMNS_FOR_SPLIT_QUOTIENT_FIELD,
    computeAdditionalColumnCountForSplitMonzoField,
} from "./additionalColumnsForSplitFields"
import {
    AppendAdditionalColumnIndicesForSplitFieldOptions,
    MaybeAppendAdditionalColumnIndicesForSplitFieldOptions,
} from "./types"

const computeAdditionalColumnIndexOffsets = (additionalColumnCount: Count<Column>): Range<Offset<Index<Column>>> =>
    computeRange(ONE, add(additionalColumnCount, ONE)) as Range<Offset<Index<Column>>>

const appendAdditionalColumnIndicesForSplitField = (
    orderedColumnIndices: Array<Index<Column>>,
    {columnIndex, additionalColumnCount}: AppendAdditionalColumnIndicesForSplitFieldOptions,
): void => {
    computeAdditionalColumnIndexOffsets(additionalColumnCount)
        .forEach((additionalColumnIndexOffset: Offset<Index<Column>>): void => {
            orderedColumnIndices.push(offset(columnIndex, additionalColumnIndexOffset))
        })
}

// Note the strong parallelism between this method and splitMonzoAndQuotientFieldTitles
const maybeAppendAdditionalColumnIndicesForSplitField = (
    orderedColumnIndices: Array<Index<Column>>,
    options: MaybeAppendAdditionalColumnIndicesForSplitFieldOptions,
): void => {
    const {orderedField, maxMonzoLength, columnIndex, recognizeNameTitleAsBeingFor23FreeClass} = options

    if (orderedField === JiPitchField.MONZO) {
        appendAdditionalColumnIndicesForSplitField(
            orderedColumnIndices,
            {
                columnIndex,
                additionalColumnCount: computeAdditionalColumnCountForSplitMonzoField(maxMonzoLength),
            },
        )
    } else if (ioSettings.tableFormat !== TableFormat.FORUM) {
        if (orderedField === JiPitchField.QUOTIENT) {
            appendAdditionalColumnIndicesForSplitField(
                orderedColumnIndices,
                {
                    columnIndex,
                    additionalColumnCount: ADDITIONAL_COLUMNS_FOR_SPLIT_QUOTIENT_FIELD,
                },
            )
        } else if (orderedField === JiPitchesOrFindCommasField.TWO_3_FREE_CLASS_NAME) {
            appendAdditionalColumnIndicesForSplitField(
                orderedColumnIndices,
                {
                    columnIndex,
                    additionalColumnCount: ADDITIONAL_COLUMNS_FOR_SPLIT_2_3_FREE_CLASS_FIELD,
                },
            )
        } else if (
            orderedField === Two3FreeClassField.TWO_3_FREE_CLASS_NAME
            && recognizeNameTitleAsBeingFor23FreeClass
        ) {
            appendAdditionalColumnIndicesForSplitField(
                orderedColumnIndices,
                {
                    columnIndex,
                    additionalColumnCount: ADDITIONAL_COLUMNS_FOR_SPLIT_2_3_FREE_CLASS_FIELD,
                },
            )
        }
    }
}

export {
    maybeAppendAdditionalColumnIndicesForSplitField,
}
