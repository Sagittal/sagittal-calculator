import {Alignment, Column, Index, isArray, isUndefined, Maybe, TableAlignment} from "@sagittal/general"

const computeOrderedTableAlignment = (
    tableAlignment: TableAlignment,
    columnIndices: Array<Index<Column>>,
): TableAlignment => {
    return isUndefined(tableAlignment) ?
        tableAlignment :
        isArray(tableAlignment) ?
            tableAlignment.map((_: Maybe<Alignment>, index: number): Maybe<Alignment> => {
                return (tableAlignment as Array<Maybe<Alignment>>)[columnIndices[index]] as Maybe<Alignment>
            }) :
            tableAlignment
}

export {
    computeOrderedTableAlignment,
}
