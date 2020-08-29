import { BLANK, Column, IO, max, Row } from "../../general"

const computeHeaderRowsFromColumnTitleColumns = <T>(
    columnTitleColumns: Array<Column<T>>,
    { includeSpacerRow = false }: { includeSpacerRow?: boolean } = {},
): Array<Row<T, "Header">> => {
    const maxColumnTitleHeaderRowCount = max(...columnTitleColumns.map(columnTitleColumn => columnTitleColumn.length))

    const rows: Array<Row<T, "Header">> = [...Array(maxColumnTitleHeaderRowCount).keys()]
        .map(_ => [] as unknown[] as Row<T, "Header">)

    columnTitleColumns.forEach(columnTitleColumn => {
        while (columnTitleColumn.length < maxColumnTitleHeaderRowCount) {
            columnTitleColumn.unshift(BLANK)
        }

        columnTitleColumn.forEach((columnTitleCell: IO, index) => {
            rows[ index ].push(columnTitleCell)
        })
    })

    if (includeSpacerRow) {
        rows.push([...Array(columnTitleColumns.length).keys()].map(_ => "") as Row<T, "Header">)
    }

    return rows
}

export {
    computeHeaderRowsFromColumnTitleColumns,
}
