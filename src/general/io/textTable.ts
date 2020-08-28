import { AlignTableOptions, ComputeAlignedRowCellOptions, IO, Justification, JustificationOption } from "./types"

const computeColumnWidths = (data: IO[], columnRange: number[]): number[] =>
    columnRange.map(columnIndex =>
        data.reduce(
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
        ))

const computeColumnRange = (data: IO[]) => {
    const exampleRow = data[ 0 ]
    const exampleRowCells = exampleRow.split("\t")
    const columnCount = exampleRowCells.length

    return [...Array(columnCount).keys()]
}

const computeJustifications = (justification: JustificationOption, columnRange: number[]) =>
    typeof justification === "string" ?
        columnRange.map(_ => justification) :
        columnRange.map(index => justification[ index ] || Justification.LEFT)

const furtherAlignRowCell = (alignedRowCell: IO, columnJustification: Justification): IO =>
    columnJustification === Justification.LEFT ?
        alignedRowCell + " " as IO :
        columnJustification === Justification.RIGHT ?
            " " + alignedRowCell as IO :
            alignedRowCell.length % 2 === 0 ?
                " " + alignedRowCell as IO :
                alignedRowCell + " " as IO

const computeAlignedRowCell = (rowCell: IO, { columnWidth, columnJustification }: ComputeAlignedRowCellOptions) => {
    let alignedRowCell = rowCell
    while (alignedRowCell.length < columnWidth) {
        alignedRowCell = furtherAlignRowCell(alignedRowCell, columnJustification)
    }

    return alignedRowCell
}

const alignTable = (data: IO[], { justification = Justification.LEFT }: AlignTableOptions = {}): IO[] => {
    const columnRange = computeColumnRange(data)
    const columnWidths = computeColumnWidths(data, columnRange)

    const justifications = computeJustifications(justification, columnRange)

    return data.map((row): IO => {
        const rowCells = row.split("\t") as IO[]
        const finalIndex = rowCells.length - 1

        return rowCells.reduce(
            (alignedRow: IO, rowCell, index) => {
                const columnWidth = columnWidths[ index ]
                const columnJustification = justifications[ index ]

                const alignedRowCell = computeAlignedRowCell(rowCell, { columnWidth, columnJustification })

                const maybeDelimeter = index === finalIndex ? "" : "\t"

                return alignedRow + alignedRowCell + maybeDelimeter as IO
            },
            "" as IO,
        )
    })
}

export {
    alignTable,
}
