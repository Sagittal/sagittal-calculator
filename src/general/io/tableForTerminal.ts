import { isUndefined, Range } from "../code"
import { Count } from "../types"
import { colorize } from "./colorize"
import { BLANK, NEWLINE } from "./constants"
import { addTexts, length } from "./typedOperations"
import {
    Char,
    ColorMethod,
    ComputeAlignedRowCellOptions,
    FormatTableOptions,
    IO,
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

const maybeColor = (rowText: IO, rowIndex: number, colors?: ColorMethod[]): IO => {
    if (isUndefined(colors)) {
        return rowText
    }

    const rowColor: ColorMethod = colors[ rowIndex ]

    return colorize(rowText, rowColor)
}

// todo: this should support header row count now that it shares options with for forum version

const formatTableForTerminal = (table: Table, options: FormatTableOptions = {}): IO => {
    const { justification = Justification.LEFT, colors } = options
    const columnRange = computeColumnRange(table)
    const columnWidths = computeColumnWidths(table, columnRange)
    const justifications = computeJustifications(justification, columnRange)

    return addTexts(table.map((row: Row, rowIndex): IO => {
        const finalIndex = row.length - 1

        const rowText = row.reduce(
            (alignedRow: IO, rowCell, rowCellIndex) => {
                const columnWidth = columnWidths[ rowCellIndex ]
                const columnJustification = justifications[ rowCellIndex ]

                const alignedRowCell = computeAlignedRowCell(rowCell, { columnWidth, columnJustification })

                const maybeDelimeter = rowCellIndex === finalIndex ? "" : "\t"

                return alignedRow + alignedRowCell + maybeDelimeter as IO
            },
            BLANK,
        )

        return maybeColor(rowText, rowIndex, colors)
    }).join(NEWLINE) as IO, NEWLINE) // TODO: a typed join in the io/typedOperations to clean up this "as"
}

export {
    formatTableForTerminal,
}
