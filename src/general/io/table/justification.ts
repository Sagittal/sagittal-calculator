import { Range } from "../../code"
import { Count } from "../../types"
import { length } from "../typedOperations"
import { Char, Io } from "../types"
import { Justification, JustificationOption, JustifiedCellOptions, Row, Table } from "./types"

const computeJustifications = (justification: JustificationOption, columnRange: number[]): Justification[] =>
    typeof justification === "string" ?
        columnRange.map((_: number): Justification => justification) :
        columnRange.map((index: number): Justification => justification[ index ] || Justification.LEFT)

const computeColumnWidths = <T = unknown>(table: Table<T>, columnRange: Range): Array<Count<Char>> =>
    columnRange.map((columnIndex: number): Count<Char> => {
        return table.reduce(
            (columnWidth: Count<Char>, row: Row<{ of: T }>): Count<Char> => {
                const columnCell = row[ columnIndex ]
                const cellWidth = length(columnCell)
                if (cellWidth > columnWidth) {
                    columnWidth = cellWidth
                }

                return columnWidth
            },
            0 as Count<Char>,
        )
    })


const furtherJustifyCell = (justifiedCell: Io, columnJustification: Justification): Io =>
    columnJustification === Justification.LEFT ?
        justifiedCell + " " as Io :
        columnJustification === Justification.RIGHT ?
            " " + justifiedCell as Io :
            justifiedCell.length % 2 === 0 ?
                " " + justifiedCell as Io :
                justifiedCell + " " as Io

const computeJustifiedCellForTerminal = (
    cell: Io,
    { columnWidth, columnJustification }: JustifiedCellOptions,
): Io => {
    let justifiedCell = cell
    while (justifiedCell.length < columnWidth) {
        justifiedCell = furtherJustifyCell(justifiedCell, columnJustification)
    }

    return justifiedCell
}

const computeJustifiedCellForForum = (
    cell: Io,
    { columnJustification }: { columnJustification: Justification },
): Io => {
    return columnJustification === Justification.LEFT ?
        cell :
        `[${columnJustification}]${cell}[/${columnJustification}]` as Io
}

export {
    computeJustifications,
    computeColumnWidths,
    computeJustifiedCellForTerminal,
    computeJustifiedCellForForum,
}
