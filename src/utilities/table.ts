import { Justification } from "./types"

const computeColumnWidths = (data: string[], columnRange: number[]) => {
    return columnRange.map(columnIndex => {
        return data.reduce(
            (columnWidth, row) => {
                const rowCells = row.split("\t")
                const columnCell = rowCells[ columnIndex ]
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

const computeColumnRange = (data: string[]) => {
    const exampleRow = data[ 0 ]
    const exampleRowCells = exampleRow.split("\t")
    const columnCount = exampleRowCells.length

    return [...Array(columnCount).keys()]
}

const computeJustifications = (justification: Justification, columnRange: number[]) => {
    return typeof justification === "string" ?
        columnRange.map(_ => justification) :
        columnRange.map(index => justification[ index ] || Justification.LEFT)
}

const furtherAlignRowCell = (alignedRowCell: string, columnJustification: Justification) => {
    return columnJustification === Justification.LEFT ?
        alignedRowCell + " " :
        columnJustification === Justification.RIGHT ?
            " " + alignedRowCell :
            alignedRowCell.length % 2 === 0 ?
                " " + alignedRowCell :
                alignedRowCell + " "
}

const computeAlignedRowCell = (rowCell: string, { columnWidth, columnJustification }: { columnWidth: number, columnJustification: Justification }) => {
    let alignedRowCell = rowCell
    while (alignedRowCell.length < columnWidth) {
        alignedRowCell = furtherAlignRowCell(alignedRowCell, columnJustification)
    }

    return alignedRowCell
}

const alignTable = (data: string[], { justification = Justification.LEFT }: any = {}) => {
    const columnRange = computeColumnRange(data)
    const columnWidths = computeColumnWidths(data, columnRange)

    const justifications = computeJustifications(justification, columnRange)

    return data.map(row => {
        const rowCells = row.split("\t")
        const finalIndex = rowCells.length - 1

        return rowCells.reduce(
            (alignedRow, rowCell, index) => {
                const columnWidth = columnWidths[ index ]
                const columnJustification = justifications[ index ]

                let alignedRowCell = computeAlignedRowCell(rowCell, { columnWidth, columnJustification })

                const maybeDelimeter = index === finalIndex ? "" : "\t"

                return alignedRow + alignedRowCell + maybeDelimeter
            },
            "",
        )
    })
}

export {
    alignTable,
}
