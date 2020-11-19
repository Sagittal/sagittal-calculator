import {isString, isUndefined, Maybe, Range} from "../../code"
import {Count} from "../../types"
import {BLANK} from "../constants"
import {length} from "../typedOperations"
import {Char, Io} from "../types"
import {Justification, JustificationOption, JustifiedCellOptions, Row, Table} from "./types"

const computeJustifications = (justification: JustificationOption, columnRange: Range): Array<Maybe<Justification>> =>
    isUndefined(justification) ?
        columnRange.map((_: number): undefined => undefined) :
    isString(justification) ?
        columnRange.map((_: number): Justification => justification) :
        columnRange.map((index: number): Maybe<Justification> => justification[index])

const computeColumnWidths = <T = unknown>(table: Table<T>, columnRange: Range): Array<Count<Char>> =>
    columnRange.map((columnIndex: number): Count<Char> => {
        return table.reduce(
            (columnWidth: Count<Char>, row: Row<{of: T}>): Count<Char> => {
                const columnCell = row[columnIndex]
                const cellWidth = isUndefined(columnCell) || columnCell.includes("[/latex]") ?
                    0 as Count<Char> :
                    length(columnCell)
                if (cellWidth > columnWidth) {
                    columnWidth = cellWidth
                }

                return columnWidth
            },
            0 as Count<Char>,
        )
    })

const furtherJustifyCell = (justifiedCell: Io, columnJustification: Maybe<Justification>): Io =>
    ((columnJustification === Justification.LEFT) || isUndefined(columnJustification)) ?
        justifiedCell + " " as Io :
        columnJustification === Justification.RIGHT ?
            " " + justifiedCell as Io :
            justifiedCell.length % 2 === 0 ?
                " " + justifiedCell as Io :
                justifiedCell + " " as Io

const computeJustifiedCell = (
    cell: Maybe<Io>,
    {columnWidth, columnJustification}: JustifiedCellOptions,
): Io => {
    let justifiedCell = isUndefined(cell) ? BLANK : cell

    while (justifiedCell.length < columnWidth) {
        justifiedCell = furtherJustifyCell(justifiedCell, columnJustification)
    }

    return justifiedCell
}

export {
    computeJustifications,
    computeColumnWidths,
    computeJustifiedCell,
}
