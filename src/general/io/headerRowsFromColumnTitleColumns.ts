import { Column, IO, max, Row } from "../../general"

const computeHeaderRowsFromColumnTitleColumns = (columnTitleColumns: Column[]): Row[] => {
    const maxColumnTitleHeaderRowCount = max(...columnTitleColumns.map(columnTitleColumn => columnTitleColumn.length))

    const rows: Row[] = [...Array(maxColumnTitleHeaderRowCount).keys()].map(_ => [] as unknown[] as Row)

    columnTitleColumns.forEach(columnTitleColumn => {
        while (columnTitleColumn.length < maxColumnTitleHeaderRowCount) {
            columnTitleColumn.unshift("" as IO)
        }

        columnTitleColumn.forEach((columnTitleCell: IO, index) => {
            rows[ index ].push(columnTitleCell)
        })
    })

    return rows
}

export {
    computeHeaderRowsFromColumnTitleColumns,
}
