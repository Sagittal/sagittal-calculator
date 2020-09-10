import { BLANK, Column, Formatted, max, Row } from "../../../general"

const computeHeaderRowsFromColumnTitleColumns = <T>(
    columnTitleColumns: Array<Column<T>>,
    { includeSpacerRow = false }: { includeSpacerRow?: boolean } = {},
): Array<Row<{ of: T, header: true }>> => {
    const maxColumnTitleHeaderRowCount = max(...columnTitleColumns.map(columnTitleColumn => columnTitleColumn.length))

    const rows: Array<Row<{ of: T, header: true }>> = [...Array(maxColumnTitleHeaderRowCount).keys()]
        .map(_ => [] as unknown[] as Row<{ of: T, header: true }>)

    columnTitleColumns.forEach(columnTitleColumn => {
        while (columnTitleColumn.length < maxColumnTitleHeaderRowCount) {
            columnTitleColumn.unshift(BLANK as Formatted<unknown>)
        }

        columnTitleColumn.forEach((columnTitleCell: Formatted<unknown>, index: number) => {
            rows[ index ].push(columnTitleCell)
        })
    })

    if (includeSpacerRow) {
        rows.push([...Array(columnTitleColumns.length).keys()].map(_ => "") as Row<{ of: T, header: true }>)
    }

    return rows
}

export {
    computeHeaderRowsFromColumnTitleColumns,
}
