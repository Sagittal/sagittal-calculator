const computeColumnWidths = (data, columnRange) => {
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

const computeColumnRange = data => {
    const exampleRow = data[0]
    const exampleRowCells = exampleRow.split("\t")
    const columnCount = exampleRowCells.length
    const columnRange = [...Array(columnCount).keys()]

    return columnRange
}

const computeJustifications = (justification, columnRange) => {
    return typeof justification === "string" ? columnRange.map(index => justification) : columnRange.map(index => justification[index] || "LEFT")
}

const alignTable = (data, {justification = "LEFT"} = {}) => {
    const columnRange = computeColumnRange(data)
    const columnWidths = computeColumnWidths(data, columnRange)

    const justifications = computeJustifications(justification, columnRange)

    return data.map(row => {
        const rowCells = row.split("\t")
        const finalIndex = rowCells.length - 1

        return rowCells.reduce(
            (alignedRow, rowCell, index) => {
                const columnWidth = columnWidths[index]
                const columnJustification = justifications[index]

                let alignedRowCell = rowCell
                while (alignedRowCell.length < columnWidth) {
                    alignedRowCell = columnJustification === "LEFT" ? alignedRowCell + " " : columnJustification === "RIGHT" ? " " + alignedRowCell : alignedRowCell.length % 2 === 0 ? " " + alignedRowCell : alignedRowCell + " "
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
