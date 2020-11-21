import {Column, Count, Exponent, Index, Io, JustificationOption, Max, Prime, Table} from "../../../../general"
import {JiPitchScriptGroupField} from "../../types"

interface OrderableTableInformation<T> {
    table: Table<T>,
    justification: JustificationOption,
}

type SharedOrderedFieldsOptions = Partial<{
    maxMonzoLength: Max<Count<Exponent<Prime>>>,
    recognizeNameTitleAsBeingFor23FreeClass: boolean,
}>

interface OffsetColumnIndexOffsetOptions extends SharedOrderedFieldsOptions {
    field: JiPitchScriptGroupField,
}

interface OrderedTableAndJustificationOptions extends SharedOrderedFieldsOptions {
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
    OrderedTableAndJustificationOptions,
    MaybeAppendAdditionalColumnIndicesForSplitFieldOptions,
    AppendAdditionalColumnIndicesForSplitFieldOptions,
}
