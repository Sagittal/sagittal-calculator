import {Cell, Column, Index, Row, Table} from "../../../../general"

const computeOrderedTable = <T>(table: Table<T>, orderedColumnIndices: Array<Index<Column>>): Table<T> =>
    table.map((row: Row<{of: T}>): Row<{of: T}> =>
        orderedColumnIndices.map((columnIndex: Index<Column>): Cell<{of: T}> =>
            row[columnIndex],
        ) as Row<{of: T}>,
    )

export {
    computeOrderedTable,
}
