import { isUndefined, Range } from "../code"
import { Count } from "../types"
import { colorize } from "./colorize"
import { BLANK, NEWLINE } from "./constants"
import { addTexts, join, length } from "./typedOperations"
import {
    Char,
    ColorMethod,
    ComputeAlignedRowCellOptions,
    FormatTableOptions,
    Io,
    Justification,
    JustificationOption,
    Row,
    Table,
} from "./types"

const computeColumnWidths = (table: Table, columnRange: Range): Array<Count<Char>> =>
    columnRange.map(columnIndex =>
        table.reduce(
            (columnWidth: Count<Char>, row: Row) => {
                const columnCell = row[ columnIndex ]
                const cellWidth = length(columnCell)
                if (cellWidth > columnWidth) {
                    columnWidth = cellWidth
                }

                return columnWidth
            },
            0 as Count<Char>,
        ))

const computeColumnRange = (table: Table): Range => {
    const exampleRow = table[ 0 ]
    const columnCount = exampleRow.length

    return [...Array(columnCount).keys()] as Range
}

const computeJustifications = (justification: JustificationOption, columnRange: number[]) =>
    typeof justification === "string" ?
        columnRange.map(_ => justification) :
        columnRange.map(index => justification[ index ] || Justification.LEFT)

const furtherAlignRowCell = (alignedRowCell: Io, columnJustification: Justification): Io =>
    columnJustification === Justification.LEFT ?
        alignedRowCell + " " as Io :
        columnJustification === Justification.RIGHT ?
            " " + alignedRowCell as Io :
            alignedRowCell.length % 2 === 0 ?
                " " + alignedRowCell as Io :
                alignedRowCell + " " as Io

const computeAlignedRowCell = (rowCell: Io, { columnWidth, columnJustification }: ComputeAlignedRowCellOptions) => {
    let alignedRowCell = rowCell
    while (alignedRowCell.length < columnWidth) {
        alignedRowCell = furtherAlignRowCell(alignedRowCell, columnJustification)
    }

    return alignedRowCell
}

const maybeColor = (rowText: Io, rowIndex: number, colors?: ColorMethod[]): Io => {
    if (isUndefined(colors)) {
        return rowText
    }

    const rowColor: ColorMethod = colors[ rowIndex ]

    return colorize(rowText, rowColor)
}

// TODO: this should support header row count now that it shares options with for forum version

const formatTableForTerminal = (table: Table, options: FormatTableOptions = {}): Io => {
    const { justification = Justification.LEFT, colors } = options
    const columnRange = computeColumnRange(table)
    const columnWidths = computeColumnWidths(table, columnRange)
    const justifications = computeJustifications(justification, columnRange)

    const formattedRows = table.map((row: Row, rowIndex): Io => {
        const finalIndex = row.length - 1

        const rowText = row.reduce(
            (alignedRow: Io, rowCell, rowCellIndex) => {
                const columnWidth = columnWidths[ rowCellIndex ]
                const columnJustification = justifications[ rowCellIndex ]

                const alignedRowCell = computeAlignedRowCell(rowCell, { columnWidth, columnJustification })

                const maybeDelimeter = rowCellIndex === finalIndex ? "" : "\t"

                return alignedRow + alignedRowCell + maybeDelimeter as Io
            },
            BLANK,
        )

        return maybeColor(rowText, rowIndex, colors)
    })
    const formattedTable: Io = join(formattedRows, NEWLINE)
    
    return addTexts(formattedTable, NEWLINE)
}

export {
    formatTableForTerminal,
}
