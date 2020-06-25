const computeColumnWidths = data => {
    const exampleRow = data[0]
    const exampleRowCells = exampleRow.split("\t")
    const columnCount = exampleRowCells.length
    const columnRange = [...Array(columnCount).keys()]

    return columnRange.map(columnIndex => {
        return data.reduce(
            (columnWidth, row) => {
                const rowCells = row.split("\t")
                const columnCell = rowCells[columnIndex]
                const cellWidth = columnCell.length
                if (cellWidth > columnWidth) {
                    columnWidth = cellWidth
                }

                return columnWidth
            },
            0,
        )
    })
}

const alignTable = data => {
    const columnWidths = computeColumnWidths(data)

    return data.map(row => {
        const rowCells = row.split("\t")
        const finalIndex = rowCells.length - 1

        return rowCells.reduce(
            (alignedRow, rowCell, index) => {
                const columnWidth = columnWidths[index]

                let alignedRowCell = rowCell
                while (alignedRowCell.length < columnWidth) {
                    alignedRowCell = alignedRowCell + " "
                }

                const maybeDelimeter = index === finalIndex ? "" : "\t"

                return alignedRow + alignedRowCell + maybeDelimeter
            },
            "",
        )
    })
}

module.exports = {
    alignTable,
}
