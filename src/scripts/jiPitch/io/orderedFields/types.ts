import {Column, Count, Exponent, Index, Io, Max, Prime, Table, TableAlignment} from "@sagittal/general"
import {JiPitchScriptGroupField} from "../../types"

interface OrderableTableInformation<T> {
    table: Table<T>,
    tableAlignment: TableAlignment,
}

type SharedOrderedFieldsOptions = Partial<{
    maxMonzoLength: Max<Count<Exponent<Prime>>>,
    recognizeNameTitleAsBeingFor23FreeClass: boolean,
}>

interface OffsetColumnIndexOffsetOptions extends SharedOrderedFieldsOptions {
    field: JiPitchScriptGroupField,
}

interface OrderedTableAndAlignmentOptions extends SharedOrderedFieldsOptions {
    fieldTitles: Partial<Record<JiPitchScriptGroupField, Io>>,
}

interface MaybeAppendAdditionalColumnIndicesForSplitFieldOptions extends SharedOrderedFieldsOptions {
    columnIndex: Index<Column>,
    orderedField: JiPitchScriptGroupField,
}

interface AppendAdditionalColumnIndicesForSplitFieldOptions {
    columnIndex: Index<Column>,
    additionalColumnCount: Count<Column>,
}

export {
    OrderableTableInformation,
    OffsetColumnIndexOffsetOptions,
    OrderedTableAndAlignmentOptions,
    MaybeAppendAdditionalColumnIndicesForSplitFieldOptions,
    AppendAdditionalColumnIndicesForSplitFieldOptions,
}
