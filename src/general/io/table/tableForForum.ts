import { indexOfFinalElement } from "../../code"
import { BLANK, NEWLINE } from "../constants"
import { Formatted } from "../format"
import { join, sumTexts } from "../typedOperations"
import { Io } from "../types"
import { computeColumnRange } from "./columnRange"
import { DEFAULT_FORMAT_TABLE_OPTIONS } from "./constants"
import { computeJustifications, computeJustifiedCellForForum } from "./justification"
import { FormatTableOptions, Row, Table, TableForForumStuffOptions } from "./types"

const computeTableForForumRowParts = <T = unknown>(
    { index, headerRowCount, colors }: TableForForumStuffOptions<T>,
): { rowOpen: Io, rowClose: Io, separator: Io } => {
    const cellTag: Io = index < headerRowCount ? "th" as Io : "td" as Io

    const hiliteOpen: Io = colors ? colors[ index ] ? `[hilite=${colors[ index ]}]` as Io : BLANK as Io : BLANK
    const hiliteClose: Io = colors ? colors[ index ] ? "[/hilite]" as Io : BLANK : BLANK

    const cellOpen: Io = `[${cellTag}][pre]${hiliteOpen}` as Io
    const cellClose: Io = `${hiliteClose}[/pre][/${cellTag}]` as Io

    const rowOpen: Io = `[tr]${cellOpen}` as Io
    const rowClose: Io = `${cellClose}[/tr]` as Io

    const separator: Io = `${cellClose}${cellOpen}` as Io

    return { rowOpen, rowClose, separator }
}

const formatTableForForum = <T = unknown>(table: Table<T>, options?: Partial<FormatTableOptions<T>>): Io => {
    const {
        justification = DEFAULT_FORMAT_TABLE_OPTIONS.justification,
        colors = DEFAULT_FORMAT_TABLE_OPTIONS.colors,
        headerRowCount = DEFAULT_FORMAT_TABLE_OPTIONS.headerRowCount,
    } = options || {}

    const columnRange = computeColumnRange(table)
    const justifications = computeJustifications(justification, columnRange)

    const formattedRows: Io[] = table.map((row: Row<{ of: T }>, index: number): Io => {
        const { rowOpen, rowClose, separator } = computeTableForForumRowParts({ index, headerRowCount, colors })

        const rowText = row.reduce(
            (justifiedRow: Io, cell: Formatted<T>, cellIndex: number): Io => {
                const columnJustification = justifications[ cellIndex ]

                const justifiedCell: Io = computeJustifiedCellForForum(cell, { columnJustification })

                const maybeSeparator: Io = cellIndex === indexOfFinalElement(row) ? BLANK : separator

                return sumTexts(justifiedRow, justifiedCell, maybeSeparator)
            },
            BLANK,
        )

        return sumTexts(rowOpen, rowText, rowClose)
    })

    formattedRows.unshift("[table]" as Io)
    formattedRows.push("[/table]" as Io)

    const formattedTable: Io = join(formattedRows, NEWLINE)

    return sumTexts(formattedTable, NEWLINE)
}

export {
    formatTableForForum,
}
