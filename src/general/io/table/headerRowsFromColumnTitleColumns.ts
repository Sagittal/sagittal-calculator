import {BLANK, Cell, Column, count, Count, Formatted, max, Maybe, Row} from "../../../general"

const computeHeaderRowsFromColumnTitleColumns = <T>(
    columnTitleColumns: Array<Column<{of: T, header: true}>>,
    {includeSpacerRow = false}: {includeSpacerRow?: boolean} = {},
): Array<Row<{of: T, header: true}>> => {
    const maxColumnTitleHeaderRowCount = max(
        ...columnTitleColumns.map((columnTitleColumn: Column<{of: T, header: true}>): Count<Maybe<Formatted<T>>> => {
            return count(columnTitleColumn)
        }),
    )

    const rows: Array<Row<{of: T, header: true}>> = [...Array(maxColumnTitleHeaderRowCount).keys()]
        .map((_: number): Row<{of: T, header: true}> => [] as unknown[] as Row<{of: T, header: true}>)

    columnTitleColumns.forEach((columnTitleColumn: Column<{of: T, header: true}>): void => {
        while (columnTitleColumn.length < maxColumnTitleHeaderRowCount) {
            columnTitleColumn.unshift(BLANK as Formatted<T>)
        }

        columnTitleColumn.forEach((columnTitleCell: Cell<{of: T, header: true}>, index: number): void => {
            rows[index].push(columnTitleCell)
        })
    })

    if (includeSpacerRow) {
        rows.push([...Array(columnTitleColumns.length).keys()]
            .map((_: number): string => BLANK) as Row<{of: T, header: true}>)
    }

    return rows
}

export {
    computeHeaderRowsFromColumnTitleColumns,
}
